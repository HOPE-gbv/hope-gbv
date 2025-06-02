-- CreateTable
CREATE TABLE "Lawyer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT,
    "location" TEXT NOT NULL,
    "specializations" JSONB NOT NULL,
    "rating" DOUBLE PRECISION,
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
    "contactHours" TEXT,

    CONSTRAINT "Lawyer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LawyerTestimonial" (
    "id" SERIAL NOT NULL,
    "lawyerId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "LawyerTestimonial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LawyerExpertise" (
    "id" SERIAL NOT NULL,
    "lawyerId" INTEGER NOT NULL,
    "expertise" TEXT NOT NULL,

    CONSTRAINT "LawyerExpertise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LawyerDocument" (
    "id" SERIAL NOT NULL,
    "lawyerId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "LawyerDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LawyerAvailability" (
    "id" SERIAL NOT NULL,
    "lawyerId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "slots" JSONB NOT NULL,

    CONSTRAINT "LawyerAvailability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Case" (
    "id" TEXT NOT NULL,
    "reportDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "assignedTo" INTEGER,
    "clientName" TEXT NOT NULL,
    "clientContact" TEXT,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CaseNote" (
    "id" SERIAL NOT NULL,
    "caseId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "author" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "CaseNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CaseAction" (
    "id" SERIAL NOT NULL,
    "caseId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "assignedTo" TEXT NOT NULL,

    CONSTRAINT "CaseAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "reportDate" TIMESTAMP(3) NOT NULL,
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

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmergencyContact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "region" TEXT,

    CONSTRAINT "EmergencyContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT,
    "fileUrl" TEXT NOT NULL,
    "pages" INTEGER,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lawyer_barNumber_key" ON "Lawyer"("barNumber");

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");

-- AddForeignKey
ALTER TABLE "LawyerTestimonial" ADD CONSTRAINT "LawyerTestimonial_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LawyerExpertise" ADD CONSTRAINT "LawyerExpertise_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LawyerDocument" ADD CONSTRAINT "LawyerDocument_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LawyerAvailability" ADD CONSTRAINT "LawyerAvailability_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_assignedTo_fkey" FOREIGN KEY ("assignedTo") REFERENCES "AdminUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaseNote" ADD CONSTRAINT "CaseNote_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Case"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaseAction" ADD CONSTRAINT "CaseAction_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Case"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_assignedTo_fkey" FOREIGN KEY ("assignedTo") REFERENCES "AdminUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
