
export interface SophiaCourse {
  id: string;
  name: string;
  courseCode: string;
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
    courseCode: 'SOPH-0001',
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
    courseCode: 'SOPH-0002',
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
    courseCode: 'SOPH-0003',
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
    courseCode: 'SOPH-0004',
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
    courseCode: 'SOPH-0101',
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
    courseCode: 'SOPH-0102',
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
    courseCode: 'SOPH-0103',
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
    courseCode: 'SOPH-0201',
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
    courseCode: 'SOPH-0202',
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
    courseCode: 'SOPH-0203',
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
    courseCode: 'SOPH-0301',
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
    courseCode: 'SOPH-0302',
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
    courseCode: 'SOPH-0401',
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
    courseCode: 'SOPH-0402',
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
    courseCode: 'SOPH-0501',
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
    courseCode: 'SOPH-0502',
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
  },
  {
    id: 'sophia-foundations-english',
    name: 'Foundations of English Composition',
    courseCode: 'SOPH-0104',
    category: 'Communication',
    difficulty: 'Easy',
    completionTime: '2-3 weeks',
    averageTimeWeeks: 2.5,
    transfersTo: ['ENGL 1101 - English Composition I'],
    description: 'Foundational writing skills, grammar, and basic composition principles',
    tips: [
      'Focus on structure and organization',
      'Practice different writing formats',
      'Use feedback to improve drafts'
    ],
    redditInsights: [
      'Good preparation for Composition I',
      'Builds confidence in writing',
      'Covers essential grammar concepts'
    ],
    cost: 17
  },
  {
    id: 'sophia-calculus',
    name: 'Calculus',
    courseCode: 'SOPH-0005',
    category: 'Mathematics',
    difficulty: 'Very Hard',
    completionTime: '6-8 weeks',
    averageTimeWeeks: 7,
    transfersTo: ['MATH 1401 - Calculus I'],
    description: 'Limits, derivatives, integrals, and applications of calculus',
    tips: [
      'Strong algebra foundation required',
      'Practice problems daily',
      'Understand concepts before memorizing formulas'
    ],
    redditInsights: [
      'Most challenging math course on Sophia',
      'Requires significant time investment',
      'Good for STEM majors'
    ],
    cost: 17
  },
  {
    id: 'sophia-studying-religions',
    name: 'Approaches to Studying Religions',
    courseCode: 'SOPH-0503',
    category: 'Philosophy',
    difficulty: 'Moderate',
    completionTime: '3-4 weeks',
    averageTimeWeeks: 3.5,
    transfersTo: ['RLGN 1301 - World Religions'],
    description: 'Comparative study of world religions and religious practices',
    tips: [
      'Approach with open mind and respect',
      'Focus on understanding different perspectives',
      'Take notes on key concepts and practices'
    ],
    redditInsights: [
      'Eye-opening and educational',
      'Good for cultural understanding',
      'Respectful approach to sensitive topics'
    ],
    cost: 17
  },
  {
    id: 'sophia-intro-it',
    name: 'Introduction to Information Technology',
    courseCode: 'SOPH-0601',
    category: 'Computer Science',
    difficulty: 'Easy',
    completionTime: '2-3 weeks',
    averageTimeWeeks: 2.5,
    transfersTo: ['CS 1101 - Programming Fundamentals', 'IT 1101 - Introduction to IT'],
    description: 'Basic computer concepts, software, hardware, and digital literacy',
    tips: [
      'Hands-on practice with software',
      'Learn keyboard shortcuts',
      'Understand basic troubleshooting'
    ],
    redditInsights: [
      'Great for non-technical students',
      'Practical skills learned',
      'Good foundation for computer courses'
    ],
    cost: 17
  },
  {
    id: 'sophia-art-history-1',
    name: 'Art History I',
    courseCode: 'SOPH-0403',
    category: 'History',
    difficulty: 'Moderate',
    completionTime: '3-4 weeks',
    averageTimeWeeks: 3.5,
    transfersTo: ['ART 1101 - Art History I'],
    description: 'Ancient to medieval art history, styles, and cultural contexts',
    tips: [
      'Use visual memory techniques',
      'Connect art to historical periods',
      'Study artist names and time periods'
    ],
    redditInsights: [
      'Visually engaging course',
      'Good for humanities requirements',
      'Memorization of dates and artists required'
    ],
    cost: 17
  },
  {
    id: 'sophia-art-history-2',
    name: 'Art History II',
    courseCode: 'SOPH-0404',
    category: 'History',
    difficulty: 'Moderate',
    completionTime: '3-4 weeks',
    averageTimeWeeks: 3.5,
    transfersTo: ['ART 1102 - Art History II'],
    description: 'Renaissance to modern art history, movements, and artistic evolution',
    tips: [
      'Build on Art History I knowledge',
      'Focus on artistic movements',
      'Understand social and cultural influences'
    ],
    redditInsights: [
      'More engaging than Art History I for many',
      'Covers more familiar art periods',
      'Good continuation course'
    ],
    cost: 17
  },
  {
    id: 'sophia-visual-communication',
    name: 'Visual Communication',
    courseCode: 'SOPH-0105',
    category: 'Communication',
    difficulty: 'Easy',
    completionTime: '2-3 weeks',
    averageTimeWeeks: 2.5,
    transfersTo: ['ART 1301 - Visual Arts', 'COMM 1301 - Communication'],
    description: 'Design principles, visual elements, and effective communication through imagery',
    tips: [
      'Practice with design software',
      'Study color theory and composition',
      'Analyze effective visual designs'
    ],
    redditInsights: [
      'Creative and practical course',
      'Good for design-minded students',
      'Useful skills for presentations'
    ],
    cost: 17
  },
  {
    id: 'sophia-greek-philosophers',
    name: 'Ancient Greek Philosophers',
    courseCode: 'SOPH-0504',
    category: 'Philosophy',
    difficulty: 'Hard',
    completionTime: '4-5 weeks',
    averageTimeWeeks: 4.5,
    transfersTo: ['PHIL 1101 - Introduction to Philosophy'],
    description: 'Study of Socrates, Plato, Aristotle, and other ancient Greek philosophical thought',
    tips: [
      'Take time to understand complex concepts',
      'Connect philosophical ideas to modern applications',
      'Practice critical thinking skills'
    ],
    redditInsights: [
      'Intellectually challenging but rewarding',
      'Good foundation for philosophy',
      'Requires careful reading and analysis'
    ],
    cost: 17
  },
  {
    id: 'sophia-lifespan-development',
    name: 'Lifespan Development',
    courseCode: 'SOPH-0303',
    category: 'Social Sciences',
    difficulty: 'Moderate',
    completionTime: '3-4 weeks',
    averageTimeWeeks: 3.5,
    transfersTo: ['PSYC 1301 - Developmental Psychology'],
    description: 'Human development from birth to death, psychological and social changes',
    tips: [
      'Connect theories to real-life examples',
      'Study developmental stages carefully',
      'Understand nature vs. nurture debates'
    ],
    redditInsights: [
      'Practical and applicable to life',
      'Good for education and psychology majors',
      'Interesting case studies and examples'
    ],
    cost: 17
  },
  {
    id: 'sophia-intro-nutrition',
    name: 'Introduction to Nutrition',
    courseCode: 'SOPH-0204',
    category: 'Science',
    difficulty: 'Easy',
    completionTime: '2-3 weeks',
    averageTimeWeeks: 2.5,
    transfersTo: ['BIOL 1301 - Introduction to Biology', 'HLTH 1301 - Personal Health'],
    description: 'Basic nutrition principles, dietary guidelines, and health applications',
    tips: [
      'Apply concepts to personal diet',
      'Learn to read nutrition labels',
      'Understand macronutrients and micronutrients'
    ],
    redditInsights: [
      'Practical and immediately useful',
      'Good for health-conscious students',
      'Easy to relate to daily life'
    ],
    cost: 17
  },
  {
    id: 'sophia-conflict-resolution',
    name: 'Conflict Resolution',
    courseCode: 'SOPH-0304',
    category: 'Social Sciences',
    difficulty: 'Moderate',
    completionTime: '3-4 weeks',
    averageTimeWeeks: 3.5,
    transfersTo: ['COMM 1301 - Communication', 'PSYC 1301 - Social Psychology'],
    description: 'Strategies for managing and resolving conflicts in various settings',
    tips: [
      'Practice active listening techniques',
      'Learn de-escalation strategies',
      'Apply concepts to real situations'
    ],
    redditInsights: [
      'Valuable life skills learned',
      'Good for business and education majors',
      'Practical applications in workplace'
    ],
    cost: 17
  },
  {
    id: 'sophia-college-readiness',
    name: 'College Readiness',
    courseCode: 'SOPH-0701',
    category: 'General Education',
    difficulty: 'Very Easy',
    completionTime: '1-2 weeks',
    averageTimeWeeks: 1.5,
    transfersTo: ['UNIV 1101 - University Success'],
    description: 'Study skills, time management, and college success strategies',
    tips: [
      'Implement strategies immediately',
      'Focus on time management techniques',
      'Practice note-taking methods'
    ],
    redditInsights: [
      'Perfect for new college students',
      'Quick and easy completion',
      'Practical skills for academic success'
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
