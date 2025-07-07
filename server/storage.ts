import { courses, courseSelections, users, type User, type InsertUser, type Course, type CourseSelection, type InsertCourse, type InsertCourseSelection } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getCoursesByCategory(category: string): Promise<Course[]>;
  getCoursesByProvider(provider: string): Promise<Course[]>;
  getAllCourses(): Promise<Course[]>;
  
  saveCourseSelection(selection: InsertCourseSelection): Promise<CourseSelection>;
  getCourseSelections(sessionId: string): Promise<CourseSelection[]>;
  clearCourseSelections(sessionId: string): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private courses: Map<number, Course>;
  private courseSelections: Map<number, CourseSelection>;
  private currentUserId: number;
  private currentCourseId: number;
  private currentSelectionId: number;

  constructor() {
    this.users = new Map();
    this.courses = new Map();
    this.courseSelections = new Map();
    this.currentUserId = 1;
    this.currentCourseId = 1;
    this.currentSelectionId = 1;
    
    // Initialize with course data
    this.initializeCourses();
  }

  private initializeCourses() {
    const courseData = [
      // Communication
      { name: 'English Composition I', provider: 'uopeople', category: 'communication', credits: 3, description: 'Fundamental writing skills and essay composition.' },
      { name: 'English Composition II', provider: 'uopeople', category: 'communication', credits: 3, description: 'Advanced writing techniques and research methods.' },
      { name: 'Public Speaking', provider: 'uopeople', category: 'communication', credits: 3, description: 'Effective oral communication and presentation skills.' },
      { name: 'English Composition', provider: 'sophia', category: 'communication', credits: 3, description: 'Comprehensive writing course with peer review.' },
      { name: 'Communications', provider: 'sophia', category: 'communication', credits: 3, description: 'Effective communication in academic and professional settings.' },
      { name: 'Public Speaking', provider: 'sophia', category: 'communication', credits: 3, description: 'Build confidence in oral communication and presentations.' },
      
      // Math
      { name: 'College Algebra', provider: 'uopeople', category: 'math', credits: 3, description: 'Fundamental algebraic concepts and problem-solving techniques.' },
      { name: 'Statistics', provider: 'uopeople', category: 'math', credits: 3, description: 'Introduction to statistical methods and data analysis.' },
      { name: 'Calculus I', provider: 'uopeople', category: 'math', credits: 3, description: 'Differential calculus and its applications.' },
      { name: 'Algebra', provider: 'sophia', category: 'math', credits: 3, description: 'Comprehensive algebra course covering linear equations and inequalities.' },
      { name: 'Statistics', provider: 'sophia', category: 'math', credits: 3, description: 'Statistical concepts with real-world applications.' },
      { name: 'Precalculus', provider: 'sophia', category: 'math', credits: 3, description: 'Preparation for calculus with trigonometry and functions.' },
      
      // Values and Ethical Reasoning
      { name: 'Ethics and Social Responsibility', provider: 'uopeople', category: 'values', credits: 3, description: 'Exploring ethical frameworks and moral decision-making.' },
      { name: 'Philosophy of Ethics', provider: 'uopeople', category: 'values', credits: 3, description: 'Classical and contemporary ethical theories.' },
      { name: 'Business Ethics', provider: 'uopeople', category: 'values', credits: 3, description: 'Ethical considerations in business and professional contexts.' },
      { name: 'Ethics', provider: 'sophia', category: 'values', credits: 3, description: 'Introduction to moral philosophy and ethical reasoning.' },
      { name: 'Introduction to Philosophy', provider: 'sophia', category: 'values', credits: 3, description: 'Fundamental questions about existence, knowledge, and values.' },
      { name: 'Critical Thinking', provider: 'sophia', category: 'values', credits: 3, description: 'Develop analytical and logical reasoning skills.' },
      
      // Civilization Studies, Cultures, and Beliefs
      { name: 'World History', provider: 'uopeople', category: 'civilization', credits: 3, description: 'Survey of major civilizations and historical developments.' },
      { name: 'Comparative Religion', provider: 'uopeople', category: 'civilization', credits: 3, description: 'Study of world religions and belief systems.' },
      { name: 'Cultural Anthropology', provider: 'uopeople', category: 'civilization', credits: 3, description: 'Understanding diverse cultures and human societies.' },
      { name: 'World History', provider: 'sophia', category: 'civilization', credits: 3, description: 'Comprehensive overview of global historical developments.' },
      { name: 'World Religions', provider: 'sophia', category: 'civilization', credits: 3, description: 'Exploration of major world religions and their impact.' },
      { name: 'Art History', provider: 'sophia', category: 'civilization', credits: 3, description: 'Survey of artistic movements and cultural expressions.' },
      
      // Natural Science
      { name: 'Biology', provider: 'uopeople', category: 'science', credits: 3, description: 'Introduction to biological systems and life processes.' },
      { name: 'Chemistry', provider: 'uopeople', category: 'science', credits: 3, description: 'Basic principles of chemistry and molecular interactions.' },
      { name: 'Physics', provider: 'uopeople', category: 'science', credits: 3, description: 'Fundamental physics concepts and natural phenomena.' },
      { name: 'Environmental Science', provider: 'sophia', category: 'science', credits: 3, description: 'Study of environmental systems and sustainability.' },
      { name: 'Chemistry', provider: 'sophia', category: 'science', credits: 3, description: 'Comprehensive chemistry course with lab simulations.' },
      { name: 'Astronomy', provider: 'sophia', category: 'science', credits: 3, description: 'Exploration of celestial objects and cosmic phenomena.' },
      
      // Humanities
      { name: 'Literature', provider: 'uopeople', category: 'humanities', credits: 3, description: 'Analysis of literary works and critical thinking.' },
      { name: 'Art History', provider: 'uopeople', category: 'humanities', credits: 3, description: 'Survey of artistic movements and cultural expressions.' },
      { name: 'Music Appreciation', provider: 'uopeople', category: 'humanities', credits: 3, description: 'Understanding music theory and cultural significance.' },
      { name: 'Literature', provider: 'sophia', category: 'humanities', credits: 3, description: 'Survey of world literature and literary analysis.' },
      { name: 'Art History', provider: 'sophia', category: 'humanities', credits: 3, description: 'Comprehensive study of art through history.' },
      { name: 'Philosophy', provider: 'sophia', category: 'humanities', credits: 3, description: 'Introduction to philosophical thinking and major concepts.' },
      
      // Social and Behavioral Sciences
      { name: 'Psychology', provider: 'uopeople', category: 'social', credits: 3, description: 'Introduction to psychological principles and human behavior.' },
      { name: 'Sociology', provider: 'uopeople', category: 'social', credits: 3, description: 'Study of society, social institutions, and relationships.' },
      { name: 'Political Science', provider: 'uopeople', category: 'social', credits: 3, description: 'Government systems, political processes, and civic engagement.' },
      { name: 'Psychology', provider: 'sophia', category: 'social', credits: 3, description: 'Comprehensive introduction to psychological concepts.' },
      { name: 'Sociology', provider: 'sophia', category: 'social', credits: 3, description: 'Understanding social structures and human interactions.' },
      { name: 'Economics', provider: 'sophia', category: 'social', credits: 3, description: 'Basic economic principles and market systems.' },
      
      // Electives
      { name: 'Computer Science Fundamentals', provider: 'uopeople', category: 'electives', credits: 3, description: 'Introduction to programming and computational thinking.' },
      { name: 'Business Management', provider: 'uopeople', category: 'electives', credits: 3, description: 'Principles of business organization and management.' },
      { name: 'Foreign Language (Spanish)', provider: 'uopeople', category: 'electives', credits: 3, description: 'Beginning Spanish language and culture.' },
      { name: 'Web Development', provider: 'sophia', category: 'electives', credits: 3, description: 'HTML, CSS, and JavaScript fundamentals.' },
      { name: 'Project Management', provider: 'sophia', category: 'electives', credits: 3, description: 'Project planning, execution, and management techniques.' },
      { name: 'Digital Marketing', provider: 'sophia', category: 'electives', credits: 3, description: 'Online marketing strategies and social media.' },
    ];

    courseData.forEach(course => {
      const id = this.currentCourseId++;
      this.courses.set(id, { ...course, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getCoursesByCategory(category: string): Promise<Course[]> {
    return Array.from(this.courses.values()).filter(
      (course) => course.category === category,
    );
  }

  async getCoursesByProvider(provider: string): Promise<Course[]> {
    return Array.from(this.courses.values()).filter(
      (course) => course.provider === provider,
    );
  }

  async getAllCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async saveCourseSelection(selection: InsertCourseSelection): Promise<CourseSelection> {
    const id = this.currentSelectionId++;
    const courseSelection: CourseSelection = { ...selection, id };
    this.courseSelections.set(id, courseSelection);
    return courseSelection;
  }

  async getCourseSelections(sessionId: string): Promise<CourseSelection[]> {
    return Array.from(this.courseSelections.values()).filter(
      (selection) => selection.sessionId === sessionId,
    );
  }

  async clearCourseSelections(sessionId: string): Promise<void> {
    const selectionsToDelete = Array.from(this.courseSelections.entries())
      .filter(([_, selection]) => selection.sessionId === sessionId)
      .map(([id, _]) => id);
    
    selectionsToDelete.forEach(id => this.courseSelections.delete(id));
  }
}

export const storage = new MemStorage();
