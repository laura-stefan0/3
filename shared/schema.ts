import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  provider: text("provider").notNull(), // 'uopeople' or 'sophia'
  category: text("category").notNull(), // 'mathematics', 'science', 'english'
  credits: integer("credits").notNull(),
  description: text("description").notNull(),
});

export const courseSelections = pgTable("course_selections", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  courseId: integer("course_id").notNull(),
  provider: text("provider").notNull(),
  category: text("category").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertCourseSchema = createInsertSchema(courses).omit({
  id: true,
});

export const insertCourseSelectionSchema = createInsertSchema(courseSelections).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Course = typeof courses.$inferSelect;
export type CourseSelection = typeof courseSelections.$inferSelect;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type InsertCourseSelection = z.infer<typeof insertCourseSelectionSchema>;
