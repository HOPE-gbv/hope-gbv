import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CreditCard } from "lucide-react";
import { usePaystackPayment } from "react-paystack";

type PaystackFormProps = {
  email: string;
  amount: number | null; // in Naira
  fullName: string;
  onSuccess: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const PaystackForm: React.FC<PaystackFormProps> = ({
  amount,
  email,
  fullName,
  onSuccess,
  loading,
  setLoading,
}) => {
  const publicKey = "pk_your_public_key_here"; // Replace with your real Paystack public key
  const reference = "donation_" + Math.floor(Math.random() * 1000000000 + 1)
  const initializePayment = usePaystackPayment({
    email,
    amount: amount !== null ? amount * 100 : 0, // in Kobo
    currency: "NGN",
    publicKey,
    reference: reference ,
    metadata: {
      custom_fields: [
        {
          display_name: "Donor Name",
          variable_name: "donor_name",
          value: fullName,
        },
      ],
    },
    // onSuccess: () => {
    //   setLoading(false);
    //   toast.success("Thank you for your donation!", {
    //     description: `Your donation of ₦${amount} has been received.`,
    //   });
    //   onSuccess();
    // },
    // onClose: () => {
    //   setLoading(false);
    //   toast.error("Donation cancelled", {
    //     description: "Your donation was cancelled.",
    //   });
    // },
  });

  const handlePayWithPaystack = () => {
    if (!amount || amount <= 0) {
      toast("Invalid amount", {
        description:
          "Please enter a valid amount to proceed with the donation",
      });
      return;
    }

    if (!email) {
      toast("Email is required", {
        description:
          "Please provide your email address to proceed with the donation",
      });
      return;
    }

    setLoading(true);
    setLoading(true);
    initializePayment({
      config: {
        email,
        amount: amount * 100, // in Kobo
        reference: reference,
        
        currency: "NGN",
        metadata: {
          custom_fields: [
            {
              display_name: "Donor Name",
              variable_name: "donor_name",
              value: fullName,
            },
          ],
        },
      },
      onSuccess: () => {
        setLoading(false);
        toast.success("Thank you for your donation!", {
          description: `Your donation of ₦${amount} has been received.`,
        });
        onSuccess();
      },
      onClose: () => {
        setLoading(false);
        toast.error("Donation cancelled", {
          description: "Your donation was cancelled.",
        });
      },
    });
    
      };
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium mb-4">Payment Method</h3>

      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md">
        <div className="flex items-center mb-2">
          <CreditCard className="mr-2 text-blue-600 h-5 w-5" />
          <h4 className="font-medium text-blue-700">
            Secure payment via Paystack
          </h4>
        </div>
        <p className="text-sm text-blue-700">
          Your payment information is secure and encrypted.
        </p>
      </div>

      <Button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
        disabled={loading}
        type="button"
        onClick={handlePayWithPaystack}
      >
        {loading ? "Processing..." : `Pay ₦${amount} with Paystack`}
      </Button>
    </div>
  );

};

export default PaystackForm;