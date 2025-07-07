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
      // Foundation Courses (mandatory UoPeople courses)
      { name: 'UNIV 0001 Orientation', provider: 'uopeople', category: 'foundations', credits: 1, description: 'Introduction to University of the People and online learning environment.' },
      { name: 'UNIV 1001 Online Education Strategies', provider: 'uopeople', category: 'foundations', credits: 3, description: 'Strategies for success in online education and academic writing.' },
      
      // Communication (COM 2001 is mandatory UoPeople, plus one additional choice)
      { name: 'COM 2001 Professional Communication', provider: 'uopeople', category: 'communication', credits: 3, description: 'Professional communication skills for workplace and academic settings.' },
      { name: 'ENGL 1102 Composition 2', provider: 'uopeople', category: 'communication', credits: 3, description: 'Advanced writing techniques and research methods.' },
      { name: 'Foundations of English Composition', provider: 'sophia', category: 'communication', credits: 3, description: 'Comprehensive writing course with peer review.' },
      
      // Math (pick one for each pair)
      { name: 'MATH 1201 College Algebra', provider: 'uopeople', category: 'math', credits: 3, description: 'Fundamental algebraic concepts and problem-solving techniques.' },
      { name: 'Introduction to College Mathematics', provider: 'sophia', category: 'math', credits: 3, description: 'Foundational mathematics course covering basic algebra and problem-solving (easier option).' },
      { name: 'College Algebra', provider: 'sophia', category: 'math', credits: 3, description: 'Comprehensive algebra course covering linear equations and inequalities (recommended equivalent).' },
      { name: 'Precalculus', provider: 'sophia', category: 'math', credits: 3, description: 'Advanced algebra and trigonometry preparation for calculus (harder option).' },
      { name: 'MATH 1211 Calculus', provider: 'uopeople', category: 'math', credits: 3, description: 'Differential calculus and its applications.' },
      { name: 'Calculus', provider: 'sophia', category: 'math', credits: 3, description: 'Comprehensive calculus course with applications.' },
      { name: 'MATH 1280 Introduction to Statistics', provider: 'uopeople', category: 'math', credits: 3, description: 'Introduction to statistical methods and data analysis.' },
      { name: 'Introduction to Statistics', provider: 'sophia', category: 'math', credits: 3, description: 'Statistical concepts with real-world applications.' },
      
      // Values and Ethical Reasoning (pick one or the other)
      { name: 'PHIL 1404 Ethics and Social Responsibility', provider: 'uopeople', category: 'values', credits: 3, description: 'Exploring ethical frameworks and moral decision-making.' },
      { name: 'Introduction to Ethics', provider: 'sophia', category: 'values', credits: 3, description: 'Introduction to moral philosophy and ethical reasoning.' },
      
      // Civilization Studies, Cultures, and Beliefs (pick only one between these)
      { name: 'HIST 1421 Greek and Roman Civilization', provider: 'uopeople', category: 'civilization', credits: 3, description: 'Study of ancient Greek and Roman cultures and their impact.' },
      { name: 'Approaches to Studying Religions', provider: 'sophia', category: 'civilization', credits: 3, description: 'Exploration of major world religions and their methodologies.' },
      
      // Natural Science (pick only one between these)
      { name: 'Introduction to Biology', provider: 'uopeople', category: 'science', credits: 3, description: 'Introduction to biological systems and life processes.' },
      { name: 'Introduction to Environmental Science', provider: 'uopeople', category: 'science', credits: 3, description: 'Study of environmental systems and sustainability.' },
      { name: 'Introduction to Information Technology', provider: 'sophia', category: 'science', credits: 3, description: 'Fundamentals of information technology and computer systems.' },
      { name: 'Environmental Science', provider: 'sophia', category: 'science', credits: 3, description: 'Comprehensive study of environmental systems and sustainability.' },
      
      // Humanities (pick 2 between these)
      { name: 'AHIST 1401 Art History', provider: 'uopeople', category: 'humanities', credits: 3, description: 'Survey of artistic movements and cultural expressions.' },
      { name: 'PHIL 1402 Introduction to Philosophy', provider: 'uopeople', category: 'humanities', credits: 3, description: 'Introduction to philosophical thinking and major concepts.' },
      { name: 'ENGL 1405 World Literature', provider: 'uopeople', category: 'humanities', credits: 3, description: 'Analysis of literary works from around the world.' },
      { name: 'Art History I', provider: 'sophia', category: 'humanities', credits: 3, description: 'Survey of art from ancient times to the Renaissance.' },
      { name: 'Art History II', provider: 'sophia', category: 'humanities', credits: 3, description: 'Survey of art from the Renaissance to contemporary times.' },
      { name: 'Visual Communication', provider: 'sophia', category: 'humanities', credits: 3, description: 'Understanding visual elements and design principles.' },
      { name: 'Ancient Greek Philosophers', provider: 'sophia', category: 'humanities', credits: 3, description: 'Study of ancient Greek philosophical thought.' },
      { name: 'U.S. History I', provider: 'sophia', category: 'humanities', credits: 3, description: 'American history from colonial times to Civil War.' },
      { name: 'U.S. History II', provider: 'sophia', category: 'humanities', credits: 3, description: 'American history from Reconstruction to present.' },
      { name: 'Critical Thinking', provider: 'sophia', category: 'humanities', credits: 3, description: 'Develop analytical and logical reasoning skills.' },
      
      // Social and Behavioral Sciences (pick 2 between these)
      { name: 'ECON 1580 Introduction to Economics', provider: 'uopeople', category: 'social', credits: 3, description: 'Basic economic principles and market systems.' },
      { name: 'POLS 1503 Globalization', provider: 'uopeople', category: 'social', credits: 3, description: 'Study of globalization and its impacts on society.' },
      { name: 'PSYC 1111 Introduction to Health Psychology', provider: 'uopeople', category: 'social', credits: 3, description: 'Psychology of health and wellness behaviors.' },
      { name: 'PSYC 1205 Emotional Intelligence', provider: 'uopeople', category: 'social', credits: 3, description: 'Understanding and managing emotions in social contexts.' },
      { name: 'PSYC 1504 Introduction to Psychology', provider: 'uopeople', category: 'social', credits: 3, description: 'Introduction to psychological principles and human behavior.' },
      { name: 'SOC 1502 Introduction to Sociology', provider: 'uopeople', category: 'social', credits: 3, description: 'Study of society, social institutions, and relationships.' },
      { name: 'Introduction to Psychology', provider: 'sophia', category: 'social', credits: 3, description: 'Comprehensive introduction to psychological concepts.' },
      { name: 'Introduction to Sociology', provider: 'sophia', category: 'social', credits: 3, description: 'Understanding social structures and human interactions.' },
      { name: 'Lifespan Development', provider: 'sophia', category: 'social', credits: 3, description: 'Human development across the lifespan.' },
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
