import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AnimatedArrow from "@/animatedArrows/AnimatedArrow";
import Link from "next/link";

interface PricingPlan {
  id: string;
  title: string;
  price: string;
  period: string;
  features: string[];
}

const pricingData: PricingPlan[] = [
  {
    id: "monthly",
    title: "Monthly Plan",
    price: "$75.00",
    period: "/month",
    features: [
      "Top exposure",
      "Featured flag",
      "Analytics",
      "Profile View",
      "Show Avg. Rating",
    ],
  },
  {
    id: "yearly",
    title: "Yearly Plan",
    price: "$475.00",
    period: "/year",
    features: [
      "Top exposure",
      "Featured flag",
      "Analytics",
      "Profile View",
      "Show Avg. Rating",
    ],
  },
];

export function ManageSubs() {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {pricingData.map((plan) => (
        <Card key={plan.id} className="overflow-hidden bg-white shadow-sm">
          {/* Header with gradient background */}
          <div className="  text-center py-6 px-6">
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <div className="text-2xl font-bold bg-gradient-to-r from-main-color to-purple-600 text-white py-4 rounded-lg">
              {plan.price}
              <span className="text-sm font-normal opacity-90">
                {plan.period}
              </span>
            </div>
          </div>

          {/* Features list */}
          <div className="p-6 space-y-4">
            {plan.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="size-4 text-white" color="#FF8818" />

                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Edit button */}
          <div className="px-6 pb-6">
            <Link href={"/manage-subs/edit-subs"}>
              <Button
                variant="outline"
                className="w-full justify-center gap-2 border-[#003250] text-[#003250] hover:bg-gray-50 bg-transparent group"
              >
                EDIT
                <AnimatedArrow />
              </Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
