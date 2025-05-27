import React, { useState } from 'react';
// import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// Assuming Textarea exists in ui components, if not, will use a standard textarea
// import { Textarea } from '@/components/ui/textarea'; 

const EyeWitnessPage: React.FC = () => {
  const [typeOfIncident, setTypeOfIncident] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [briefDescription, setBriefDescription] = useState('');
  const [knowPerpetrator, setKnowPerpetrator] = useState('');
  const [supportAfterSubmitting, setSupportAfterSubmitting] = useState('');
  const [contactDetails, setContactDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      typeOfIncident,
      date,
      location,
      briefDescription,
      knowPerpetrator,
      supportAfterSubmitting,
      contactDetails,
    });
    // Here you would typically send this data to a backend API
    alert('Report submitted! (This is a placeholder action)');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-grow">
        {/* Banner Section */}
        <section className="relative text-white py-20 px-4 text-center  ">
        <div className=" ] mx-auto flex justify-center items-center mb-8">  
      <img
              src="/assets/image 9.png"
              className="w-400 h-100 object-cover justify-center"
              alt="Photo of a dimly lit room with a computer interface terminal."
            />
      </div>
          {/* <div className="relative z-10 max-w-3xl mx-auto">
            
          </div> */}
        </section>

        {/* Introduction */}
        <section className="py-12 px-4 max-w-5xl mx-auto">
          <p className="mb-4">
            If you know someone who is experiencing gender-based violence, you can report it here anonymously. Reporting can help prevent further harm, connect survivors to resources and bring perpetrators to justice. Your safety and privacy are our top priorities as no personal information of you will be required and IP address won't be traced.
          </p>
          <p className="mb-8">
            After submission, you can choose to follow up on the matter anonymously or provide limited contact for security purpose
          </p>

          <h2 className="text-2xl font-bold mb-6">Please, fill the form below to anonymously report a GBV case</h2>

          {/* Report Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Type of incident */}
            <div>
              <Label htmlFor="typeOfIncident">Type of incident</Label>
              <Select value={typeOfIncident} onValueChange={setTypeOfIncident}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select incident type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="physical">Physical Abuse</SelectItem>
                  <SelectItem value="sexual">Sexual Abuse</SelectItem>
                  <SelectItem value="emotional">Emotional Abuse</SelectItem>
                  <SelectItem value="financial">Financial Abuse</SelectItem>
                  <SelectItem value="neglect">Neglect</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Do you know the perpetrator */}
            <div>
              <Label htmlFor="knowPerpetrator">Do you know the perpetrator</Label>
              <Select value={knowPerpetrator} onValueChange={setKnowPerpetrator}>
                <SelectTrigger className="w-full">
                  <SelectValue className='placeholder:text-gray-400' placeholder="Yes or no" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date */}
            <div>
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            {/* Would you like to support after submitting */}
            <div>
              <Label htmlFor="supportAfterSubmitting">Would you like to support after submitting</Label>
              <Select value={supportAfterSubmitting} onValueChange={setSupportAfterSubmitting}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Yes or no" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location of the incident */}
            <div>
              <Label htmlFor="location">Location of the incident</Label>
              <Input id="location" type="text" placeholder="No.3 Ademola street, Ikeja, Lagos" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>

            <div>
              <Label htmlFor="contactDetails">If yes, provide contact details and time to reach you</Label>
              <Input id="contactDetails" type="text" value={contactDetails} onChange={(e) => setContactDetails(e.target.value)} />
            </div>

            {/* Brief description of the incident */}
            <div >
              <Label htmlFor="briefDescription" className='mb-2'>Brief description of the incident</Label>
              {/* Using a standard textarea for now, will replace if Textarea component exists */}
              <textarea
                id="briefDescription"
                className="flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={briefDescription}
                onChange={(e) => setBriefDescription(e.target.value)}
              ></textarea>
            </div>

            {/* Attach any evidence (optional) */}
            <div>
              <Label htmlFor="evidence" className='mb-2'>attach any evidence ( optional )</Label>
              <div className="flex items-center justify-center h-20 w-full rounded-md border border-input bg-background cursor-pointer">
                {/* Placeholder for file upload icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image text-muted-foreground"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              </div>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Submit</Button>
            </div>
          </form>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default EyeWitnessPage;
