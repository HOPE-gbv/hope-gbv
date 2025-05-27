import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AlertCircle,
  ArrowUpDown,
  CheckCircle2,
  ChevronDown,
  Clock,
  Download,
  Filter,
  Plus,
  Search,
  Shield,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { casesService } from "@/services/admin/cases"; 
import { type CaseItem as Case } from "@/types/type-cases"; 

export default function AdminCasesPage() {
  const navigate = useNavigate();
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [severityFilter, setSeverityFilter] = useState<string[]>([]);
  const [locationFilter, setLocationFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<string>("reportDate");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  useEffect(() => {
    const fetchCases = async () => {
      try {
        setLoading(true);
        //*
        // TODO: The casesService.getAllCases would handle query parameters internally or accept them
        // For now, we'll pass filters directly if the service is designed to accept them.
        // Assuming casesService.getAllCases can take filter parameters
        //  */ 
       
        const fetchedCases = await casesService.getAllCases();
        // Ensure fetchedCases is an array before setting it
        if (Array.isArray(fetchedCases)) {
          setCases(fetchedCases);
        } else {
          console.error("casesService.getAllCases did not return an array:", fetchedCases);
          setCases([]); // Default to an empty array to prevent filter errors
        }
      } catch (err) {
        setError("Failed to load cases. Please try again.");
        console.error("Error fetching cases:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
  }, [statusFilter, severityFilter, locationFilter, typeFilter]); // Dependencies for re-fetching

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const filteredAndSortedCases = cases
    .filter((c: Case) => {
      // Apply search term filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        return (
          c.id.toLowerCase().includes(searchLower) ||
          c.clientName.toLowerCase().includes(searchLower) ||
          c.type.toLowerCase().includes(searchLower) ||
          c.location.toLowerCase().includes(searchLower)
        );
      }
      return true;
    })
    .filter((c) => {
      // Apply status filter
      if (statusFilter.length > 0 && !statusFilter.includes(c.status)) {
        return false;
      }
      return true;
    })
    .filter((c) => {
      // Apply severity filter
      if (severityFilter.length > 0 && !severityFilter.includes(c.severity)) {
        return false;
      }
      return true;
    })
    .filter((c) => {
      // Apply location filter
      if (locationFilter && locationFilter !== "all" && c.location !== locationFilter) {
        return false;
      }
      return true;
    })
    .filter((c) => {
      // Apply type filter
      if (typeFilter && typeFilter !== "all" && c.type !== typeFilter) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      // Apply sorting
      if (sortColumn === "reportDate") {
        return sortDirection === "asc"
          ? new Date(a.reportDate).getTime() - new Date(b.reportDate).getTime()
          : new Date(b.reportDate).getTime() - new Date(a.reportDate).getTime();
      } else if (sortColumn === "lastUpdated") {
        return sortDirection === "asc"
          ? new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime()
          : new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      } else {
        // For string columns
        const aValue = a[sortColumn as keyof Case] || "";
        const bValue = b[sortColumn as keyof Case] || "";
        return sortDirection === "asc"
          ? String(aValue).localeCompare(String(bValue))
          : String(bValue).localeCompare(String(aValue));
      }
    });

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200";
      case "severe":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "moderate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "fair":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "closed":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "under review":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "assigned":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      case "in progress":
        return "bg-cyan-100 text-cyan-800 border-cyan-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-NG", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
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

  return (
    <div className="flex flex-col space-y-6">
      {/* Header with stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cases</CardTitle>
            <Shield className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{cases.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Cases</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {cases.filter((c) => c.status.toLowerCase() === "active").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Cases</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {cases.filter((c) => c.severity.toLowerCase() === "critical").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved Cases</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {cases.filter((c) => c.status.toLowerCase() === "closed").length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and actions */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search cases..."
              className="pl-8"
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Status
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {["Active", "Closed", "Under Review", "Assigned", "In Progress"].map((status) => (
                <DropdownMenuCheckboxItem
                  key={status}
                  checked={statusFilter.includes(status)}
                  onCheckedChange={(checked: boolean) => {
                    if (checked) {
                      setStatusFilter([...statusFilter, status]);
                    } else {
                      setStatusFilter(statusFilter.filter((s) => s !== status));
                    }
                  }}
                >
                  {status}
                </DropdownMenuCheckboxItem>
              ))}
              {statusFilter.length > 0 && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="justify-center text-red-600" onClick={() => setStatusFilter([])}>
                    Clear Filters
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Severity
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuLabel>Filter by Severity</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {["Critical", "Severe", "Moderate", "Fair"].map((severity) => (
                <DropdownMenuCheckboxItem
                  key={severity}
                  checked={severityFilter.includes(severity)}
                  onCheckedChange={(checked: boolean) => {
                    if (checked) {
                      setSeverityFilter([...severityFilter, severity]);
                    } else {
                      setSeverityFilter(severityFilter.filter((s) => s !== severity));
                    }
                  }}
                >
                  {severity}
                </DropdownMenuCheckboxItem>
              ))}
              {severityFilter.length > 0 && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="justify-center text-red-600" onClick={() => setSeverityFilter([])}>
                    Clear Filters
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="Lagos">Lagos</SelectItem>
              <SelectItem value="Abuja">Abuja</SelectItem>
              <SelectItem value="Kano">Kano</SelectItem>
              <SelectItem value="Enugu">Enugu</SelectItem>
              <SelectItem value="Port Harcourt">Port Harcourt</SelectItem>
            </SelectContent>
          </Select>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Case Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Domestic Violence">Domestic Violence</SelectItem>
              <SelectItem value="Sexual Assault">Sexual Assault</SelectItem>
              <SelectItem value="Stalking">Stalking</SelectItem>
              <SelectItem value="Human Trafficking">Human Trafficking</SelectItem>
              <SelectItem value="Child Marriage">Child Marriage</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button
            className="flex items-center bg-purple-600 hover:bg-purple-700"
            onClick={() => navigate("/admin/cases/new")}
          >
            <Plus className="mr-2 h-4 w-4" />
            New Case
          </Button>
        </div>
      </div>

      {/* Applied filters */}
      {(statusFilter.length > 0 || severityFilter.length > 0 || locationFilter || typeFilter || searchTerm) && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {searchTerm && (
            <Badge variant="outline" className="flex items-center gap-1">
              Search: {searchTerm}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchTerm("")} />
            </Badge>
          )}
          {statusFilter.map((status) => (
            <Badge key={status} variant="outline" className="flex items-center gap-1">
              Status: {status}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => setStatusFilter(statusFilter.filter((s) => s !== status))}
              />
            </Badge>
          ))}
          {severityFilter.map((severity) => (
            <Badge key={severity} variant="outline" className="flex items-center gap-1">
              Severity: {severity}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => setSeverityFilter(severityFilter.filter((s) => s !== severity))}
              />
            </Badge>
          ))}
          {locationFilter && (
            <Badge variant="outline" className="flex items-center gap-1">
              Location: {locationFilter}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setLocationFilter("")} />
            </Badge>
          )}
          {typeFilter && (
            <Badge variant="outline" className="flex items-center gap-1">
              Type: {typeFilter}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setTypeFilter("")} />
            </Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs"
            onClick={() => {
              setSearchTerm("");
              setStatusFilter([]);
              setSeverityFilter([]);
              setLocationFilter("");
              setTypeFilter("");
            }}
          >
            Clear all
          </Button>
        </div>
      )}

      {/* Cases table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">
                <Button
                  variant="ghost"
                  onClick={() => handleSort("id")}
                  className="flex items-center p-0 h-auto font-medium"
                >
                  Case ID
                  {sortColumn === "id" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("reportDate")}
                  className="flex items-center p-0 h-auto font-medium"
                >
                  Report Date
                  {sortColumn === "reportDate" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("type")}
                  className="flex items-center p-0 h-auto font-medium"
                >
                  Type
                  {sortColumn === "type" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("severity")}
                  className="flex items-center p-0 h-auto font-medium"
                >
                  Severity
                  {sortColumn === "severity" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("status")}
                  className="flex items-center p-0 h-auto font-medium"
                >
                  Status
                  {sortColumn === "status" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("location")}
                  className="flex items-center p-0 h-auto font-medium"
                >
                  Location
                  {sortColumn === "location" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("clientName")}
                  className="flex items-center p-0 h-auto font-medium"
                >
                  Client
                  {sortColumn === "clientName" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("lastUpdated")}
                  className="flex items-center p-0 h-auto font-medium"
                >
                  Last Updated
                  {sortColumn === "lastUpdated" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                </Button>
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedCases.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="h-24 text-center">
                  No cases found.
                </TableCell>
              </TableRow>
            ) : (
              filteredAndSortedCases.map((caseItem) => (
                <TableRow
                  key={caseItem.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => navigate(`/admin/cases/${caseItem.id}`)}
                >
                  <TableCell className="font-medium">{caseItem.id}</TableCell>
                  <TableCell>{formatDate(caseItem.reportDate)}</TableCell>
                  <TableCell>{caseItem.type}</TableCell>
                  <TableCell>
                    <Badge className={`${getSeverityColor(caseItem.severity)} border`}>{caseItem.severity}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(caseItem.status)} border`}>{caseItem.status}</Badge>
                  </TableCell>
                  <TableCell>{caseItem.location}</TableCell>
                  <TableCell>{caseItem.clientName}</TableCell>
                  <TableCell>{formatDate(caseItem.lastUpdated)}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        navigate(`/admin/cases/${caseItem.id}`);
                      }}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
