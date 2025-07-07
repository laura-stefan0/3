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
      // Mathematics
      { name: 'College Algebra', provider: 'uopeople', category: 'mathematics', credits: 3, description: 'Fundamental algebraic concepts and problem-solving techniques.' },
      { name: 'Statistics', provider: 'uopeople', category: 'mathematics', credits: 3, description: 'Introduction to statistical methods and data analysis.' },
      { name: 'Calculus I', provider: 'uopeople', category: 'mathematics', credits: 3, description: 'Differential calculus and its applications.' },
      { name: 'Algebra', provider: 'sophia', category: 'mathematics', credits: 3, description: 'Comprehensive algebra course covering linear equations and inequalities.' },
      { name: 'Statistics', provider: 'sophia', category: 'mathematics', credits: 3, description: 'Statistical concepts with real-world applications.' },
      { name: 'Precalculus', provider: 'sophia', category: 'mathematics', credits: 3, description: 'Preparation for calculus with trigonometry and functions.' },
      
      // Science
      { name: 'Biology', provider: 'uopeople', category: 'science', credits: 3, description: 'Introduction to biological systems and life processes.' },
      { name: 'Chemistry', provider: 'uopeople', category: 'science', credits: 3, description: 'Basic principles of chemistry and molecular interactions.' },
      { name: 'Physics', provider: 'uopeople', category: 'science', credits: 3, description: 'Fundamental physics concepts and natural phenomena.' },
      { name: 'Environmental Science', provider: 'sophia', category: 'science', credits: 3, description: 'Study of environmental systems and sustainability.' },
      { name: 'Chemistry', provider: 'sophia', category: 'science', credits: 3, description: 'Comprehensive chemistry course with lab simulations.' },
      { name: 'Astronomy', provider: 'sophia', category: 'science', credits: 3, description: 'Exploration of celestial objects and cosmic phenomena.' },
      
      // English
      { name: 'English Composition I', provider: 'uopeople', category: 'english', credits: 3, description: 'Fundamental writing skills and essay composition.' },
      { name: 'English Composition II', provider: 'uopeople', category: 'english', credits: 3, description: 'Advanced writing techniques and research methods.' },
      { name: 'Literature', provider: 'uopeople', category: 'english', credits: 3, description: 'Analysis of literary works and critical thinking.' },
      { name: 'English Composition', provider: 'sophia', category: 'english', credits: 3, description: 'Comprehensive writing course with peer review.' },
      { name: 'Communications', provider: 'sophia', category: 'english', credits: 3, description: 'Effective communication in academic and professional settings.' },
      { name: 'Literature', provider: 'sophia', category: 'english', credits: 3, description: 'Survey of world literature and literary analysis.' },
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
