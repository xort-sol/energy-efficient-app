import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema, insertContactRequestSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote request endpoint
  app.post("/api/quotes", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quote = await storage.createQuoteRequest(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Quote request submitted successfully. We'll contact you within 1-2 business days.",
        data: quote,
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromError(error);
        return res.status(400).json({
          success: false,
          message: validationError.message,
        });
      }
      
      console.error("Error creating quote request:", error);
      res.status(500).json({
        success: false,
        message: "Failed to submit quote request. Please try again.",
      });
    }
  });

  // Get all quote requests (for admin purposes)
  app.get("/api/quotes", async (req, res) => {
    try {
      const quotes = await storage.getAllQuoteRequests();
      res.json({
        success: true,
        data: quotes,
      });
    } catch (error: any) {
      console.error("Error fetching quotes:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch quote requests.",
      });
    }
  });

  // Contact request endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contact = await storage.createContactRequest(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Thank you for contacting us. We'll respond within 1-2 business hours during office hours.",
        data: contact,
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromError(error);
        return res.status(400).json({
          success: false,
          message: validationError.message,
        });
      }
      
      console.error("Error creating contact request:", error);
      res.status(500).json({
        success: false,
        message: "Failed to submit contact request. Please try again.",
      });
    }
  });

  // Get all contact requests (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const contacts = await storage.getAllContactRequests();
      res.json({
        success: true,
        data: contacts,
      });
    } catch (error: any) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch contact requests.",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
