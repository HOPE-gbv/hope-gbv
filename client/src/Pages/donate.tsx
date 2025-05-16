import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import DonationForm from "@/components/custom/donation-form";
// import ImpactSection from "./";
// import TestimonialsSection from "./TestimonialsSection";
import { Heart, PiggyBank } from "lucide-react";

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationFrequency, setDonationFrequency] = useState<"once" | "monthly">("once");
  
  const handleAmountClick = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimal points
    if (value === "" || /^\d+(\.\d{0,2})?$/.test(value)) {
      setCustomAmount(value);
      setDonationAmount(value ? parseFloat(value) : null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b p-8 from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-600 hover:bg-blue-200 px-3 py-1 text-sm">Make a difference today</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Your Donation Changes Lives
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Help us continue our mission of making a positive impact in our community. 
            Every contribution, no matter the size, makes a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {/* Main donation form column */}
          <div className="md:col-span-3">
            <Card className="shadow-lg border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 text-white">
                <div className="flex items-center">
                  <Heart className="mr-2" fill="white" />
                  <h2 className="text-2xl font-semibold">Donate Now</h2>
                </div>
                <p className="mt-2 text-white/90">Join others in supporting our cause</p>
              </div>
              
              <CardContent className="pt-6">
                <Tabs defaultValue="once" className="mb-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger 
                      value="once" 
                      onClick={() => setDonationFrequency("once")}
                    >
                      One-time
                    </TabsTrigger>
                    <TabsTrigger 
                      value="monthly" 
                      onClick={() => setDonationFrequency("monthly")}
                    >
                      Monthly
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Select Amount (₦)</h3>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[2000, 5000, 10000].map((amount) => (
                      <button
                        key={amount}
                        className={`donation-amount-btn ${donationAmount === amount && customAmount === "" ? "active" : ""}`}
                        onClick={() => handleAmountClick(amount)}
                      >
                        ₦{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="relative mt-4">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₦</span>
                    <input 
                      type="text"
                      placeholder="Custom Amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="w-full border rounded-lg py-3 px-4 input-with-icon focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <DonationForm 
                  amount={donationAmount} 
                  frequency={donationFrequency} 
                />
              </CardContent>
            </Card>
          </div>
          
          {/* Impact column */}
          <div className="md:col-span-2">
            <Card className="shadow-md border-0 mb-6">
              <CardContent className="pt-6 pb-4">
                <div className="flex items-center mb-4">
                  <PiggyBank className="mr-2 text-blue-600" />
                  <h3 className="font-semibold text-lg">Fundraising Goal</h3>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span>₦2,450,000 raised</span>
                    <span className="text-blue-600">₦5,000,000 goal</span>
                  </div>
                  <div className="donation-progress">
                    <div className="donation-progress-inner" style={{ width: "49%" }}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  We're 49% of the way to our goal! Your donation helps us reach more people in need.
                </p>
                <div className="border-t pt-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">156 donors</span>
                    <span className="text-blue-600 font-medium">51 days left</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Donate buttons */}
            <Card className="shadow-md border-0 mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4">Quick Donate</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    ₦1,000 Once
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    ₦1,000 Monthly
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* <ImpactSection />
        <TestimonialsSection /> */}
      </div>
    </div>
  );
};

export default DonationPage;
