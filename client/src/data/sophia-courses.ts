
export interface SophiaCourse {
  id: string;
  name: string;
  category: string;
  difficulty: 'Very Easy' | 'Easy' | 'Moderate' | 'Hard' | 'Very Hard';
  completionTime: string;
  averageTimeWeeks: number;
  transfersTo: string[];
  description: string;
  tips: string[];
  redditInsights: string[];
  cost: number; // in addition to monthly subscription
}

export const sophiaCourses: SophiaCourse[] = [
  // Mathematics
  {
    id: 'sophia-intro-college-math',
    name: 'Introduction to College Mathematics',
    category: 'Mathematics',
    difficulty: 'Very Easy',
    completionTime: '1-2 weeks',
    averageTimeWeeks: 1.5,
    transfersTo: ['MATH 1201 - College Algebra'],
    description: 'Basic algebra and problem-solving skills',
    tips: [
      'Very straightforward - mostly basic algebra',
      'Practice quizzes are almost identical to final',
      'Can be completed in a weekend if you focus'
    ],
    redditInsights: [
      'Easiest math course on Sophia',
      'Good confidence booster before harder math',
      'Some students finish in 3 days'
    ],
    cost: 17
  },
  {
    id: 'sophia-college-algebra',
    name: 'College Algebra',
    category: 'Mathematics',
    difficulty: 'Easy',
    completionTime: '2-3 weeks',
    averageTimeWeeks: 2.5,
    transfersTo: ['MATH 1201 - College Algebra'],
    description: 'Comprehensive algebra including polynomials, functions, and graphing',
    tips: [
      'More challenging than Intro to College Math',
      'Focus on the touchstone assignments',
      'Use the equation editor carefully in assignments'
    ],
    redditInsights: [
      'Most popular choice for algebra requirement',
      'Good preparation for statistics',
      'Touchstones are key to success'
    ],
    cost: 17
  },
  {
    id: 'sophia-precalculus',
    name: 'Precalculus',
    category: 'Mathematics',
    difficulty: 'Hard',
    completionTime: '4-6 weeks',
    averageTimeWeeks: 5,
    transfersTo: ['MATH 1280 - Precalculus', 'MATH 1302 - College Mathematics'],
    description: 'Advanced algebra, trigonometry, and function analysis',
    tips: [
      'Most challenging math course on Sophia',
      'Master the unit circle early',
      'Take time with trigonometry section'
    ],
    redditInsights: [
      'Significantly harder than College Algebra',
      'Some students need 2-3 attempts',
      'Good for students planning to take Calculus'
    ],
    cost: 17
  },
  {
    id: 'sophia-statistics',
    name: 'Introduction to Statistics',
    category: 'Mathematics',
    difficulty: 'Moderate',
    completionTime: '2-4 weeks',
    averageTimeWeeks: 3,
    transfersTo: ['MATH 1280 - Statistics'],
    description: 'Descriptive and inferential statistics with real-world applications',
    tips: [
      'Formula sheet is provided for exams',
      'Focus on understanding concepts over memorization',
      'Practice with the statistical software'
    ],
    redditInsights: [
      'More conceptual than computational',
      'Good for students who struggle with pure math',
      'Touchstone projects are interesting'
    ],
    cost: 17
  },
  
  // English/Communication
  {
    id: 'sophia-english-comp-1',
    name: 'English Composition I',
    category: 'Communication',
    difficulty: 'Easy',
    completionTime: '1-3 weeks',
    averageTimeWeeks: 2,
    transfersTo: ['ENGL 1101 - English Composition I'],
    description: 'Basic essay writing, grammar, and composition skills',
    tips: [
      'Follow the rubric exactly',
      'Graders are very systematic',
      'Focus on structure over creativity'
    ],
    redditInsights: [
      'Easiest way to get English credit',
      'Very formulaic approach works best',
      'Can be completed quickly if you can write'
    ],
    cost: 17
  },
  {
    id: 'sophia-english-comp-2',
    name: 'English Composition II',
    category: 'Communication',
    difficulty: 'Moderate',
    completionTime: '2-4 weeks',
    averageTimeWeeks: 3,
    transfersTo: ['ENGL 1102 - English Composition II'],
    description: 'Research writing, critical analysis, and advanced composition',
    tips: [
      'Start research assignments early',
      'Use proper citation format',
      'Focus on argument development'
    ],
    redditInsights: [
      'More challenging than Comp I',
      'Research component takes time',
      'Good preparation for upper-level writing'
    ],
    cost: 17
  },
  {
    id: 'sophia-public-speaking',
    name: 'Public Speaking',
    category: 'Communication',
    difficulty: 'Moderate',
    completionTime: '2-3 weeks',
    averageTimeWeeks: 2.5,
    transfersTo: ['COMM 1100 - Introduction to Communication'],
    description: 'Speech preparation, delivery, and communication skills',
    tips: [
      'Video submissions required',
      'Practice speeches beforehand',
      'Focus on organization and clarity'
    ],
    redditInsights: [
      'Intimidating but manageable',
      'Good for overcoming speaking anxiety',
      'Feedback is helpful for improvement'
    ],
    cost: 17
  },

  // Science
  {
    id: 'sophia-environmental-science',
    name: 'Environmental Science',
    category: 'Science',
    difficulty: 'Easy',
    completionTime: '1-2 weeks',
    averageTimeWeeks: 1.5,
    transfersTo: ['BIOL 1301 - Introduction to Biology', 'ENVS 1301 - Environmental Science'],
    description: 'Environmental systems, sustainability, and ecological principles',
    tips: [
      'Lots of reading but straightforward',
      'Focus on vocabulary and definitions',
      'Final exam is multiple choice'
    ],
    redditInsights: [
      'One of the easiest science courses',
      'Good for students who dislike lab work',
      'Can be completed very quickly'
    ],
    cost: 17
  },
  {
    id: 'sophia-intro-biology',
    name: 'Introduction to Biology',
    category: 'Science',
    difficulty: 'Moderate',
    completionTime: '2-4 weeks',
    averageTimeWeeks: 3,
    transfersTo: ['BIOL 1301 - Introduction to Biology'],
    description: 'Cell biology, genetics, evolution, and biological systems',
    tips: [
      'Lab simulations are engaging',
      'Focus on understanding processes',
      'Use diagrams to help memorize'
    ],
    redditInsights: [
      'More challenging than Environmental Science',
      'Virtual labs are well-designed',
      'Good foundation for health-related courses'
    ],
    cost: 17
  },
  {
    id: 'sophia-human-biology',
    name: 'Human Biology',
    category: 'Science',
    difficulty: 'Moderate',
    completionTime: '3-4 weeks',
    averageTimeWeeks: 3.5,
    transfersTo: ['BIOL 1301 - Introduction to Biology'],
    description: 'Human anatomy, physiology, and health systems',
    tips: [
      'Memorization heavy',
      'Use anatomy diagrams extensively',
      'Break study sessions into body systems'
    ],
    redditInsights: [
      'More detailed than Intro Biology',
      'Good for pre-health students',
      'Requires consistent study schedule'
    ],
    cost: 17
  },

  // Social Sciences
  {
    id: 'sophia-intro-psychology',
    name: 'Introduction to Psychology',
    category: 'Social Sciences',
    difficulty: 'Easy',
    completionTime: '1-3 weeks',
    averageTimeWeeks: 2,
    transfersTo: ['PSYC 1101 - Introduction to Psychology'],
    description: 'Basic psychological concepts, theories, and research methods',
    tips: [
      'Very engaging content',
      'Focus on key theorists and concepts',
      'Apply concepts to real-life examples'
    ],
    redditInsights: [
      'One of the most enjoyable courses',
      'Good introduction to social sciences',
      'Practical applications are interesting'
    ],
    cost: 17
  },
  {
    id: 'sophia-intro-sociology',
    name: 'Introduction to Sociology',
    category: 'Social Sciences',
    difficulty: 'Easy',
    completionTime: '2-3 weeks',
    averageTimeWeeks: 2.5,
    transfersTo: ['SOCI 1101 - Introduction to Sociology'],
    description: 'Social structures, institutions, and group behavior',
    tips: [
      'Relates well to current events',
      'Focus on sociological theories',
      'Think critically about social issues'
    ],
    redditInsights: [
      'Eye-opening for many students',
      'Good complement to psychology',
      'Writing assignments are thought-provoking'
    ],
    cost: 17
  },

  // History
  {
    id: 'sophia-us-history-1',
    name: 'U.S. History I',
    category: 'History',
    difficulty: 'Easy',
    completionTime: '2-3 weeks',
    averageTimeWeeks: 2.5,
    transfersTo: ['HIST 1101 - U.S. History I'],
    description: 'American history from colonial times to Civil War',
    tips: [
      'Focus on major events and dates',
      'Use timeline study method',
      'Connect events to modern context'
    ],
    redditInsights: [
      'Straightforward if you like history',
      'Good storytelling approach',
      'Less memorization than expected'
    ],
    cost: 17
  },
  {
    id: 'sophia-us-history-2',
    name: 'U.S. History II',
    category: 'History',
    difficulty: 'Easy',
    completionTime: '2-3 weeks',
    averageTimeWeeks: 2.5,
    transfersTo: ['HIST 1102 - U.S. History II'],
    description: 'American history from Reconstruction to present',
    tips: [
      'Covers more recent events',
      'Good for understanding modern America',
      'Focus on major themes and movements'
    ],
    redditInsights: [
      'More engaging than History I for many',
      'Relevant to current events',
      'Good preparation for civics courses'
    ],
    cost: 17
  },

  // Philosophy/Ethics
  {
    id: 'sophia-intro-philosophy',
    name: 'Introduction to Philosophy',
    category: 'Philosophy',
    difficulty: 'Moderate',
    completionTime: '2-4 weeks',
    averageTimeWeeks: 3,
    transfersTo: ['PHIL 1101 - Introduction to Philosophy'],
    description: 'Major philosophical questions, arguments, and thinkers',
    tips: [
      'Take time to understand arguments',
      'Focus on logical reasoning',
      'Apply concepts to modern issues'
    ],
    redditInsights: [
      'Challenging but rewarding',
      'Good for developing critical thinking',
      'Some find it surprisingly practical'
    ],
    cost: 17
  },
  {
    id: 'sophia-intro-ethics',
    name: 'Introduction to Ethics',
    category: 'Philosophy',
    difficulty: 'Moderate',
    completionTime: '2-4 weeks',
    averageTimeWeeks: 3,
    transfersTo: ['PHIL 1404 - Ethics'],
    description: 'Moral philosophy, ethical theories, and applied ethics',
    tips: [
      'Focus on understanding ethical frameworks',
      'Apply theories to case studies',
      'Think about real-world applications'
    ],
    redditInsights: [
      'Very relevant to modern issues',
      'Good for personal development',
      'Prepares well for business ethics'
    ],
    cost: 17
  }
];

export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case 'Very Easy':
      return 'bg-green-100 text-green-800';
    case 'Easy':
      return 'bg-green-100 text-green-800';
    case 'Moderate':
      return 'bg-yellow-100 text-yellow-800';
    case 'Hard':
      return 'bg-orange-100 text-orange-800';
    case 'Very Hard':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getCoursesByCategory = (category: string): SophiaCourse[] => {
  return sophiaCourses.filter(course => course.category === category);
};

export const getCourseById = (id: string): SophiaCourse | undefined => {
  return sophiaCourses.find(course => course.id === id);
};
