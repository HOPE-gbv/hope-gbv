import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpDown,
  CheckCircle2,
  Clock,
  Download,
  File,
  FileText,
  FolderPlus,
  Pencil,
  Plus,
  Search,
  Trash2,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
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
import { Checkbox } from "@/components/ui/checkbox";

interface Document {
  id: string;
  name: string;
  type: string;
  category: string;
  caseId: string | null;
  createdBy: string;
  createdAt: string;
  lastModified: string;
  status: string;
  signed: boolean;
  size: string;
  version: number;
}

const DOCUMENT_TYPES = [
  "Restraining Order",
  "Police Report",
  "Medical Report",
  "Court Filing",
  "Affidavit",
  "Consent Form",
  "Safety Plan",
  "Legal Brief",
  "Witness Statement",
  "Evidence Documentation",
];

const DOCUMENT_CATEGORIES = ["Legal", "Medical", "Evidence", "Administrative", "Client Forms", "Templates"];

// Mock documents data
const MOCK_DOCUMENTS: Document[] = [
  {
    id: "DOC-12345",
    name: "Restraining Order - Jane Doe",
    type: "Restraining Order",
    category: "Legal",
    caseId: "GBV-123456",
    createdBy: "Adebayo Johnson",
    createdAt: "2023-05-16T09:30:00Z",
    lastModified: "2023-05-16T14:45:00Z",
    status: "Final",
    signed: true,
    size: "1.2 MB",
    version: 2,
  },
  {
    id: "DOC-23456",
    name: "Medical Examination Report",
    type: "Medical Report",
    category: "Medical",
    caseId: "GBV-234567",
    createdBy: "Dr. Amina Bello",
    createdAt: "2023-05-11T10:15:00Z",
    lastModified: "2023-05-11T10:15:00Z",
    status: "Final",
    signed: true,
    size: "3.5 MB",
    version: 1,
  },
  {
    id: "DOC-34567",
    name: "Police Report - Stalking Case",
    type: "Police Report",
    category: "Evidence",
    caseId: "GBV-345678",
    createdBy: "Officer Ibrahim",
    createdAt: "2023-05-08T13:45:00Z",
    lastModified: "2023-05-08T16:30:00Z",
    status: "Final",
    signed: true,
    size: "0.8 MB",
    version: 1,
  },
  {
    id: "DOC-45678",
    name: "Court Filing - Human Trafficking",
    type: "Court Filing",
    category: "Legal",
    caseId: "GBV-456789",
    createdBy: "Fatima Ibrahim",
    createdAt: "2023-05-15T09:50:00Z",
    lastModified: "2023-05-17T11:20:00Z",
    status: "Draft",
    signed: false,
    size: "2.1 MB",
    version: 3,
  },
  {
    id: "DOC-56789",
    name: "Witness Statement - Child Marriage Case",
    type: "Witness Statement",
    category: "Evidence",
    caseId: "GBV-567890",
    createdBy: "Community Liaison",
    createdAt: "2023-05-05T16:20:00Z",
    lastModified: "2023-05-05T16:20:00Z",
    status: "Final",
    signed: true,
    size: "0.5 MB",
    version: 1,
  },
  {
    id: "DOC-67890",
    name: "Safety Plan Template",
    type: "Safety Plan",
    category: "Templates",
    caseId: null,
    createdBy: "Admin User",
    createdAt: "2023-04-15T10:00:00Z",
    lastModified: "2023-04-20T14:30:00Z",
    status: "Final",
    signed: false,
    size: "0.3 MB",
    version: 2,
  },
  {
    id: "DOC-78901",
    name: "Consent Form Template",
    type: "Consent Form",
    category: "Templates",
    caseId: null,
    createdBy: "Admin User",
    createdAt: "2023-04-10T09:15:00Z",
    lastModified: "2023-04-10T09:15:00Z",
    status: "Final",
    signed: false,
    size: "0.2 MB",
    version: 1,
  },
  {
    id: "DOC-89012",
    name: "Evidence Documentation - Domestic Violence",
    type: "Evidence Documentation",
    category: "Evidence",
    caseId: "GBV-123456",
    createdBy: "Case Worker",
    createdAt: "2023-05-15T14:45:00Z",
    lastModified: "2023-05-15T14:45:00Z",
    status: "Final",
    signed: true,
    size: "4.7 MB",
    version: 1,
  },
  {
    id: "DOC-90123",
    name: "Legal Brief - Sexual Assault Case",
    type: "Legal Brief",
    category: "Legal",
    caseId: "GBV-234567",
    createdBy: "Fatima Ibrahim",
    createdAt: "2023-05-16T11:10:00Z",
    lastModified: "2023-05-18T09:25:00Z",
    status: "Draft",
    signed: false,
    size: "1.8 MB",
    version: 2,
  },
  {
    id: "DOC-01234",
    name: "Affidavit Template",
    type: "Affidavit",
    category: "Templates",
    caseId: null,
    createdBy: "Admin User",
    createdAt: "2023-04-05T11:30:00Z",
    lastModified: "2023-04-05T11:30:00Z",
    status: "Final",
    signed: false,
    size: "0.4 MB",
    version: 1,
  },
];

