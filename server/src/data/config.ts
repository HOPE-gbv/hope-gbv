export const LAWYERS = [
    {
      id: 1,
      name: "Adebayo Johnson",
      photo: "/placeholder.svg?height=400&width=400",
      location: "Lagos",
      specializations: ["Domestic Violence", "Restraining Orders"],
      rating: 4.9,
      reviews: 27,
      verified: true,
      active: true,
      barNumber: "NBA/LAG/12345",
      experience: 8,
      languages: ["English", "Yoruba"],
      availability: "Available within 24 hours",
      successRate: "92%",
      bio: "Adebayo is a dedicated human rights lawyer with extensive experience in gender-based violence cases. He has successfully represented over 50 survivors in court.",
      caseCount: 78,
      education: "LLB, University of Lagos; BL, Nigerian Law School",
      contactHours: "Mon-Fri: 9am-5pm",
      testimonials: [
        {
          text: "Adebayo handled my case with compassion and professionalism. I felt supported throughout the entire process.",
          author: "Anonymous Client",
        },
        {
          text: "His expertise in domestic violence cases made all the difference in my situation.",
          author: "Anonymous Client",
        },
      ],
      expertise: [
        "Domestic violence protection orders",
        "Emergency restraining orders",
        "Family law in abuse cases",
        "Criminal defense for survivors",
        "Victim compensation claims",
      ],
      documents: [
        {
          name: "Protection Order Application",
          type: "Legal Form",
          description: "Standard form for applying for a protection order in Lagos State courts.",
        },
        {
          name: "Evidence Documentation Guide",
          type: "Guide",
          description: "Guide on how to document evidence of abuse for legal proceedings.",
        },
        {
          name: "Safety Planning Worksheet",
          type: "Resource",
          description: "Worksheet to help create a personalized safety plan.",
        },
      ],
      availabilityCalendar: [
        { date: "2023-06-15", slots: ["9:00 AM", "11:00 AM", "2:00 PM"] },
        { date: "2023-06-16", slots: ["10:00 AM", "3:00 PM"] },
        { date: "2023-06-17", slots: ["9:00 AM", "1:00 PM"] },
      ],
    },
    {
      id: 2,
      name: "Fatima Ibrahim",
      photo: "/placeholder.svg?height=400&width=400",
      location: "Abuja",
      specializations: ["Sexual Assault", "Child Custody"],
      rating: 4.8,
      reviews: 19,
      barNumber: "NBA/ABJ/23456",
      experience: 12,
      languages: ["English", "Hausa", "Arabic"],
      availability: "Available within 48 hours",
      successRate: "88%",
      bio: "Fatima specializes in family law with a focus on protecting survivors of gender-based violence. She provides compassionate and effective legal representation.",
      caseCount: 124,
      education: "LLB, Ahmadu Bello University; BL, Nigerian Law School; LLM, University of London",
      contactHours: "Mon-Fri: 8am-6pm",
      testimonials: [
        {
          text: "Fatima's expertise in sexual assault cases was invaluable. She guided me through every step with patience.",
          author: "Anonymous Client",
        },
      ],
      expertise: [
        "Sexual assault cases",
        "Child custody in abuse situations",
        "Divorce proceedings involving abuse",
        "Child protection law",
        "Victim advocacy in court",
      ],
      documents: [
        {
          name: "Sexual Assault Reporting Guide",
          type: "Guide",
          description: "Comprehensive guide on reporting sexual assault in Nigeria.",
        },
        {
          name: "Child Custody Application",
          type: "Legal Form",
          description: "Form for applying for child custody in cases involving abuse.",
        },
        {
          name: "Court Preparation Checklist",
          type: "Resource",
          description: "Checklist to help prepare for court appearances.",
        },
      ],
      availabilityCalendar: [
        { date: "2023-06-15", slots: ["8:00 AM", "10:00 AM", "4:00 PM"] },
        { date: "2023-06-16", slots: ["9:00 AM", "2:00 PM"] },
        { date: "2023-06-17", slots: ["11:00 AM", "3:00 PM"] },
      ],
    },
    // Additional lawyers would be included here
  ]
