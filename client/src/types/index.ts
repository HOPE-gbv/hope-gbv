
export interface Stats {
  newCases: number;
  resolvedCases: number;
  criticalCases: number;
  averageResponseTime: string; 
  casesByType: Record<string, number>; 
  casesByRegion: Record<string, number>;
  casesByLawyer: Record<string, number>; 
  casesByClient: Record<string, number>; 
  casesBySeverity: Record<string, number>; 
  caseworkerPerformance: Array<{
    name: string;
    casesHandled: number;
    avgResponseTime: string; 
    }>;
  recentActivity: Array<{
    action: string;
    time: string;
    }>;
}
