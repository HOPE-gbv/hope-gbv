import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { AlertCircle, ArrowRight, CheckCircle2, ChevronDown, Filter, Gavel, MapPin, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Added Avatar imports
import { casesService } from "@/services/admin/cases";
import { lawyersService } from "@/services/admin/lawyers";

interface Case {
  id: string;
  reportDate: string;
  status: string;
  severity: string;
  type: string;
  location: string;
  assignedTo: number | null;
  clientName: string;
}

interface Lawyer {
  id: number;
  name: string;
  photo: string;
  location: string;
  specializations: string[];
  rating: number;
  reviews: number;
  barNumber: string;
  experience: number;
  languages: string[];
  availability: string;
  successRate: string;
  caseCount: number;
  verified: boolean;
  active: boolean;
}

export default function AdminMatchingPage() {
  // const navigate = useNavigate();
  const [cases, setCases] = useState<Case[]>([]);
  const [lawyers, setLawyers] = useState<Lawyer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCase, setSelectedCase] = useState<string>("");
  const [selectedLawyer, setSelectedLawyer] = useState<number | null>(null);
  const [caseSearchTerm, setCaseSearchTerm] = useState("");
  const [lawyerSearchTerm, setLawyerSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState<string>("");
  const [specializationFilter, setSpecializationFilter] = useState<string[]>([]);
  const [experienceFilter, setExperienceFilter] = useState<[number, number]>([0, 20]);
  const [matchSuccess, setMatchSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch unassigned cases
        const fetchedCases = await casesService.getAllCases(); // Assuming service can filter unassigned
        setCases(fetchedCases.filter((c: Case) => c.assignedTo === null));

        // Fetch available lawyers
        const fetchedLawyers = await lawyersService.getAllLawyers(); // Assuming service can filter active/verified
        setLawyers(fetchedLawyers);
      } catch (err) {
        setError("Failed to load data. Please try again.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleMatch = async () => {
    if (!selectedCase || !selectedLawyer) {
      return;
    }

    try {
      // In a real app, this would update the case with the assigned lawyer
      // For this example, we'll just show a success message
      setMatchSuccess(true);

      // Reset selection after successful match
      setTimeout(() => {
        setMatchSuccess(false);
        setSelectedCase("");
        setSelectedLawyer(null);

        // Refresh the case list to reflect the assignment
        const updatedCases = cases.filter((c) => c.id !== selectedCase);
        setCases(updatedCases);
      }, 3000);
    } catch (err) {
      setError("Failed to match case with lawyer. Please try again.");
      console.error("Error matching case:", err);
    }
  };

  const filteredCases = cases.filter((c) => {
    if (caseSearchTerm) {
      const searchLower = caseSearchTerm.toLowerCase();
      return (
        c.id.toLowerCase().includes(searchLower) ||
        c.clientName.toLowerCase().includes(searchLower) ||
        c.type.toLowerCase().includes(searchLower)
      );
    }
    return true;
  });

  const filteredLawyers = lawyers.filter((l) => {
    let matches = true;

    // Apply search term filter
    if (lawyerSearchTerm) {
      const searchLower = lawyerSearchTerm.toLowerCase();
      matches =
        matches &&
        (l.name.toLowerCase().includes(searchLower) ||
          l.barNumber.toLowerCase().includes(searchLower) ||
          l.specializations.some((s) => s.toLowerCase().includes(searchLower)));
    }

    // Apply location filter
    if (locationFilter && locationFilter !== "all") {
      matches = matches && l.location === locationFilter;
    }

    // Apply specialization filter
    if (specializationFilter.length > 0) {
      matches = matches && specializationFilter.some((spec) => l.specializations.includes(spec));
    }

    // Apply experience filter
    matches = matches && l.experience >= experienceFilter[0] && l.experience <= experienceFilter[1];

    return matches;
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-NG", {
      year: "numeric",
      month: "short",
      day: "numeric",
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
      {matchSuccess && (
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Case has been successfully matched with the lawyer. The lawyer will be notified.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cases section */}
        <Card>
          <CardHeader>
            <CardTitle>Unassigned Cases</CardTitle>
            <CardDescription>Select a case to match with a lawyer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search cases..."
                  className="pl-8"
                  value={caseSearchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCaseSearchTerm(e.target.value)}
                />
              </div>

              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
                {filteredCases.length === 0 ? (
                  <div className="text-center py-4 text-muted-foreground">No unassigned cases found.</div>
                ) : (
                  filteredCases.map((caseItem) => (
                    <div
                      key={caseItem.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedCase === caseItem.id ? "bg-purple-50 border-purple-200" : "hover:bg-slate-50"
                      }`}
                      onClick={() => setSelectedCase(caseItem.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{caseItem.id}</h3>
                          <p className="text-sm text-muted-foreground">
                            {caseItem.type} - {formatDate(caseItem.reportDate)}
                          </p>
                        </div>
                        <Badge className={`${getSeverityColor(caseItem.severity)} border`}>{caseItem.severity}</Badge>
                      </div>
                      <div className="mt-2 flex items-center text-sm">
                        <MapPin className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                        <span className="text-muted-foreground">{caseItem.location}</span>
                      </div>
                      <div className="mt-1 text-sm">
                        <span className="font-medium">Client:</span> {caseItem.clientName}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lawyers section */}
        <Card>
          <CardHeader>
            <CardTitle>Available Lawyers</CardTitle>
            <CardDescription>Select a lawyer to match with the case</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search lawyers..."
                  className="pl-8"
                  value={lawyerSearchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLawyerSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <Select value={locationFilter} onValueChange={(value: string) => setLocationFilter(value)}>
                  <SelectTrigger className="w-full md:w-40">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="Lagos">Lagos</SelectItem>
                    <SelectItem value="Abuja">Abuja</SelectItem>
                    <SelectItem value="Kano">Kano</SelectItem>
                    <SelectItem value="Enugu">Enugu</SelectItem>
                  </SelectContent>
                </Select>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center">
                      <Filter className="mr-2 h-4 w-4" />
                      Specialization
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuLabel>Filter by Specialization</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {[
                      "Domestic Violence",
                      "Sexual Assault",
                      "Stalking",
                      "Child Custody",
                      "Restraining Orders",
                      "Human Trafficking",
                    ].map((spec) => (
                      <DropdownMenuCheckboxItem
                        key={spec}
                        checked={specializationFilter.includes(spec)}
                        onCheckedChange={(checked: boolean) => {
                          if (checked) {
                            setSpecializationFilter([...specializationFilter, spec]);
                          } else {
                            setSpecializationFilter(specializationFilter.filter((s) => s !== spec));
                          }
                        }}
                      >
                        {spec}
                      </DropdownMenuCheckboxItem>
                    ))}
                    {specializationFilter.length > 0 && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="justify-center text-red-600"
                          onClick={() => setSpecializationFilter([])}
                        >
                          Clear Filters
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Experience (years)</span>
                  <span className="text-sm text-muted-foreground">
                    {experienceFilter[0]} - {experienceFilter[1]}
                  </span>
                </div>
                <Slider
                  defaultValue={[0, 20]}
                  min={0}
                  max={20}
                  step={1}
                  value={experienceFilter}
                  onValueChange={(value: number[]) => setExperienceFilter(value as [number, number])}
                />
              </div>

              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                {filteredLawyers.length === 0 ? (
                  <div className="text-center py-4 text-muted-foreground">
                    No lawyers found matching the criteria.
                  </div>
                ) : (
                  filteredLawyers.map((lawyer) => (
                    <div
                      key={lawyer.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedLawyer === lawyer.id ? "bg-purple-50 border-purple-200" : "hover:bg-slate-50"
                      }`}
                      onClick={() => setSelectedLawyer(lawyer.id)}
                    >
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={lawyer.photo || "/placeholder.svg"} alt={lawyer.name} />
                          <AvatarFallback>{lawyer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">{lawyer.name}</h3>
                            <div className="flex items-center">
                              <Star className="h-3.5 w-3.5 mr-1 text-yellow-500" />
                              <span className="text-sm">{lawyer.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{lawyer.experience} years experience</p>
                          <div className="mt-1 flex flex-wrap gap-1">
                            {lawyer.specializations.map((spec, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                          <div className="mt-2 flex items-center text-sm">
                            <MapPin className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                            <span className="text-muted-foreground">{lawyer.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Match button */}
      <div className="flex justify-center">
        <Button
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2"
          disabled={!selectedCase || !selectedLawyer}
          onClick={handleMatch}
        >
          <Gavel className="h-5 w-5" />
          Match Case with Lawyer
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