export default function AdminDocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>(MOCK_DOCUMENTS);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<string>("lastModified");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [showNewDocumentDialog, setShowNewDocumentDialog] = useState(false);
  const [newDocumentName, setNewDocumentName] = useState("");
  const [newDocumentType, setNewDocumentType] = useState("");
  const [newDocumentCategory, setNewDocumentCategory] = useState("");
  const [newDocumentCase, setNewDocumentCase] = useState("");
  const [newDocumentTemplate, setNewDocumentTemplate] = useState(false);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const filteredDocuments = documents
    .filter((doc) => {
      // Apply tab filter
      if (activeTab === "templates" && doc.caseId !== null) return false;
      if (activeTab === "case-documents" && doc.caseId === null) return false;

      // Apply search term filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        return (
          doc.name.toLowerCase().includes(searchLower) ||
          doc.id.toLowerCase().includes(searchLower) ||
          (doc.caseId && doc.caseId.toLowerCase().includes(searchLower)) ||
          doc.createdBy.toLowerCase().includes(searchLower)
        );
      }
      return true;
    })
    .filter((doc) => {
      // Apply category filter
      if (categoryFilter && categoryFilter !== "all" && doc.category !== categoryFilter) return false;

      // Apply type filter
      if (typeFilter && typeFilter !== "all" && doc.type !== typeFilter) return false;

      // Apply status filter
      if (statusFilter && statusFilter !== "all" && doc.status !== statusFilter) return false;

      return true;
    })
    .sort((a, b) => {
      // Apply sorting
      if (sortColumn === "createdAt" || sortColumn === "lastModified") {
        return sortDirection === "asc"
          ? new Date(a[sortColumn]).getTime() - new Date(b[sortColumn]).getTime()
          : new Date(b[sortColumn]).getTime() - new Date(a[sortColumn]).getTime();
      } else if (sortColumn === "size") {
        const aSize = Number.parseFloat(a.size.split(" ")[0]);
        const bSize = Number.parseFloat(b.size.split(" ")[0]);
        return sortDirection === "asc" ? aSize - bSize : bSize - aSize;
      } else {
        // For string columns
        const aValue = a[sortColumn as keyof Document] || "";
        const bValue = b[sortColumn as keyof Document] || "";
        return sortDirection === "asc"
          ? String(aValue).localeCompare(String(bValue))
          : String(bValue).localeCompare(String(aValue));
      }
    });

  const handleCreateDocument = () => {
    // In a real app, this would create a new document in the database
    const newDoc: Document = {
      id: `DOC-${Math.floor(100000 + Math.random() * 900000)}`,
      name: newDocumentName,
      type: newDocumentType,
      category: newDocumentCategory,
      caseId: newDocumentTemplate ? null : newDocumentCase || null,
      createdBy: "Admin User",
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      status: "Draft",
      signed: false,
      size: "0.1 MB",
      version: 1,
    };

    setDocuments([newDoc, ...documents]);
    setShowNewDocumentDialog(false);
    setNewDocumentName("");
    setNewDocumentType("");
    setNewDocumentCategory("");
    setNewDocumentCase("");
    setNewDocumentTemplate(false);
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

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "draft":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "final":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending signature":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "archived":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "legal":
        return <FileText className="h-4 w-4 text-purple-600" />;
      case "medical":
        return <FileText className="h-4 w-4 text-blue-600" />;
      case "evidence":
        return <FileText className="h-4 w-4 text-amber-600" />;
      case "administrative":
        return <FileText className="h-4 w-4 text-gray-600" />;
      case "client forms":
        return <FileText className="h-4 w-4 text-green-600" />;
      case "templates":
        return <FileText className="h-4 w-4 text-cyan-600" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Header with stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
            <FileText className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{documents.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Templates</CardTitle>
            <File className="h-4 w-4 text-cyan-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{documents.filter((doc) => doc.caseId === null).length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Draft Documents</CardTitle>
            <Pencil className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{documents.filter((doc) => doc.status === "Draft").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Signed Documents</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{documents.filter((doc) => doc.signed).length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" onValueChange={(value: string) => setActiveTab(value)}>
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">All Documents</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="case-documents">Case Documents</TabsTrigger>
          </TabsList>

          <div className="flex space-x-2">
            <Dialog open={showNewDocumentDialog} onOpenChange={setShowNewDocumentDialog}>
              <DialogTrigger asChild>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="mr-2 h-4 w-4" />
                  New Document
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Document</DialogTitle>
                  <DialogDescription>Create a new document or template for the system.</DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Document Name
                    </Label>
                    <Input
                      id="name"
                      value={newDocumentName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewDocumentName(e.target.value)}
                      className="col-span-3"
                    />
                  </div>

                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="type" className="text-right">
                      Document Type
                    </Label>
                    <Select value={newDocumentType} onValueChange={(value: string) => setNewDocumentType(value)}>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {DOCUMENT_TYPES.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category" className="text-right">
                      Category
                    </Label>
                    <Select value={newDocumentCategory} onValueChange={(value: string) => setNewDocumentCategory(value)}>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {DOCUMENT_CATEGORIES.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-4 items-center gap-4">
                    <div className="text-right">
                      <Label htmlFor="template">Template</Label>
                    </div>
                    <div className="flex items-center space-x-2 col-span-3">
                      <Checkbox
                        id="template"
                        checked={newDocumentTemplate}
                        onCheckedChange={(checked: boolean) => setNewDocumentTemplate(checked)}
                      />
                      <label
                        htmlFor="template"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        This is a template document
                      </label>
                    </div>
                  </div>

                  {!newDocumentTemplate && (
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="case" className="text-right">
                        Associated Case
                      </Label>
                      <Input
                        id="case"
                        value={newDocumentCase}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewDocumentCase(e.target.value)}
                        placeholder="e.g. GBV-123456"
                        className="col-span-3"
                      />
                    </div>
                  )}
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowNewDocumentDialog(false)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={handleCreateDocument}
                    disabled={!newDocumentName || !newDocumentType || !newDocumentCategory}
                  >
                    Create Document
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="mt-6">
          {/* Filters and search */}
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-6">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search documents..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                />
              </div>

              <Select value={categoryFilter} onValueChange={(value: string) => setCategoryFilter(value)}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {DOCUMENT_CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={(value: string) => setTypeFilter(value)}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Document Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {DOCUMENT_TYPES.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={(value: string) => setStatusFilter(value)}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Draft">Draft</SelectItem>
                  <SelectItem value="Final">Final</SelectItem>
                  <SelectItem value="Pending Signature">Pending Signature</SelectItem>
                  <SelectItem value="Archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Documents table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">
                    <Button
                      variant="ghost"
                      onClick={() => handleSort("name")}
                      className="flex items-center p-0 h-auto font-medium"
                    >
                      Document Name
                      {sortColumn === "name" && <ArrowUpDown className="ml-2 h-4 w-4" />}
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
                      onClick={() => handleSort("category")}
                      className="flex items-center p-0 h-auto font-medium"
                    >
                      Category
                      {sortColumn === "category" && <ArrowUpDown className="ml-2 h-4 w-4" />}
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
                      onClick={() => handleSort("caseId")}
                      className="flex items-center p-0 h-auto font-medium"
                    >
                      Case ID
                      {sortColumn === "caseId" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button
                      variant="ghost"
                      onClick={() => handleSort("lastModified")}
                      className="flex items-center p-0 h-auto font-medium"
                    >
                      Last Modified
                      {sortColumn === "lastModified" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button
                      variant="ghost"
                      onClick={() => handleSort("version")}
                      className="flex items-center p-0 h-auto font-medium text-center"
                    >
                      Version
                      {sortColumn === "version" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                    </Button>
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDocuments.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      No documents found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredDocuments.map((doc) => (
                    <TableRow key={doc.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          {getCategoryIcon(doc.category)}
                          <span className="ml-2">{doc.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{doc.type}</TableCell>
                      <TableCell>{doc.category}</TableCell>
                      <TableCell>
                        <Badge className={`${getStatusColor(doc.status)} border`}>{doc.status}</Badge>
                      </TableCell>
                      <TableCell>
                        {doc.caseId ? (
                          <Button variant="link" className="p-0 h-auto" asChild>
                            <Link to={`/admin/cases/${doc.caseId}`}>{doc.caseId}</Link>
                          </Button>
                        ) : (
                          <span className="text-muted-foreground">Template</span>
                        )}
                      </TableCell>
                      <TableCell>{formatDate(doc.lastModified)}</TableCell>
                      <TableCell className="text-center">v{doc.version}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="mt-6">
          {/* Template-specific content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {documents
              .filter((doc) => doc.caseId === null)
              .map((template) => (
                <Card key={template.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      {getCategoryIcon(template.category)}
                      <span className="ml-2">{template.name}</span>
                    </CardTitle>
                    <CardDescription>{template.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Category:</span>
                      <span>{template.category}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-muted-foreground">Created:</span>
                      <span>{formatDate(template.createdAt)}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-muted-foreground">Version:</span>
                      <span>v{template.version}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Pencil className="mr-2 h-3 w-3" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <FolderPlus className="mr-2 h-3 w-3" />
                      Use Template
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="case-documents" className="mt-6">
          {/* Case documents content - similar to "all" but filtered */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">
                    <Button
                      variant="ghost"
                      onClick={() => handleSort("name")}
                      className="flex items-center p-0 h-auto font-medium"
                    >
                      Document Name
                      {sortColumn === "name" && <ArrowUpDown className="ml-2 h-4 w-4" />}
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
                      onClick={() => handleSort("caseId")}
                      className="flex items-center p-0 h-auto font-medium"
                    >
                      Case ID
                      {sortColumn === "caseId" && <ArrowUpDown className="ml-2 h-4 w-4" />}
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
                      onClick={() => handleSort("signed")}
                      className="flex items-center p-0 h-auto font-medium"
                    >
                      Signed
                      {sortColumn === "signed" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button
                      variant="ghost"
                      onClick={() => handleSort("lastModified")}
                      className="flex items-center p-0 h-auto font-medium"
                    >
                      Last Modified
                      {sortColumn === "lastModified" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                    </Button>
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDocuments.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center">
                      No case documents found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredDocuments.map((doc) => (
                    <TableRow key={doc.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          {getCategoryIcon(doc.category)}
                          <span className="ml-2">{doc.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{doc.type}</TableCell>
                      <TableCell>
                        <Button variant="link" className="p-0 h-auto" asChild>
                          <Link to={`/admin/cases/${doc.caseId}`}>{doc.caseId}</Link>
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Badge className={`${getStatusColor(doc.status)} border`}>{doc.status}</Badge>
                      </TableCell>
                      <TableCell>
                        {doc.signed ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <Clock className="h-4 w-4 text-yellow-600" />
                        )}
                      </TableCell>
                      <TableCell>{formatDate(doc.lastModified)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
