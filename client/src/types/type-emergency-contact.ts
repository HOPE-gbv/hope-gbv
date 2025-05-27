export interface EmergencyContact {
    id: number;
    name: string;
    number: string;
    category: "National Emergency" | "GBV Hotline" | "State Emergency" | "Mental Health" | string;
  }
  
  export interface StateContacts {
    [state: string]: EmergencyContact[];
  }
  
  export interface EmergencyContacts {
    national: EmergencyContact[];
    gbvHotlines: EmergencyContact[];
    stateContacts: StateContacts;
    mentalHealth: EmergencyContact[];
  }
  