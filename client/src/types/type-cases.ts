export interface CaseNote {
    id: number;
    date: string; 
    author: string;
    content: string;
  }
  
  export interface CaseAction {
    id: number;
    type: string;
    status: "Completed" | "Pending" | string;
    dueDate: string; 
    assignedTo: string;
  }
  
  export interface CaseItem {
    id: string;
    reportDate: string;
    status: string;
    severity: string;
    type: string;
    location: string;
    assignedTo: number | null;
    clientName: string;
    clientContact: string | null;
    lastUpdated: string;
    notes: CaseNote[];
    actions: CaseAction[];
  }
  
  export type CasesList = CaseItem[];  