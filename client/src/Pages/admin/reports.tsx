import React, { useState, useEffect } from "react";
import {
  AlertCircle,
  BarChart3,
  Calendar,
  Download,
  FileText,
  LineChart,
  PieChart,
  Plus,
  RefreshCw,
  Save,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge"; // Added missing import
import { Checkbox } from "@/components/ui/checkbox";
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
import { Line, Bar, Pie } from "react-chartjs-2";

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
export default function AdminReportsPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [period, setPeriod] = useState("month");
  const [showNewReportDialog, setShowNewReportDialog] = useState(false);
  const [reportType, setReportType] = useState("");
  const [reportName, setReportName] = useState("");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const fetchedStats = await statsService.getDashboardStats(); // Assuming this can take period as a param
        setStats(fetchedStats);
      } catch (err) {
        setError("Failed to load report data. Please try again.");
        console.error("Error fetching report stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [period]);

  const handleCreateReport = () => {
    // In a real app, this would create a new report
    setShowNewReportDialog(false);
    setReportType("");
    setReportName("");
    setDateRange([null, null]);
    setSelectedMetrics([]);
  };

  const handleMetricChange = (metric: string, checked: boolean) => {
    if (checked) {
      setSelectedMetrics([...selectedMetrics, metric]);
    } else {
      setSelectedMetrics(selectedMetrics.filter((m) => m !== metric));
    }
  };

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

  // Prepare chart data
  const casesByTypeData = {
    labels: Object.keys(stats.casesByType),
    datasets: [
      {
        label: "Number of Cases",
        data: Object.values(stats.casesByType),
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
    labels: Object.keys(stats.casesByRegion),
    datasets: [
      {
        label: "Number of Cases",
        data: Object.values(stats.casesByRegion),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const casesBySeverityData = {
    labels: Object.keys(stats.casesBySeverity),
    datasets: [
      {
        label: "Number of Cases",
        data: Object.values(stats.casesBySeverity),
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

  // Mock trend data
  const trendData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Domestic Violence",
        data: [65, 59, 80, 81, 56, 55, 40, 45, 50, 65, 70, 75],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        tension: 0.4,
      },
      {
        label: "Sexual Assault",
        data: [28, 48, 40, 19, 86, 27, 90, 85, 80, 75, 65, 60],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
      {
        label: "Stalking",
        data: [12, 19, 3, 5, 2, 3, 10, 15, 20, 25, 30, 35],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const responseTimeData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Average Response Time (hours)",
        data: [4.5, 4.2, 3.8, 3.5, 3.2, 3.0, 2.8, 2.7, 2.5, 2.3, 2.2, 2.0],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const resolutionRateData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Case Resolution Rate (%)",
        data: [65, 68, 70, 72, 75, 78, 80, 82, 85, 87, 88, 90],
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Header with actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h2 className="text-2xl font-bold">Reports & Analytics</h2>
          <p className="text-muted-foreground">Generate insights and compliance reports from your data</p>
        </div>

        <div className="flex space-x-2">
          <Dialog open={showNewReportDialog} onOpenChange={setShowNewReportDialog}>
            <DialogTrigger asChild>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Generate New Report</DialogTitle>
                <DialogDescription>Create a custom report with selected metrics and date range.</DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Report Name
                  </Label>
                  <Input
                    id="name"
                    value={reportName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReportName(e.target.value)}
                    className="col-span-3"
                  />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-right">
                    Report Type
                  </Label>
                  <Select value={reportType} onValueChange={(value: string) => setReportType(value)}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="case-summary">Case Summary</SelectItem>
                      <SelectItem value="performance">Performance Metrics</SelectItem>
                      <SelectItem value="trend-analysis">Trend Analysis</SelectItem>
                      <SelectItem value="compliance">Regulatory Compliance</SelectItem>
                      <SelectItem value="resource-allocation">Resource Allocation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right">Date Range</Label>
                  <div className="col-span-3 flex items-center gap-2">
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="from">From</Label>
                      <Input
                        type="date"
                        id="from"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDateRange([new Date(e.target.value), dateRange[1]])}
                      />
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="to">To</Label>
                      <Input
                        type="date"
                        id="to"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDateRange([dateRange[0], new Date(e.target.value)])}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 items-start gap-4">
                  <Label className="text-right pt-2">Metrics</Label>
                  <div className="col-span-3 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="metric-cases"
                        checked={selectedMetrics.includes("cases")}
                        onCheckedChange={(checked: boolean) => handleMetricChange("cases", checked)}
                      />
                      <label htmlFor="metric-cases">Case Statistics</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="metric-types"
                        checked={selectedMetrics.includes("types")}
                        onCheckedChange={(checked: boolean) => handleMetricChange("types", checked)}
                      />
                      <label htmlFor="metric-types">Violence Types</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="metric-regions"
                        checked={selectedMetrics.includes("regions")}
                        onCheckedChange={(checked: boolean) => handleMetricChange("regions", checked)}
                      />
                      <label htmlFor="metric-regions">Regional Distribution</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="metric-response"
                        checked={selectedMetrics.includes("response")}
                        onCheckedChange={(checked: boolean) => handleMetricChange("response", checked)}
                      />
                      <label htmlFor="metric-response">Response Times</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="metric-resolution"
                        checked={selectedMetrics.includes("resolution")}
                        onCheckedChange={(checked: boolean) => handleMetricChange("resolution", checked)}
                      />
                      <label htmlFor="metric-resolution">Resolution Rates</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="metric-performance"
                        checked={selectedMetrics.includes("performance")}
                        onCheckedChange={(checked: boolean) => handleMetricChange("performance", checked)}
                      />
                      <label htmlFor="metric-performance">Staff Performance</label>
                    </div>
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setShowNewReportDialog(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateReport}
                  disabled={!reportName || !reportType || selectedMetrics.length === 0}
                >
                  Generate Report
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>

          <Button variant="outline" onClick={() => window.location.reload()}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Time period selector */}
      <div className="mb-6">
        <Tabs defaultValue={period} onValueChange={(value) => setPeriod(value)}>
          <TabsList className="grid w-full grid-cols-4">
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
            <CardTitle className="text-sm font-medium">Total Cases</CardTitle>
            <FileText className="h-4 w-4 text-purple-600" />
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
            <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
            <PieChart className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round((stats.resolvedCases / stats.newCases) * 100)}%</div>
            <p className="text-xs text-muted-foreground">+2% from previous {period}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
            <LineChart className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageResponseTime}</div>
            <p className="text-xs text-muted-foreground">-0.3 hours from previous {period}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Cases</CardTitle>
            <BarChart3 className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.criticalCases}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((stats.criticalCases / stats.newCases) * 100)}% of total cases
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main report tabs */}
      <Tabs defaultValue="case-analysis">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="case-analysis">Case Analysis</TabsTrigger>
          <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="case-analysis" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <Save className="mr-2 h-4 w-4" />
                  Save to Report
                </Button>
              </CardFooter>
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
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <Save className="mr-2 h-4 w-4" />
                  Save to Report
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Cases by Severity</CardTitle>
              <CardDescription>Distribution of cases by severity level</CardDescription>
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
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Save className="mr-2 h-4 w-4" />
                Save to Report
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Violence Type Trends</CardTitle>
              <CardDescription>Monthly trends of different violence types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <Line
                  data={trendData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "top",
                      },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Save className="mr-2 h-4 w-4" />
                Save to Report
              </Button>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Response Time Trends</CardTitle>
                <CardDescription>Monthly average response times</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <Line
                    data={responseTimeData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: "top",
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                        },
                      },
                    }}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <Save className="mr-2 h-4 w-4" />
                  Save to Report
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resolution Rate Trends</CardTitle>
                <CardDescription>Monthly case resolution rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <Line
                    data={resolutionRateData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: "top",
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          max: 100,
                        },
                      },
                    }}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <Save className="mr-2 h-4 w-4" />
                  Save to Report
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Caseworker Performance</CardTitle>
              <CardDescription>Cases handled and response times by caseworker</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {stats.caseworkerPerformance.map((worker: { name: string; casesHandled: number; avgResponseTime: string }, index: number) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{worker.name}</h3>
                        <p className="text-sm text-muted-foreground">{worker.casesHandled} cases handled</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">Avg. Response: {worker.avgResponseTime}</p>
                        <p className="text-sm text-muted-foreground">
                          {worker.avgResponseTime < "3.0 hours" ? "Above Target" : "Below Target"}
                        </p>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-600 rounded-full"
                        style={{ width: `${(worker.casesHandled / 50) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Save className="mr-2 h-4 w-4" />
                Save to Report
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lawyer Performance Metrics</CardTitle>
              <CardDescription>Case resolution rates and client satisfaction</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Mock lawyer performance data */}
                {[
                  { name: "Adebayo Johnson", casesHandled: 78, resolutionRate: "92%", satisfaction: 4.9 },
                  { name: "Fatima Ibrahim", casesHandled: 65, resolutionRate: "88%", satisfaction: 4.8 },
                  { name: "Chinedu Okonkwo", casesHandled: 52, resolutionRate: "85%", satisfaction: 4.7 },
                  { name: "Amina Bello", casesHandled: 47, resolutionRate: "90%", satisfaction: 4.6 },
                ].map((lawyer, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{lawyer.name}</h3>
                        <p className="text-sm text-muted-foreground">{lawyer.casesHandled} cases handled</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">Resolution: {lawyer.resolutionRate}</p>
                        <p className="text-sm text-muted-foreground">Satisfaction: {lawyer.satisfaction}/5.0</p>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-600 rounded-full"
                        style={{ width: `${Number.parseInt(lawyer.resolutionRate)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Save className="mr-2 h-4 w-4" />
                Save to Report
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Regulatory Compliance Report</CardTitle>
              <CardDescription>Status of compliance with legal and regulatory requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Mock compliance data */}
                {[
                  {
                    category: "Data Privacy",
                    status: "Compliant",
                    lastAudit: "2023-04-15",
                    nextAudit: "2023-10-15",
                    requirements: "NDPR Compliance, Data Protection Impact Assessment",
                    notes: "All required measures implemented and documented.",
                  },
                  {
                    category: "Case Documentation",
                    status: "Compliant",
                    lastAudit: "2023-05-10",
                    nextAudit: "2023-11-10",
                    requirements: "Complete case records, Proper documentation of evidence",
                    notes: "Regular audits conducted to ensure compliance.",
                  },
                  {
                    category: "Reporting to Authorities",
                    status: "Compliant",
                    lastAudit: "2023-03-22",
                    nextAudit: "2023-09-22",
                    requirements: "Timely reporting of cases to relevant authorities",
                    notes: "Automated reporting system implemented.",
                  },
                  {
                    category: "Staff Certification",
                    status: "Partially Compliant",
                    lastAudit: "2023-02-18",
                    nextAudit: "2023-08-18",
                    requirements: "All staff must have required certifications and training",
                    notes: "3 staff members need to renew certifications by August 2023.",
                  },
                ].map((item, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg">{item.category}</h3>
                        <p className="text-sm text-muted-foreground">{item.requirements}</p>
                      </div>
                      <Badge
                        className={
                          item.status === "Compliant"
                            ? "bg-green-100 text-green-800 border-green-200"
                            : "bg-yellow-100 text-yellow-800 border-yellow-200"
                        }
                      >
                        {item.status}
                      </Badge>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Last Audit:</p>
                        <p>{new Date(item.lastAudit).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Next Audit:</p>
                        <p>{new Date(item.nextAudit).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="mt-2 text-sm">
                      <p className="text-muted-foreground">Notes:</p>
                      <p>{item.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Audit
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