export  const CASES = [
    {
      id: "GBV-123456",
      reportDate: "2023-05-15T10:30:00Z",
      status: "Active",
      severity: "Critical",
      type: "Domestic Violence",
      location: "Lagos",
      assignedTo: 2, // Case worker ID
      clientName: "Anonymous",
      clientContact: "+234XXXXXXXXXX",
      lastUpdated: "2023-05-17T14:20:00Z",
      notes: [
        {
          id: 1,
          date: "2023-05-15T14:45:00Z",
          author: "Case Worker",
          content: "Initial assessment completed. Client requires immediate safety planning and legal assistance.",
        },
        {
          id: 2,
          date: "2023-05-16T09:30:00Z",
          author: "Legal Advisor",
          content: "Restraining order application prepared. Court date scheduled for May 20.",
        },
        {
          id: 3,
          date: "2023-05-17T14:20:00Z",
          author: "Case Worker",
          content: "Client relocated to safe housing. Provided emergency funds for basic necessities.",
        },
      ],
      actions: [
        {
          id: 1,
          type: "Safety Plan",
          status: "Completed",
          dueDate: "2023-05-15T18:00:00Z",
          assignedTo: "Case Worker",
        },
        {
          id: 2,
          type: "Legal Documentation",
          status: "Completed",
          dueDate: "2023-05-16T17:00:00Z",
          assignedTo: "Legal Advisor",
        },
        {
          id: 3,
          type: "Court Appearance",
          status: "Pending",
          dueDate: "2023-05-20T09:00:00Z",
          assignedTo: "Legal Advisor",
        },
        {
          id: 4,
          type: "Follow-up Call",
          status: "Pending",
          dueDate: "2023-05-22T10:00:00Z",
          assignedTo: "Case Worker",
        },
      ],
    },
    // Other cases would be included here
  ]
  export const REPORTS = [
    {
      id: "GBV-123456",
      reportDate: "2023-05-15T10:30:00Z",
      reportType: "self",
      incidentType: "Domestic Violence",
      location: "Lagos",
      status: "Under Review",
      severity: "Critical",
      hasEvidence: true,
      hasWitnesses: true,
      immediateDanger: true,
      clientName: "Anonymous",
      clientContact: "+234XXXXXXXXXX",
      assignedTo: null,
    },
    {
      id: "GBV-234567",
      reportDate: "2023-05-10T15:45:00Z",
      reportType: "witness",
      incidentType: "Sexual Assault",
      location: "Abuja",
      status: "Assigned",
      severity: "Severe",
      hasEvidence: true,
      hasWitnesses: false,
      immediateDanger: false,
      clientName: "Protected Identity",
      clientContact: "email-protected@example.com",
      assignedTo: 2,
    },
    {
      id: "GBV-345678",
      reportDate: "2023-05-05T09:15:00Z",
      reportType: "self",
      incidentType: "Stalking",
      location: "Enugu",
      status: "Closed",
      severity: "Moderate",
      hasEvidence: true,
      hasWitnesses: false,
      immediateDanger: false,
      clientName: "Jane Doe",
      clientContact: "jane.doe@example.com",
      assignedTo: 1,
    },
    {
      id: "GBV-456789",
      reportDate: "2023-05-01T13:20:00Z",
      reportType: "anonymous",
      incidentType: "Human Trafficking",
      location: "Kano",
      status: "Assigned",
      severity: "Critical",
      hasEvidence: false,
      hasWitnesses: true,
      immediateDanger: true,
      clientName: "Anonymous",
      clientContact: null,
      assignedTo: 3,
    },
    {
      id: "GBV-567890",
      reportDate: "2023-04-28T11:10:00Z",
      reportType: "witness",
      incidentType: "Child Marriage",
      location: "Sokoto",
      status: "In Progress",
      severity: "Severe",
      hasEvidence: false,
      hasWitnesses: true,
      immediateDanger: true,
      clientName: "Protected Minor",
      clientContact: "Through Guardian",
      assignedTo: 2,
    },
  ]
  export const EMERGENCY_CONTACTS = {
    national: [
      {
        id: 1,
        name: "Nigeria Emergency (Police, Fire, Ambulance)",
        number: "112",
        category: "National Emergency",
      },
      {
        id: 2,
        name: "Nigeria Police Force",
        number: "199",
        category: "National Emergency",
      },
      {
        id: 3,
        name: "Federal Road Safety Corps",
        number: "122",
        category: "National Emergency",
      },
    ],
    gbvHotlines: [
      {
        id: 4,
        name: "National GBV Hotline",
        number: "0809-993-7318",
        category: "GBV Hotline",
      },
      {
        id: 5,
        name: "WARIF 24/7 Rape Crisis Centre",
        number: "0809-210-0009",
        category: "GBV Hotline",
      },
      {
        id: 6,
        name: "Mirabel Centre",
        number: "0809-060-1080",
        category: "GBV Hotline",
      },
    ],
    stateContacts: {
      lagos: [
        {
          id: 7,
          name: "Lagos State Emergency Services",
          number: "767",
          category: "State Emergency",
        },
        {
          id: 8,
          name: "Domestic & Sexual Violence Response Team",
          number: "0813-796-0048",
          category: "State Emergency",
        },
      ],
      abuja: [
        {
          id: 9,
          name: "FCT Emergency Management Agency",
          number: "112",
          category: "State Emergency",
        },
        {
          id: 10,
          name: "NAPTIP Human Trafficking Hotline",
          number: "0807-233-5374",
          category: "State Emergency",
        },
      ],
    },
    mentalHealth: [
      {
        id: 11,
        name: "Mental Health Foundation Nigeria",
        number: "0806-011-1157",
        category: "Mental Health",
      },
      {
        id: 12,
        name: "Suicide Prevention Hotline",
        number: "0806-210-6493",
        category: "Mental Health",
      },
    ],
  }
  export const RESOURCES = {
    safetyPlanning: [
      {
        id: 1,
        title: "Personal Safety Plan Template",
        type: "PDF",
        category: "Safety Planning",
        description: "A comprehensive template to help create your personal safety plan",
        fileUrl: "/resources/safety-plan-template.pdf",
        pages: 2,
      },
      {
        id: 2,
        title: "Safety Planning with Children",
        type: "PDF",
        category: "Safety Planning",
        description: "Guide for creating safety plans when children are involved",
        fileUrl: "/resources/safety-planning-children.pdf",
        pages: 3,
      },
      {
        id: 3,
        title: "Emergency Contact Card",
        type: "PDF",
        category: "Safety Planning",
        description: "Printable card to keep important emergency contacts with you",
        fileUrl: "/resources/emergency-contact-card.pdf",
        pages: 1,
      },
    ],
    legalResources: [
      {
        id: 4,
        title: "Protection Order Application Guide",
        type: "PDF",
        category: "Legal",
        description: "Step-by-step guide for applying for a protection order in Nigeria",
        fileUrl: "/resources/protection-order-guide.pdf",
        pages: 5,
      },
      {
        id: 5,
        title: "VAPP Act Summary",
        type: "PDF",
        category: "Legal",
        description: "Summary of the Violence Against Persons Prohibition Act",
        fileUrl: "/resources/vapp-act-summary.pdf",
        pages: 2,
      },
      {
        id: 6,
        title: "Evidence Documentation Log",
        type: "PDF",
        category: "Legal",
        description: "Template for documenting evidence of abuse for legal proceedings",
        fileUrl: "/resources/evidence-log.pdf",
        pages: 4,
      },
    ],
    supportHealing: [
      {
        id: 7,
        title: "Trauma Recovery Workbook",
        type: "PDF",
        category: "Support & Healing",
        description: "Exercises and information to support recovery from trauma",
        fileUrl: "/resources/trauma-recovery-workbook.pdf",
        pages: 15,
      },
      {
        id: 8,
        title: "Self-Care Guide for Survivors",
        type: "PDF",
        category: "Support & Healing",
        description: "Practical self-care strategies for survivors of gender-based violence",
        fileUrl: "/resources/self-care-guide.pdf",
        pages: 8,
      },
      {
        id: 9,
        title: "Healing Journal Template",
        type: "PDF",
        category: "Support & Healing",
        description: "Journal prompts and templates to support the healing journey",
        fileUrl: "/resources/healing-journal.pdf",
        pages: 10,
      },
    ],
    alliesSupport: [
      {
        id: 10,
        title: "How to Support a Survivor",
        type: "PDF",
        category: "Allies & Supporters",
        description: "Guide for friends and family on how to support survivors",
        fileUrl: "/resources/supporting-survivors.pdf",
        pages: 3,
      },
      {
        id: 11,
        title: "Bystander Intervention Guide",
        type: "PDF",
        category: "Allies & Supporters",
        description: "How to safely intervene when witnessing gender-based violence",
        fileUrl: "/resources/bystander-intervention.pdf",
        pages: 4,
      },
      {
        id: 12,
        title: "Community Response Toolkit",
        type: "PDF",
        category: "Allies & Supporters",
        description: "Resources for communities to respond to gender-based violence",
        fileUrl: "/resources/community-toolkit.pdf",
        pages: 12,
      },
    ],
  }

  export const ADMIN_USERS = [
    {
      id: 1,
      email: "admin@safehaven.org",
      // In a real app, this would be a hashed password
      password: "SafeHaven2023!",
      role: "admin",
      name: "Admin User",
    },
    {
      id: 2,
      email: "caseworker@safehaven.org",
      password: "Caseworker2023!",
      role: "caseworker",
      name: "Case Worker",
    },
    {
      id: 3,
      email: "supervisor@safehaven.org",
      password: "Supervisor2023!",
      role: "supervisor",
      name: "Supervisor",
    },
  ]