import { Hono, type Context } from 'hono'
import prisma from '@/db/client.js' // Import Prisma client

const AdminReports = new Hono()

// Helper function to convert Prisma DateTime to string for client
const serializeReportDates = (reportItem: any) => {
  if (reportItem.reportDate) {
    reportItem.reportDate = reportItem.reportDate.toISOString();
  }
  return reportItem;
};

// Helper function to convert client string dates to Date objects for Prisma
const deserializeReportDates = (reportData: any) => {
  if (reportData.reportDate) {
    reportData.reportDate = new Date(reportData.reportDate);
  }
  return reportData;
};

AdminReports.get('/admin/reports', async (c: Context) => {
  try {
    const { status, severity, type, location, dateFrom, dateTo } = c.req.query()

    const where: any = {};
    if (status) where.status = status;
    if (severity) where.severity = severity;
    if (type) where.incidentType = { contains: type, mode: 'insensitive' };
    if (location) where.location = { contains: location, mode: 'insensitive' };

    if (dateFrom || dateTo) {
      where.reportDate = {};
      if (dateFrom) where.reportDate.gte = new Date(dateFrom);
      if (dateTo) where.reportDate.lte = new Date(dateTo);
    }

    const reports = await prisma.report.findMany({
      where,
    });

    const serializedReports = reports.map(serializeReportDates);
    return c.json({ reports: serializedReports });
  } catch (error) {
    console.error("Error fetching reports:", error);
    return c.json({ error: "Failed to fetch reports" }, 500);
  }
});

AdminReports.get('/admin/reports/:id', async (c: Context) => {
  try {
    const reportId = c.req.param("id");
    const report = await prisma.report.findUnique({
      where: { id: reportId },
    });

    if (!report) {
      return c.json({ error: "Report not found" }, 404);
    }

    return c.json({ report: serializeReportDates(report) });
  } catch (error) {
    console.error(`Error fetching report ${c.req.param("id")}:`, error);
    return c.json({ error: "Failed to fetch report" }, 500);
  }
});

AdminReports.post('/admin/reports', async (c: Context) => {
  try {
    const reportData = await c.req.json();
    const deserializedReportData = deserializeReportDates(reportData);

    // Basic validation
    if (!deserializedReportData.reportDate || !deserializedReportData.reportType || !deserializedReportData.incidentType || !deserializedReportData.location || !deserializedReportData.status || !deserializedReportData.severity) {
      return c.json({ error: "Missing required report fields" }, 400);
    }

    const newReport = await prisma.report.create({
      data: {
        id: deserializedReportData.id || `RPT-${Math.floor(100000 + Math.random() * 900000)}`, // Generate ID if not provided
        reportDate: deserializedReportData.reportDate,
        reportType: deserializedReportData.reportType,
        incidentType: deserializedReportData.incidentType,
        location: deserializedReportData.location,
        status: deserializedReportData.status,
        severity: deserializedReportData.severity,
        hasEvidence: deserializedReportData.hasEvidence || false,
        hasWitnesses: deserializedReportData.hasWitnesses || false,
        immediateDanger: deserializedReportData.immediateDanger || false,
        clientName: deserializedReportData.clientName,
        clientContact: deserializedReportData.clientContact,
        assignedTo: deserializedReportData.assignedTo,
      },
    });

    return c.json({
      success: true,
      report: serializeReportDates(newReport),
      message: "Report created successfully",
    });
  } catch (error) {
    console.error("Error creating report:", error);
    return c.json({ error: "Failed to create report" }, 500);
  }
});

AdminReports.put('/api/admin/reports/:id', async (c: Context) => {
  try {
    const reportId = c.req.param("id");
    const updates = await c.req.json();
    const deserializedUpdates = deserializeReportDates(updates);

    const existingReport = await prisma.report.findUnique({
      where: { id: reportId },
    });

    if (!existingReport) {
      return c.json({ error: "Report not found" }, 404);
    }

    const updatedReport = await prisma.report.update({
      where: { id: reportId },
      data: deserializedUpdates,
    });

    return c.json({
      success: true,
      report: serializeReportDates(updatedReport),
      message: "Report updated successfully",
    });
  } catch (error) {
    console.error(`Error updating report ${c.req.param("id")}:`, error);
    return c.json({ error: "Failed to update report" }, 500);
  }
});

AdminReports.delete('/api/admin/reports/:id', async (c: Context) => {
  try {
    const reportId = c.req.param("id");
    const deletedReport = await prisma.report.delete({
      where: { id: reportId },
    });

    if (!deletedReport) {
      return c.json({ error: "Report not found" }, 404);
    }

    return c.json({
      success: true,
      message: "Report deleted successfully",
    });
  } catch (error) {
    console.error(`Error deleting report ${c.req.param("id")}:`, error);
    return c.json({ error: "Failed to delete report" }, 500);
  }
});
export default AdminReports
