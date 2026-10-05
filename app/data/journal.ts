export type JournalEntryType = 'project' | 'article'

export interface JournalEntry {
  slug: string
  type: JournalEntryType

  title: string
  excerpt: string

  category: string
  tags: string[]

  date: string
  readingTime?: string

  image?: string
  imageAlt?: string

  featured?: boolean

  metric?: {
    value: string
    label: string
  }
  
  sections?: JournalSection[]
}

export const journalEntries: JournalEntry[] = [
  {
    slug: 'redis-cache-aside',
    type: 'project',

    title: 'Improving Data Access with Redis Cache-Aside',

    excerpt:
      'Designing and benchmarking a Redis caching layer to reduce repeated database access and improve application performance.',

    category: 'Data Engineering',

    tags: [
      'Redis',
      'MongoDB',
      'Performance',
    ],

    date: '2026-10-01',

    image: '/images/skills/skill-rag-2.png',

    imageAlt:
      'Architecture of a Redis cache-aside implementation',

    featured: true,

    metric: {
      value: '×3.2',
      label: 'Faster',
    },
    sections: [
          {
            title: 'The challenge',
            content: [
              'Repeated access to the same data can create unnecessary database queries and increase response times.',
              'The objective of this experiment was to evaluate whether a cache-aside strategy using Redis could reduce repeated MongoDB access and improve retrieval performance.',
            ],
          },
    
          {
            title: 'The approach',
            content: [
              'The application first checks Redis for the requested data. When the value is available, it is returned directly from the cache.',
              'When the cache does not contain the value, the application retrieves it from MongoDB and stores the result in Redis for subsequent requests.',
            ],
          },
    
          {
            title: 'Benchmark',
            content: [
              'The benchmark compared direct MongoDB access with cached retrieval through Redis under the same test scenario.',
              'The measured retrieval time decreased from approximately 0.740 ms to 0.233 ms in the tested scenario, representing an improvement of approximately ×3.2.',
            ],
          },
    
          {
            title: 'What I learned',
            content: [
              'Caching can significantly reduce repeated database access, but its value depends on access patterns, cache invalidation strategy and the cost of maintaining consistency.',
              'The experiment reinforced an important engineering principle: optimization should be measured rather than assumed.',
            ],
          },
        ],
  },

  {
    slug: 'rag-knowledge-system',
    type: 'project',

    title: 'Building a RAG Knowledge System',

    excerpt:
      'Building a retrieval-augmented generation pipeline that connects thousands of documents to a language model.',

    category: 'Artificial Intelligence',

    tags: [
      'RAG',
      'LLM',
      'Vector Search',
    ],

    date: '2026-09-18',

    image: '/images/skills/skill-rag-2.png',

    imageAlt:
      'Retrieval-augmented generation system architecture',

    metric: {
      value: '9.7K+',
      label: 'Documents',
    },
  },

  {
    slug: 'machine-learning-experimentation',
    type: 'project',

    title: 'From Data to Machine Learning Experiments',

    excerpt:
      'Training and comparing machine learning models on a structured dataset while measuring their actual predictive performance.',

    category: 'Machine Learning',

    tags: [
      'Python',
      'Scikit-learn',
      'XGBoost',
    ],

    date: '2026-08-12',

    image: '/images/skills/skill-data-mlflow.png',

    imageAlt:
      'Machine learning model experimentation results',

    metric: {
      value: '50K+',
      label: 'Observations',
    },
    sections: [
          {
            title: 'The challenge',
            content: [
              'Repeated access to the same data can create unnecessary database queries and increase response times.',
              'The objective of this experiment was to evaluate whether a cache-aside strategy using Redis could reduce repeated MongoDB access and improve retrieval performance.',
            ],
          },
    
          {
            title: 'The approach',
            content: [
              'The application first checks Redis for the requested data. When the value is available, it is returned directly from the cache.',
              'When the cache does not contain the value, the application retrieves it from MongoDB and stores the result in Redis for subsequent requests.',
            ],
          },
    
          {
            title: 'Benchmark',
            content: [
              'The benchmark compared direct MongoDB access with cached retrieval through Redis under the same test scenario.',
              'The measured retrieval time decreased from approximately 0.740 ms to 0.233 ms in the tested scenario, representing an improvement of approximately ×3.2.',
            ],
          },
    
          {
            title: 'What I learned',
            content: [
              'Caching can significantly reduce repeated database access, but its value depends on access patterns, cache invalidation strategy and the cost of maintaining consistency.',
              'The experiment reinforced an important engineering principle: optimization should be measured rather than assumed.',
            ],
          },
        ],
  },

  {
    slug: 'designing-data-systems-for-observability',
    type: 'article',

    title: 'Why Data Systems Need Observability',

    excerpt:
      'A practical look at why logs, metrics and monitoring should be considered part of the architecture rather than added afterwards.',

    category: 'Engineering Notes',

    tags: [
      'Observability',
      'Monitoring',
      'Architecture',
    ],

    date: '2026-09-05',

    readingTime: '6 min',
  }
]