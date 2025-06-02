import { Hono, type Context } from 'hono'
import prisma from '@/db/client.js' // Import Prisma client

const AdminStats = new Hono()

AdminStats.get('/admin/stats', async (c: Context) => {
  try {
    const period = c.req.query("period") || "week"; // Default to 'week'

    let startDate: Date;
    const now = new Date();

    switch (period) {
      case "day":
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        break;
      case "week":
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay()); // Start of the current week (Sunday)
        break;
      case "month":
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        break;
      case "year":
        startDate = new Date(now.getFullYear(), 0, 1);
        break;
      default:
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
    }

    // Fetch cases and reports within the period
    const cases = await prisma.case.findMany({
      where: {
        reportDate: {
          gte: startDate,
        },
      },
    });

    const reports = await prisma.report.findMany({
      where: {
        reportDate: {
          gte: startDate,
        },
      },
    });

    // Calculate statistics
    const newCases = cases.length;
    const resolvedCases = cases.filter((caseItem: { status: string }) => caseItem.status === "Resolved").length;
    const criticalCases = cases.filter((caseItem: { severity: string }) => caseItem.severity === "Critical").length;

    // Placeholder for more complex calculations (e.g., averageResponseTime, casesByType, etc.)
    // These would require more sophisticated queries and aggregations.
    const casesByType: { [key: string]: number } = {};
    cases.forEach((caseItem: { type: string }) => {
      casesByType[caseItem.type] = (casesByType[caseItem.type] || 0) + 1;
    });

    const casesByRegion: { [key: string]: number } = {};
    cases.forEach((caseItem: { location: string }) => {
      casesByRegion[caseItem.location] = (casesByRegion[caseItem.location] || 0) + 1;
    });

    const casesBySeverity: { [key: string]: number } = {};
    cases.forEach((caseItem: { severity: string }) => {
      casesBySeverity[caseItem.severity] = (casesBySeverity[caseItem.severity] || 0) + 1;
    });

    // For caseworkerPerformance and recentActivity, you'd need to query AdminUser and potentially
    // join/aggregate with Case and Report data based on assignedTo fields and lastUpdated timestamps.
    // This is a simplified mock for now.
    const caseworkerPerformance = [
      { name: "Adebayo Johnson", casesHandled: 0, avgResponseTime: "N/A" },
      { name: "Fatima Ibrahim", casesHandled: 0, avgResponseTime: "N/A" },
    ];
    const recentActivity = [
      { time: "Just now", action: "Stats refreshed" },
    ];


    const stats = {
      newCases,
      resolvedCases,
      criticalCases,
      averageResponseTime: "N/A", // Requires more complex calculation
      casesByType,
      casesByRegion,
      casesBySeverity,
      caseworkerPerformance, // Placeholder
      recentActivity, // Placeholder
    };

    return c.json({ stats });
  } catch (error) {
    console.error("Error fetching statistics:", error);
    return c.json({ error: "Failed to fetch statistics" }, 500);
  }
});

export default AdminStats
