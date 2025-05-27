import { pgTable, serial, varchar, text, integer, boolean, timestamp, doublePrecision, json } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Lawyers table
export const lawyers = pgTable('lawyers', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  photo: varchar('photo', { length: 255 }),
  location: varchar('location', { length: 100 }).notNull(),
  specializations: json('specializations').$type<string[]>().notNull(),
  rating: doublePrecision('rating'),
  reviews: integer('reviews').default(0),
  verified: boolean('verified').default(false),
  active: boolean('active').default(true),
  barNumber: varchar('bar_number', { length: 50 }).notNull().unique(),
  experience: integer('experience').notNull(),
  languages: json('languages').$type<string[]>().notNull(),
  availability: varchar('availability', { length: 255 }),
  successRate: varchar('success_rate', { length: 20 }),
  bio: text('bio'),
  caseCount: integer('case_count').default(0),
  education: text('education'),
  contactHours: varchar('contact_hours', { length: 255 }),
});

// Lawyer testimonials
export const lawyerTestimonials = pgTable('lawyer_testimonials', {
  id: serial('id').primaryKey(),
  lawyerId: integer('lawyer_id').notNull().references(() => lawyers.id, { onDelete: 'cascade' }),
  text: text('text').notNull(),
  author: varchar('author', { length: 255 }).notNull(),
});

// Lawyer expertise areas
export const lawyerExpertise = pgTable('lawyer_expertise', {
  id: serial('id').primaryKey(),
  lawyerId: integer('lawyer_id').notNull().references(() => lawyers.id, { onDelete: 'cascade' }),
  expertise: text('expertise').notNull(),
});

// Lawyer documents
export const lawyerDocuments = pgTable('lawyer_documents', {
  id: serial('id').primaryKey(),
  lawyerId: integer('lawyer_id').notNull().references(() => lawyers.id, { onDelete: 'cascade' }),
  name: varchar('name', { length: 255 }).notNull(),
  type: varchar('type', { length: 100 }).notNull(),
  description: text('description'),
});

// Lawyer availability calendar
export const lawyerAvailability = pgTable('lawyer_availability', {
  id: serial('id').primaryKey(),
  lawyerId: integer('lawyer_id').notNull().references(() => lawyers.id, { onDelete: 'cascade' }),
  date: varchar('date', { length: 10 }).notNull(), // Format: YYYY-MM-DD
  slots: json('slots').$type<string[]>().notNull(),
});

// Cases table
export const cases = pgTable('cases', {
  id: varchar('id', { length: 50 }).primaryKey(), // Format: GBV-XXXXXX
  reportDate: timestamp('report_date').notNull(),
  status: varchar('status', { length: 50 }).notNull(),
  severity: varchar('severity', { length: 50 }).notNull(),
  type: varchar('type', { length: 100 }).notNull(),
  location: varchar('location', { length: 100 }).notNull(),
  assignedTo: integer('assigned_to').references(() => adminUsers.id),
  clientName: varchar('client_name', { length: 255 }).notNull(),
  clientContact: varchar('client_contact', { length: 100 }),
  lastUpdated: timestamp('last_updated').notNull(),
});

// Case notes
export const caseNotes = pgTable('case_notes', {
  id: serial('id').primaryKey(),
  caseId: varchar('case_id', { length: 50 }).notNull().references(() => cases.id, { onDelete: 'cascade' }),
  date: timestamp('date').notNull(),
  author: varchar('author', { length: 100 }).notNull(),
  content: text('content').notNull(),
});

// Case actions
export const caseActions = pgTable('case_actions', {
  id: serial('id').primaryKey(),
  caseId: varchar('case_id', { length: 50 }).notNull().references(() => cases.id, { onDelete: 'cascade' }),
  type: varchar('type', { length: 100 }).notNull(),
  status: varchar('status', { length: 50 }).notNull(),
  dueDate: timestamp('due_date').notNull(),
  assignedTo: varchar('assigned_to', { length: 100 }).notNull(),
});

// Reports table
export const reports = pgTable('reports', {
  id: varchar('id', { length: 50 }).primaryKey(), // Format: GBV-XXXXXX
  reportDate: timestamp('report_date').notNull(),
  reportType: varchar('report_type', { length: 50 }).notNull(),
  incidentType: varchar('incident_type', { length: 100 }).notNull(),
  location: varchar('location', { length: 100 }).notNull(),
  status: varchar('status', { length: 50 }).notNull(),
  severity: varchar('severity', { length: 50 }).notNull(),
  hasEvidence: boolean('has_evidence').default(false),
  hasWitnesses: boolean('has_witnesses').default(false),
  immediateDanger: boolean('immediate_danger').default(false),
  clientName: varchar('client_name', { length: 255 }),
  clientContact: varchar('client_contact', { length: 100 }),
  assignedTo: integer('assigned_to').references(() => adminUsers.id),
});

// Emergency Contacts table
export const emergencyContacts = pgTable('emergency_contacts', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  number: varchar('number', { length: 50 }).notNull(),
  category: varchar('category', { length: 100 }).notNull(),
  region: varchar('region', { length: 100 }), // For state-specific contacts
});

// Resources table
export const resources = pgTable('resources', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  type: varchar('type', { length: 50 }).notNull(),
  category: varchar('category', { length: 100 }).notNull(),
  description: text('description'),
  fileUrl: varchar('file_url', { length: 255 }).notNull(),
  pages: integer('pages'),
});

// Admin Users table
export const adminUsers = pgTable('admin_users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(), // Should be hashed
  role: varchar('role', { length: 50 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
});

// Relations
export const lawyersRelations = relations(lawyers, ({ many }) => ({
  testimonials: many(lawyerTestimonials),
  expertise: many(lawyerExpertise),
  documents: many(lawyerDocuments),
  availability: many(lawyerAvailability),
}));

export const casesRelations = relations(cases, ({ many, one }) => ({
  notes: many(caseNotes),
  actions: many(caseActions),
  assignedUser: one(adminUsers, {
    fields: [cases.assignedTo],
    references: [adminUsers.id],
  }),
}));

export const reportsRelations = relations(reports, ({ one }) => ({
  assignedUser: one(adminUsers, {
    fields: [reports.assignedTo],
    references: [adminUsers.id],
  }),
}));