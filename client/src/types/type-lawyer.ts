type Testimonial = {
    text: string;
    author: string;
}
type Document = {
    name: string;
    type: string;
    description: string;
}
type AvailabilitySlot = {   
    date: string;
    slot: string[]
}

export type LawyerProfile = {
    id: number;
    name: string;
    photo: string;
    location: string;
    specializations: string[];
    rating: number;
    reviews: number;
    verified: boolean;
    active: boolean;
    barNumber: string;
    experience: number;
    languages: string[];
    availability: string;
    successRate: string; 
    bio: string;
    caseCount: number;
    education: string;
    contactHours: string;
    testimonials: Testimonial[];
    expertise: string[];
    documents: Document[];
    availabilityCalendar: AvailabilitySlot[];
  };