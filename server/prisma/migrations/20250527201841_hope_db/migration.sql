-- CreateTable
CREATE TABLE "Lawyer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "photo" TEXT,
    "location" TEXT NOT NULL,
    "specializations" JSONB NOT NULL,
    "rating" REAL,
    "reviews" INTEGER NOT NULL DEFAULT 0,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "barNumber" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "languages" JSONB NOT NULL,
    "availability" TEXT,
    "successRate" TEXT,
    "bio" TEXT,
    "caseCount" INTEGER NOT NULL DEFAULT 0,
    "education" TEXT,
    "contactHours" TEXT
);

-- CreateTable
CREATE TABLE "LawyerTestimonial" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lawyerId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    CONSTRAINT "LawyerTestimonial_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LawyerExpertise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lawyerId" INTEGER NOT NULL,
    "expertise" TEXT NOT NULL,
    CONSTRAINT "LawyerExpertise_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LawyerDocument" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lawyerId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    CONSTRAINT "LawyerDocument_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LawyerAvailability" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lawyerId" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "slots" JSONB NOT NULL,
    CONSTRAINT "LawyerAvailability_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Case" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "reportDate" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "assignedTo" INTEGER,
    "clientName" TEXT NOT NULL,
    "clientContact" TEXT,
    "lastUpdated" DATETIME NOT NULL,
    CONSTRAINT "Case_assignedTo_fkey" FOREIGN KEY ("assignedTo") REFERENCES "AdminUser" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CaseNote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "caseId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "author" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    CONSTRAINT "CaseNote_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Case" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CaseAction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "caseId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dueDate" DATETIME NOT NULL,
    "assignedTo" TEXT NOT NULL,
    CONSTRAINT "CaseAction_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Case" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "reportDate" DATETIME NOT NULL,
    "reportType" TEXT NOT NULL,
    "incidentType" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "hasEvidence" BOOLEAN NOT NULL DEFAULT false,
    "hasWitnesses" BOOLEAN NOT NULL DEFAULT false,
    "immediateDanger" BOOLEAN NOT NULL DEFAULT false,
    "clientName" TEXT,
    "clientContact" TEXT,
    "assignedTo" INTEGER,
    CONSTRAINT "Report_assignedTo_fkey" FOREIGN KEY ("assignedTo") REFERENCES "AdminUser" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EmergencyContact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "region" TEXT
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT,
    "fileUrl" TEXT NOT NULL,
    "pages" INTEGER
);

-- CreateTable
CREATE TABLE "AdminUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Lawyer_barNumber_key" ON "Lawyer"("barNumber");

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");
