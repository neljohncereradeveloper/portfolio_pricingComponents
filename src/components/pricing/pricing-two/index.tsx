import React from "react";
import Pricing from "./pricing";

const PricingTwo = () => {
  return (
    <div className="mb-12 p-4 bg-gray-50">
      <h3 className="text-xl font-normal tracking-wide mb-4">DESIGN 2</h3>
      <div className="flex flex-col justify-center items-center">
        <div className="flex space-x-2 justify-center items-center">
          <Pricing
            title="BASIC"
            price="2"
            percent="w-1/12"
            status="begginer"
            arrowP="pl-4"
            statusML="-ml-4"
            height="h-[580px]"
            buttonTop="mt-6"
            bgColor="bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-900 hover:to-blue-900"
            p3Minus
            p4Minus
            percentOff="10"
            percentOffBG="bg-blue-700"
          />
          <Pricing
            title="STANDARD"
            price="8"
            percent="w-3/6"
            status="professional"
            arrowP="pl-[122px]"
            statusML="-ml-6"
            height="h-[630px]"
            buttonTop="mt-12"
            bgColor="bg-gradient-to-r from-pink-400 to-pink-700 hover:from-pink-900 hover:to-pink-900"
            p3Minus={false}
            p4Minus
            percentOff="50"
            percentOffBG="bg-pink-700"
          />
          <Pricing
            title="PREMIUM"
            price="15"
            percent="w-full"
            status="advance"
            arrowP="pl-[248px]"
            statusML="-ml-8"
            height="h-[580px]"
            buttonTop="mt-6"
            bgColor="bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-900 hover:to-blue-900"
            p3Minus={false}
            p4Minus={false}
            percentOff="20"
            percentOffBG="bg-blue-700"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingTwo;
