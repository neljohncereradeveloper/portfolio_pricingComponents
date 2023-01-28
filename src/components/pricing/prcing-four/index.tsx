import React from "react";
import Pricing from "./pricing";

const PricingFour = () => {
  return (
    <div className="mb-12 p-4 bg-gray-50">
      <h3 className="text-xl font-normal tracking-wide mb-4">DESIGN 4</h3>
      <div className="flex flex-col justify-center items-center">
        <div className="flex w-full justify-center items-center">
          <Pricing feature />
          <Pricing title="Premium" price="$78.00" />
          <Pricing title="Plus" price="$57.00" plus />
          <Pricing title="Basic" price="$19.95" basic />
        </div>
      </div>
    </div>
  );
};

export default PricingFour;
