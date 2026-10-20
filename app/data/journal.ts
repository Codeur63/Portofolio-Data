export type JournalEntryType = 'project' | 'article'
export type JournalDomain = 'data' | 'ai' | 'software'

export interface JournalSection {
  title: string
  content: string[]
}

export interface JournalEntry {
  slug: string
  type: JournalEntryType

  title: string
  excerpt: string

  category: string
  tags: string[]
  domains: JournalDomain[]
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

// export const journalEntries: JournalEntry[] = [
//   {
//     slug: 'redis-cache-aside',
//     type: 'project',

//     title: 'Improving Data Access with Redis Cache-Aside',

//     excerpt:
//       'Designing and benchmarking a Redis caching layer to reduce repeated database access and improve application performance.',

//     category: 'Data Engineering',

//     tags: [
//       'Redis',
//       'MongoDB',
//       'Performance',
//     ],

//     date: '2026-10-01',

//     image: '/images/skills/skill-rag-2.webp',

//     imageAlt:
//       'Architecture of a Redis cache-aside implementation',

//     featured: true,

//     metric: {
//       value: '×3.2',
//       label: 'Faster',
//     },
//     sections: [
//           {
//             title: 'The challenge',
//             content: [
//               'Repeated access to the same data can create unnecessary database queries and increase response times.',
//               'The objective of this experiment was to evaluate whether a cache-aside strategy using Redis could reduce repeated MongoDB access and improve retrieval performance.',
//             ],
//           },
    
//           {
//             title: 'The approach',
//             content: [
//               'The application first checks Redis for the requested data. When the value is available, it is returned directly from the cache.',
//               'When the cache does not contain the value, the application retrieves it from MongoDB and stores the result in Redis for subsequent requests.',
//             ],
//           },
    
//           {
//             title: 'Benchmark',
//             content: [
//               'The benchmark compared direct MongoDB access with cached retrieval through Redis under the same test scenario.',
//               'The measured retrieval time decreased from approximately 0.740 ms to 0.233 ms in the tested scenario, representing an improvement of approximately ×3.2.',
//             ],
//           },
    
//           {
//             title: 'What I learned',
//             content: [
//               'Caching can significantly reduce repeated database access, but its value depends on access patterns, cache invalidation strategy and the cost of maintaining consistency.',
//               'The experiment reinforced an important engineering principle: optimization should be measured rather than assumed.',
//             ],
//           },
//         ],
//   },

//   {
//     slug: 'rag-knowledge-system',
//     type: 'project',

//     title: 'Building a RAG Knowledge System',

//     excerpt:
//       'Building a retrieval-augmented generation pipeline that connects thousands of documents to a language model.',

//     category: 'Artificial Intelligence',

//     tags: [
//       'RAG',
//       'LLM',
//       'Vector Search',
//     ],

//     date: '2026-09-18',

//     image: '/images/skills/skill-rag-2.webp',

//     imageAlt:
//       'Retrieval-augmented generation system architecture',

//     metric: {
//       value: '9.7K+',
//       label: 'Documents',
//     },
//   },

//   {
//     slug: 'machine-learning-experimentation',
//     type: 'project',

//     title: 'From Data to Machine Learning Experiments',

//     excerpt:
//       'Training and comparing machine learning models on a structured dataset while measuring their actual predictive performance.',

//     category: 'Machine Learning',

//     tags: [
//       'Python',
//       'Scikit-learn',
//       'XGBoost',
//     ],

//     date: '2026-08-12',

//     image: '/images/skills/skill-data-mlflow.webp',

//     imageAlt:
//       'Machine learning model experimentation results',

//     metric: {
//       value: '50K+',
//       label: 'Observations',
//     },
//     sections: [
//           {
//             title: 'The challenge',
//             content: [
//               'Repeated access to the same data can create unnecessary database queries and increase response times.',
//               'The objective of this experiment was to evaluate whether a cache-aside strategy using Redis could reduce repeated MongoDB access and improve retrieval performance.',
//             ],
//           },
    
//           {
//             title: 'The approach',
//             content: [
//               'The application first checks Redis for the requested data. When the value is available, it is returned directly from the cache.',
//               'When the cache does not contain the value, the application retrieves it from MongoDB and stores the result in Redis for subsequent requests.',
//             ],
//           },
    
//           {
//             title: 'Benchmark',
//             content: [
//               'The benchmark compared direct MongoDB access with cached retrieval through Redis under the same test scenario.',
//               'The measured retrieval time decreased from approximately 0.740 ms to 0.233 ms in the tested scenario, representing an improvement of approximately ×3.2.',
//             ],
//           },
    
//           {
//             title: 'What I learned',
//             content: [
//               'Caching can significantly reduce repeated database access, but its value depends on access patterns, cache invalidation strategy and the cost of maintaining consistency.',
//               'The experiment reinforced an important engineering principle: optimization should be measured rather than assumed.',
//             ],
//           },
//         ],
//   },

//   {
//     slug: 'designing-data-systems-for-observability',
//     type: 'article',

//     title: 'Why Data Systems Need Observability',

//     excerpt:
//       'A practical look at why logs, metrics and monitoring should be considered part of the architecture rather than added afterwards.',

//     category: 'Engineering Notes',

//     tags: [
//       'Observability',
//       'Monitoring',
//       'Architecture',
//     ],

//     date: '2026-09-05',

//     readingTime: '6 min',
//   }
// ]

export const journalEntries: JournalEntry[] = [
  {
    slug: 'redis-cache-aside',
    type: 'project',
    title: 'Reducing Repeated Database Reads with Redis',
    excerpt: 'A technical experiment comparing direct MongoDB retrieval with a Redis cache-aside layer, including the limits of the measured result.',
    category: 'Data Engineering',
    domains: ['data', 'software'],
    tags: ['Redis', 'MongoDB', 'Cache-aside', 'Technical experiment'],
    date: '2026-10-01',
    image: '/images/skills/skill-data.webp',
    imageAlt: 'Data analytics interface used to illustrate the experiment',
    featured: true,
    metric: { value: '×3.2', label: 'Retrieval speed in this benchmark' },
    sections: [
      {
        title: 'The problem',
        content: [
          'Repeated reads of the same data can create avoidable database work. This experiment explored a cache-aside layer with MongoDB as the source of truth and Redis as the cache.',
          'The question was specific: could cached retrieval reduce data access time in the measured scenario? This was a technical experiment, not a client production deployment.',
        ],
      },
      {
        title: 'The approach',
        content: [
          'The application checks Redis first. On a cache hit it returns the stored value. On a miss it queries MongoDB, then stores the result in Redis for later requests.',
          'This separates the retrieval path from persistent storage, while introducing decisions about expiration, invalidation and behavior when the cache is unavailable.',
        ],
      },
      {
        title: 'The measured result',
        content: [
          'The recorded retrieval times were approximately 0.740 ms for MongoDB and 0.233 ms for Redis, a ratio of about 3.2 in the tested scenario.',
          'These figures describe retrieval time in this experiment. They do not establish an equivalent improvement in end-to-end application latency or production throughput.',
        ],
      },
      {
        title: 'Limits and next steps',
        content: [
          'The published notes do not include the hardware, number of repetitions, latency distribution or cache hit rate. The measurement should be treated as an initial observation until those details are documented.',
          'Before using this approach in production, evaluate representative traffic, cold-cache behavior, invalidation, consistency requirements and failure handling. A cache is useful when its operational cost is justified by the workload.',
        ],
      },
    ],
  },
  {
    slug: 'machine-learning-experimentation',
    type: 'project',
    title: 'Comparing Models for Credit Scoring',
    excerpt: 'An exploratory comparison of three classification models on approximately 51,000 observations, with results and limitations made explicit.',
    category: 'Machine Learning',
    domains: ['ai', 'data'],
    tags: ['Python', 'Random Forest', 'XGBoost', 'Technical experiment'],
    date: '2026-08-12',
    image: '/images/skills/skill-data-mlflow.webp',
    imageAlt: 'Experiment tracking interface illustrating model comparison',
    metric: { value: '51K', label: 'Approximate dataset observations' },
    sections: [
      {
        title: 'The problem',
        content: [
          'This exploratory project compared classification approaches on a credit-scoring dataset with approximately 51,000 observations and 26 variables. Its purpose was to examine predictive performance and identify limitations.',
          'It was a model comparison experiment, not a validated system for making lending decisions.',
        ],
      },
      {
        title: 'The approach',
        content: [
          'The work covered data preparation and comparison of logistic regression, Random Forest and XGBoost. Area under the ROC curve (AUC) was used to report model discrimination.',
          'The current project summary does not document the split strategy, preprocessing details or hyperparameters. Those details are needed to reproduce the comparison.',
        ],
      },
      {
        title: 'Recorded results',
        content: [
          'The project summary records AUC values of 0.6298 for Random Forest, 0.6100 for XGBoost and 0.5871 for logistic regression.',
          'Random Forest had the highest recorded AUC in this comparison. These modest scores call for further investigation and do not demonstrate production readiness.',
        ],
      },
      {
        title: 'Limits and next steps',
        content: [
          'A stronger evaluation would document leakage checks, class balance, train/test separation and performance stability. The results should be checked against the original experiment artifacts before reuse.',
          'Any operational credit-scoring application would also need explainability, fairness assessment and appropriate human oversight. Dataset size alone is not evidence of a useful model.',
        ],
      },
    ],
  },
]
