import { Hono, type Context } from 'hono'

const AdminStats = new Hono()

AdminStats.get('/admin/stats', async (c: Context) => {
  // Get time period from query parameters (default to 'week')
  const period = c.req.query("period") || "week"

  let stats

  switch (period) {
    case "day":
      stats = {
        newCases: 12,
        resolvedCases: 8,
        criticalCases: 3,
        averageResponseTime: "2.5 hours",
        casesByType: {
          "Domestic Violence": 5,
          "Sexual Assault": 3,
          Stalking: 2,
          "Child Abuse": 1,
          "Human Trafficking": 1,
        },
        casesByRegion: {
          Lagos: 4,
          Abuja: 3,
          Kano: 2,
          Enugu: 1,
          "Port Harcourt": 1,
          Other: 1,
        },
        casesBySeverity: {
          Critical: 3,
          Severe: 4,
          Moderate: 3,
          Fair: 2,
        },
        caseworkerPerformance: [
          { name: "Adebayo Johnson", casesHandled: 4, avgResponseTime: "1.8 hours" },
          { name: "Fatima Ibrahim", casesHandled: 3, avgResponseTime: "2.2 hours" },
          { name: "Chinedu Okonkwo", casesHandled: 3, avgResponseTime: "3.0 hours" },
          { name: "Amina Bello", casesHandled: 2, avgResponseTime: "2.1 hours" },
        ],
        recentActivity: [
          { time: "2 hours ago", action: "New critical case assigned to Fatima Ibrahim" },
          { time: "3 hours ago", action: "Case GBV-123456 updated with new safety plan" },
          { time: "5 hours ago", action: "Case GBV-234567 resolved successfully" },
          { time: "8 hours ago", action: "New severe case reported in Kano" },
        ],
      }
      break

    case "month":
      stats = {
        newCases: 145,
        resolvedCases: 112,
        criticalCases: 28,
        averageResponseTime: "3.2 hours",
        casesByType: {
          "Domestic Violence": 62,
          "Sexual Assault": 38,
          Stalking: 15,
          "Child Abuse": 12,
          "Human Trafficking": 8,
          Other: 10,
        },
        casesByRegion: {
          Lagos: 45,
          Abuja: 32,
          Kano: 18,
          Enugu: 15,
          "Port Harcourt": 12,
          Other: 23,
        },
        casesBySeverity: {
          Critical: 28,
          Severe: 47,
          Moderate: 42,
          Fair: 28,
        },
        caseworkerPerformance: [
          { name: "Adebayo Johnson", casesHandled: 38, avgResponseTime: "2.8 hours" },
          { name: "Fatima Ibrahim", casesHandled: 35, avgResponseTime: "3.1 hours" },
          { name: "Chinedu Okonkwo", casesHandled: 32, avgResponseTime: "3.5 hours" },
          { name: "Amina Bello", casesHandled: 28, avgResponseTime: "3.0 hours" },
        ],
        recentActivity: [
          { time: "2 days ago", action: "Monthly case review completed" },
          { time: "1 week ago", action: "New partnership with Lagos State Hospital" },
          { time: "2 weeks ago", action: "Training session for new case workers" },
          { time: "3 weeks ago", action: "Updated safety protocols implemented" },
        ],
      }
      break

    case "year":
      stats = {
        newCases: 1876,
        resolvedCases: 1654,
        criticalCases: 312,
        averageResponseTime: "3.8 hours",
        casesByType: {
          "Domestic Violence": 782,
          "Sexual Assault": 425,
          Stalking: 198,
          "Child Abuse": 156,
          "Human Trafficking": 95,
          Other: 220,
        },
        casesByRegion: {
          Lagos: 524,
          Abuja: 412,
          Kano: 215,
          Enugu: 187,
          "Port Harcourt": 165,
          Other: 373,
        },
        casesBySeverity: {
          Critical: 312,
          Severe: 625,
          Moderate: 584,
          Fair: 355,
        },
        caseworkerPerformance: [
          { name: "Adebayo Johnson", casesHandled: 412, avgResponseTime: "3.2 hours" },
          { name: "Fatima Ibrahim", casesHandled: 385, avgResponseTime: "3.5 hours" },
          { name: "Chinedu Okonkwo", casesHandled: 356, avgResponseTime: "4.1 hours" },
          { name: "Amina Bello", casesHandled: 328, avgResponseTime: "3.8 hours" },
        ],
        recentActivity: [
          { time: "1 month ago", action: "Annual report published" },
          { time: "3 months ago", action: "New regional office opened in Kano" },
          { time: "6 months ago", action: "Partnership with Nigerian Bar Association renewed" },
          { time: "9 months ago", action: "Major funding secured for next 3 years" },
        ],
      }
      break

    default: // week
      stats = {
        newCases: 48,
        resolvedCases: 35,
        criticalCases: 12,
        averageResponseTime: "2.8 hours",
        casesByType: {
          "Domestic Violence": 21,
          "Sexual Assault": 12,
          Stalking: 6,
          "Child Abuse": 4,
          "Human Trafficking": 2,
          Other: 3,
        },
        casesByRegion: {
          Lagos: 15,
          Abuja: 10,
          Kano: 7,
          Enugu: 5,
          "Port Harcourt": 4,
          Other: 7,
        },
        casesBySeverity: {
          Critical: 12,
          Severe: 16,
          Moderate: 13,
          Fair: 7,
        },
        caseworkerPerformance: [
          { name: "Adebayo Johnson", casesHandled: 14, avgResponseTime: "2.5 hours" },
          { name: "Fatima Ibrahim", casesHandled: 12, avgResponseTime: "2.8 hours" },
          { name: "Chinedu Okonkwo", casesHandled: 11, avgResponseTime: "3.2 hours" },
          { name: "Amina Bello", casesHandled: 9, avgResponseTime: "2.7 hours" },
        ],
        recentActivity: [
          { time: "Yesterday", action: "Weekly case review completed" },
          { time: "2 days ago", action: "New critical case reported in Abuja" },
          { time: "3 days ago", action: "Training session on trauma-informed care" },
          { time: "5 days ago", action: "Case GBV-345678 successfully resolved" },
        ],
      }
  }

  return c.json({ stats })
})

export default AdminStats
