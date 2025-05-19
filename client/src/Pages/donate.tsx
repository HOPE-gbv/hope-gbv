import React, { useState } from "react";
// import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
import DonationForm from "@/components/custom/donation-form";
// import ImpactSection from "./";
// import TestimonialsSection from "./TestimonialsSection";
import { Heart } from "lucide-react";

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationFrequency] = useState<"once" | "monthly">("once");
  
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
<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
  <Card className="w-full max-w-md shadow-lg border-0 overflow-hidden">
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 text-white">
      <div className="flex items-center">
        <Heart className="mr-2" fill="white" />
        <h2 className="text-2xl font-semibold">Donate Now</h2>
      </div>
      <p className="mt-2 text-white/90">Join others in supporting our cause</p>
    </div>
    
    <CardContent className="pt-6">
      {/* <Tabs defaultValue="once" className="mb-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="once" onClick={() => setDonationFrequency("once")}>
            One-time
          </TabsTrigger>
          <TabsTrigger value="monthly" onClick={() => setDonationFrequency("monthly")}>
            Monthly
          </TabsTrigger>
        </TabsList>
      </Tabs> */}

      <div className="mb-6">
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
            className="w-full border rounded-lg py-3 pl-8 pr-4 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <DonationForm amount={donationAmount} frequency={donationFrequency} />
    </CardContent>
  </Card>
</div>

  );
};

export default DonationPage;
