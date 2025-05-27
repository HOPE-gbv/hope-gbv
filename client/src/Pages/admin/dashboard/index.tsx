import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Gavel,
  Shield,
  Users,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { statsService } from "@/services/admin/stats";

// Import Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

interface Stats {
  newCases: number;
  resolvedCases: number;
  criticalCases: number;
  averageResponseTime: string; // e.g., "2 hours 30 minutes"
  casesByType: Record<string, number>; // e.g., { "Assault": 10, "Theft": 5 }
  casesByRegion: Record<string, number>; // e.g., { "New York": 20, "Los Angeles": 15 }
  casesByLawyer: Record<string, number>; // e.g., { "John Doe": 10, "Jane Smith": 5 }
  casesByClient: Record<string, number>; // e.g., { "John Doe": 10, "Jane Smith": 5 }
  casesBySeverity: Record<string, number>; // e.g., { "High": 5, "Medium": 10, "Low": 15 }
  caseworkerPerformance: Array<{
    name: string;
    casesHandled: number;
    avgResponseTime: string; // e.g., "1 hour 45 minutes"
    }>;
  recentActivity: Array<{
    action: string;
    time: string;
    }>;
    
}
export default function AdminDashboardPage() {
  
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [period, setPeriod] = useState("week");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const fetchedStats = await statsService.getDashboardStats(); // Assuming this can take period as a param
        setStats(fetchedStats);
      } catch (err) {
        setError("Failed to load dashboard data. Please try again.");
        console.error("Error fetching dashboard stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [period]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </Alert>
    );
  }

  if (!stats) {
    return (
      <div>No data available</div>
    );
  }

  // Ensure nested objects are not null/undefined before accessing
  const safeCasesByType = stats.casesByType || {};
  const safeCasesByRegion = stats.casesByRegion || {};
  const safeCasesBySeverity = stats.casesBySeverity || {};
  const safeCaseworkerPerformance = stats.caseworkerPerformance || [];
  const safeRecentActivity = stats.recentActivity || [];

  // Prepare chart data
  const casesByTypeData = {
    labels: Object.keys(safeCasesByType),
    datasets: [
      {
        label: "Number of Cases",
        data: Object.values(safeCasesByType),
        backgroundColor: [
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(153, 102, 255, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const casesByRegionData = {
    labels: Object.keys(safeCasesByRegion),
    datasets: [
      {
        label: "Number of Cases",
        data: Object.values(safeCasesByRegion),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const casesBySeverityData = {
    labels: Object.keys(safeCasesBySeverity),
    datasets: [
      {
        label: "Number of Cases",
        data: Object.values(safeCasesBySeverity),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Time period selector */}
      <div className="mb-6">
        <Tabs defaultValue={period} onValueChange={(value: string) => setPeriod(value)}>
          <TabsList>
            <TabsTrigger value="day">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
            <TabsTrigger value="year">This Year</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Cases</CardTitle>
            <Shield className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.newCases}</div>
            <p className="text-xs text-muted-foreground">
              +{Math.floor(stats.newCases * 0.1)} from previous {period}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved Cases</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.resolvedCases}</div>
            <p className="text-xs text-muted-foreground">
              Resolution rate: {Math.round((stats.resolvedCases / stats.newCases) * 100)}%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Cases</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.criticalCases}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((stats.criticalCases / stats.newCases) * 100)}% of total cases
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageResponseTime}</div>
            <p className="text-xs text-muted-foreground">Target: Less than 3 hours</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Cases by Type</CardTitle>
            <CardDescription>Distribution of cases by violence type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <Pie
                data={casesByTypeData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: "right",
                    },
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cases by Region</CardTitle>
            <CardDescription>Geographic distribution of reported cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <Bar
                data={casesByRegionData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Cases by Severity</CardTitle>
            <CardDescription>Distribution by severity level</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <Pie
                data={casesBySeverityData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Caseworker Performance</CardTitle>
            <CardDescription>Cases handled and response times</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {safeCaseworkerPerformance.map((worker: { name: string; casesHandled: number; avgResponseTime: string }, index: number) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">{worker.name}</div>
                    <div className="text-sm text-muted-foreground">{worker.casesHandled} cases</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={(worker.casesHandled / 50) * 100} className="h-2" />
                    <span className="text-xs text-muted-foreground">{worker.avgResponseTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" asChild>
              <Link to="/admin/performance">
                View detailed performance
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Recent activity and quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates and actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {safeRecentActivity.map((activity: { action: string; time: string }, index: number) => (
                <div key={index} className="flex items-start pb-4 border-b last:border-0 last:pb-0">
                  <div className="mr-4 mt-1">
                    {activity.action.includes("critical") ? (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    ) : activity.action.includes("resolved") ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : activity.action.includes("assigned") ? (
                      <Gavel className="h-5 w-5 text-blue-500" />
                    ) : (
                      <FileText className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" asChild>
              <Link to="/admin/activity">
                View all activity
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/admin/cases/new">
                  <Shield className="mr-2 h-4 w-4" />
                  Register new case
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/admin/matching">
                  <Gavel className="mr-2 h-4 w-4" />
                  Match victim with lawyer
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/admin/reports/generate">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Generate report
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/admin/resources/allocate">
                  <Users className="mr-2 h-4 w-4" />
                  Allocate resources
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/admin/calendar">
                  <Calendar className="mr-2 h-4 w-4" />
                  View schedule
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
