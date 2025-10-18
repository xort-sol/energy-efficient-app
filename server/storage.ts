import { 
  type User, 
  type InsertUser,
  type QuoteRequest,
  type InsertQuoteRequest,
  type ContactRequest,
  type InsertContactRequest
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Quote requests
  createQuoteRequest(quote: InsertQuoteRequest): Promise<QuoteRequest>;
  getQuoteRequest(id: string): Promise<QuoteRequest | undefined>;
  getAllQuoteRequests(): Promise<QuoteRequest[]>;
  
  // Contact requests
  createContactRequest(contact: InsertContactRequest): Promise<ContactRequest>;
  getContactRequest(id: string): Promise<ContactRequest | undefined>;
  getAllContactRequests(): Promise<ContactRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private quoteRequests: Map<string, QuoteRequest>;
  private contactRequests: Map<string, ContactRequest>;

  constructor() {
    this.users = new Map();
    this.quoteRequests = new Map();
    this.contactRequests = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Quote requests
  async createQuoteRequest(insertQuote: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = randomUUID();
    const quote: QuoteRequest = {
      ...insertQuote,
      id,
      createdAt: new Date(),
    };
    this.quoteRequests.set(id, quote);
    return quote;
  }

  async getQuoteRequest(id: string): Promise<QuoteRequest | undefined> {
    return this.quoteRequests.get(id);
  }

  async getAllQuoteRequests(): Promise<QuoteRequest[]> {
    return Array.from(this.quoteRequests.values());
  }

  // Contact requests
  async createContactRequest(insertContact: InsertContactRequest): Promise<ContactRequest> {
    const id = randomUUID();
    const contact: ContactRequest = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contactRequests.set(id, contact);
    return contact;
  }

  async getContactRequest(id: string): Promise<ContactRequest | undefined> {
    return this.contactRequests.get(id);
  }

  async getAllContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values());
  }
}

export const storage = new MemStorage();
