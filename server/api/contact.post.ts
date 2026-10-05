import { Resend } from 'resend'

interface ContactBody {
  name?: string
  email?: string
  organization?: string
  subject?: string
  message?: string
  website?: string
}

const subjects: Record<string, string> = {
  project: 'Project or service',
  partnership: 'Partnership',
  recruitment: 'Professional opportunity',
  other: 'Other request',
}

const normalize = (value: unknown) =>
  typeof value === 'string' ? value.trim() : ''

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  if (!config.resendApiKey || !config.contactEmail) {
    console.error('Contact email configuration is missing.')

    throw createError({
      statusCode: 500,
      statusMessage: 'Contact service is unavailable.',
    })
  }

  const body = await readBody<ContactBody>(event)

  const name = normalize(body.name)
  const email = normalize(body.email).toLowerCase()
  const organization = normalize(body.organization)
  const subject = normalize(body.subject)
  const message = normalize(body.message)
  const website = normalize(body.website)

  // Honeypot anti-spam
  if (website) {
    return {
      success: true,
    }
  }

  if (!name || name.length > 120) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid name.',
    })
  }

  if (
    !email ||
    email.length > 254 ||
    !isValidEmail(email)
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email address.',
    })
  }

  if (organization.length > 160) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid organization.',
    })
  }

  if (!subjects[subject]) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid subject.',
    })
  }

  if (
    message.length < 15 ||
    message.length > 5000
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid message.',
    })
  }

  const resend = new Resend(config.resendApiKey)

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeOrganization = escapeHtml(organization)
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br>')
  const subjectLabel = subjects[subject]

  const { data, error } = await resend.emails.send({
    from: 'Xiani <onboarding@resend.dev>',

    to: [config.contactEmail],

    replyTo: email,

    subject: `[Xiani Contact] ${subjectLabel}`,

    html: `
      <!doctype html>
      <html lang="en">
        <body
          style="
            margin: 0;
            padding: 32px;
            background: #f7f7f9;
            font-family: Arial, sans-serif;
            color: #1c1c1c;
          "
        >
          <div
            style="
              max-width: 640px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 16px;
              padding: 32px;
            "
          >
            <p
              style="
                margin: 0 0 8px;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.12em;
                color: #666666;
              "
            >
              Xiani Contact
            </p>

            <h1
              style="
                margin: 0 0 32px;
                font-size: 24px;
              "
            >
              New contact request
            </h1>

            <p>
              <strong>Name</strong><br>
              ${safeName}
            </p>

            <p>
              <strong>Email</strong><br>
              ${safeEmail}
            </p>

            ${
              safeOrganization
                ? `
                  <p>
                    <strong>Organization</strong><br>
                    ${safeOrganization}
                  </p>
                `
                : ''
            }

            <p>
              <strong>Subject</strong><br>
              ${subjectLabel}
            </p>

            <div
              style="
                margin-top: 28px;
                padding-top: 24px;
                border-top: 1px solid #eeeeee;
              "
            >
              <strong>Message</strong>

              <p style="line-height: 1.7;">
                ${safeMessage}
              </p>
            </div>
          </div>
        </body>
      </html>
    `,
  })

  if (error) {
    console.error('Resend error:', error)

    throw createError({
      statusCode: 502,
      statusMessage: 'The message could not be sent.',
    })
  }

  return {
    success: true,
    id: data?.id,
  }
})