import React from "react";
import Pricing from "./pricing";

const PricingThree = () => {
  return (
    <div className="mb-12 p-4 bg-gray-50">
      <h3 className="text-xl font-normal tracking-wide mb-4">DESIGN 3</h3>
      <div className="flex flex-col justify-center items-center">
        <div className="flex space-x-0 justify-center items-center">
          <Pricing title="Basic" price="17.00" />
          <Pricing title="Super" price="27.00" superr />
          <Pricing title="Premium" price="57.00" superr premium />
          <Pricing title="Ultimate" price="77.00" superr premium ultimate />
        </div>
      </div>
    </div>
  );
};

export default PricingThree;
