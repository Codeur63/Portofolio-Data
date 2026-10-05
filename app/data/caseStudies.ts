export interface CaseStudy {
  slug: string
  title: string
  eyebrow: string
  summary: string
  context: string
  challenge: string
  approach: string[]
  outcome: string
  limits: string
  stack: string[]
  image?: string
  imageAlt?: string
}

// Editorial content based on the previously supplied project summary.
// Verify figures, scope, screenshots and permissions against final project reports before publishing.
export const caseStudies: Record<string, CaseStudy> = {
  solarmboa: {
    slug: 'solarmboa', title: 'Solarmboa', eyebrow: 'Data Engineering · Étude de cas',
    summary: 'Expérimentation d’une architecture de données associant MongoDB et Redis.',
    context: 'Projet technique consacré à l’accès aux données et à l’évaluation d’un mécanisme de cache.',
    challenge: 'Évaluer si un cache Redis peut réduire le temps d’accès aux données dans un scénario précis, sans confondre performance locale et performance globale du système.',
    approach: [
      'Mettre en place un scénario de lecture avec MongoDB comme base de données et Redis comme couche de cache.',
      'Tester une stratégie cache-aside et mesurer les temps de réponse sur un scénario comparable.',
      'Comparer les résultats et documenter les conditions dans lesquelles le cache présente un intérêt.'
    ],
    outcome: 'Sur le scénario mesuré : MongoDB 0,740 ms ; Redis 0,233 ms, soit environ 3,2 fois plus rapide.',
    limits: 'Ce résultat est propre au benchmark réalisé. Il ne prédit pas à lui seul les performances en production : charge, taux de succès du cache, invalidation et infrastructure doivent aussi être évalués.',
    stack: ['MongoDB', 'Redis', 'Cache-aside', 'Benchmark'],
    image: '/images/skills/skill-data.png', imageAlt: 'Capture technique du projet Solarmboa'
  },
  'credit-scoring': {
    slug: 'credit-scoring', title: 'Credit Scoring', eyebrow: 'Machine Learning · Étude de cas',
    summary: 'Comparaison expérimentale de modèles pour un problème de scoring.',
    context: 'Projet de modélisation sur un jeu de données de scoring comprenant environ 51 000 observations et 26 variables.',
    challenge: 'Comparer plusieurs approches de classification et interpréter les résultats sans masquer les limites des modèles.',
    approach: [
      'Préparer les données et organiser le protocole d’évaluation.',
      'Comparer notamment régression logistique, Random Forest et XGBoost.',
      'Examiner les performances mesurées et les pistes d’amélioration.'
    ],
    outcome: 'AUC observées : Random Forest 0,6298 ; XGBoost 0,6100 ; régression logistique 0,5871.',
    limits: 'Ces scores décrivent une expérimentation et ne suffisent pas à valider un système de décision de crédit. La stabilité, les biais, l’explicabilité et la conformité exigeraient des évaluations complémentaires.',
    stack: ['Python', 'Random Forest', 'XGBoost', 'Régression logistique', 'AUC']
  },
  'ai-agent': {
    slug: 'ai-agent', title: 'Agent IA', eyebrow: 'Intelligence artificielle · Étude de cas',
    summary: 'Prototype d’agent conversationnel combinant modèle de langage et outils.',
    context: 'Exploration de l’orchestration d’un agent IA appliqué à des cas d’usage financiers.',
    challenge: 'Passer d’une réponse conversationnelle à une interaction structurée avec des outils, tout en gardant les résultats vérifiables.',
    approach: [
      'Définir les responsabilités du modèle de langage et des outils externes.',
      'Structurer des appels d’outils pour récupérer des données et effectuer des calculs.',
      'Étudier l’intégration d’une récupération documentaire pour enrichir les réponses.'
    ],
    outcome: 'Prototype exploratoire d’orchestration LLM et d’appels d’outils. Aucun indicateur de performance vérifié n’est publié ici.',
    limits: 'Le niveau d’industrialisation, la fiabilité des sources, les évaluations et la couverture RAG doivent être documentés avant toute revendication de mise en production.',
    stack: ['LLM', 'Tool calling', 'Python', 'RAG (étudié)']
  }
}

export const caseStudySlugs = Object.keys(caseStudies)
