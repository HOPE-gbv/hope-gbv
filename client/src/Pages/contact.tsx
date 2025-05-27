import { Card } from '@/components/ui/card.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Button } from '@/components/ui/button.tsx';
import {  Book, Camera, MessageCircleIcon, PhoneIcon } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      {/* Blue Header Section */}
      <div className="w-full bg-blue-100 py-20">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h1>
          <p className="text-gray-700 text-base max-w-2xl mx-auto">
            Whether you have questions, want to collaborate, or need assistance, we are here to listen.
            Reach out to us today, and let's work together to create lasting change in our communities.
          </p>
        </div>
      </div>

      {/* Cards Section - Floating */}
      <div className="w-full max-w-5xl px-12 mt-24 z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <Card className="bg-blue-100 p-6 shadow-xl rounded-lg">
          <h2 className="text-lg font-semibold text-blue-900 mb-4">Contact Information</h2>
          <p className="text-sm text-gray-700 mb-4">
            For any emergency, contact us via the following
          </p>
          <div className="space-y-7 text-sm space-x-1.5 text-gray-800">
            <div className="flex items-center gap-2">
              <PhoneIcon size={16}/> 08173774151
            </div>
            <div className="flex items-center gap-2">
              <MessageCircleIcon size={16} /> 08173774151
            </div>
            <div className="flex items-center gap-2">
              <Book size={16} />  hope foundation
            </div>
            <div className="flex items-center gap-2">
              <Camera size={16} /> hope foundation
            </div>
          </div>
        </Card>

        {/* Form */}
        <Card className="bg-white p-12 shadow-xl rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Send us a message</h2>
          <form className="space-y-5">
            <div>
              <Label htmlFor="name" className="text-sm mb-1">Name</Label>
              <Input id="name" type="text" placeholder="Emmanuel Favour" className="text-sm" />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm mb-1">Email</Label>
              <Input id="email" type="email" placeholder="emmanuelfavour275@gmail.com" className="text-sm" />
            </div>
            <div>
              <Label htmlFor="message" className="text-sm mb-1">Message</Label>
              <textarea
                id="message"
                rows={4}
                placeholder="Type your message here..."
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md">
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
