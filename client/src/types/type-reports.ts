export interface ReportItem {
    id: string;
    reportDate: string;
    reportType: "self" | "witness" | "anonymous" | string;
    incidentType: string;
    location: string;
    status: string;
    severity: string;
    hasEvidence: boolean;
    hasWitnesses: boolean;
    immediateDanger: boolean;
    clientName: string;
    clientContact: string | null;
    assignedTo: number | null;
  }
  