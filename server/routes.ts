import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCourseSelectionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all courses
  app.get("/api/courses", async (req, res) => {
    try {
      const courses = await storage.getAllCourses();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch courses" });
    }
  });

  // Get courses by category
  app.get("/api/courses/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const courses = await storage.getCoursesByCategory(category);
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch courses by category" });
    }
  });

  // Get courses by provider
  app.get("/api/courses/provider/:provider", async (req, res) => {
    try {
      const { provider } = req.params;
      const courses = await storage.getCoursesByProvider(provider);
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch courses by provider" });
    }
  });

  // Save course selection
  app.post("/api/selections", async (req, res) => {
    try {
      const selection = insertCourseSelectionSchema.parse(req.body);
      const savedSelection = await storage.saveCourseSelection(selection);
      res.json(savedSelection);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid selection data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to save selection" });
      }
    }
  });

  // Get course selections by session
  app.get("/api/selections/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const selections = await storage.getCourseSelections(sessionId);
      res.json(selections);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch selections" });
    }
  });

  // Clear course selections
  app.delete("/api/selections/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      await storage.clearCourseSelections(sessionId);
      res.json({ message: "Selections cleared" });
    } catch (error) {
      res.status(500).json({ message: "Failed to clear selections" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
