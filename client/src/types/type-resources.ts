export interface ResourceItem {
    id: number;
    title: string;
    type: "PDF" | string;
    category: "Safety Planning" | "Legal" | "Support & Healing" | string;
    description: string;
    fileUrl: string;
    pages: number;
  }
  
  export interface Resources {
    safetyPlanning: ResourceItem[];
    legalResources: ResourceItem[];
    supportHealing: ResourceItem[];
  }
  