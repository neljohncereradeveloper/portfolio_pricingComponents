import React from "react";
import Pricing from "./pricing";

const PricingOne = () => {
  return (
    <div className="mb-12 p-4 bg-gray-50">
      <h3 className="text-xl font-normal tracking-wide">DESIGN 1</h3>
      <div className="flex flex-col justify-center items-center ">
        <h4 className="text-base font-medium mb-8">Our Pricing</h4>
        <div className="flex mb-8">
          <span className="text-sm font-semibold text-gray-400 dark:text-gray-400">
            Monthly
          </span>
          <label className="inline-flex relative items-center cursor-pointer mx-4">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              className="w-11 h-6 bg-blue-200 peer-focus:outline-none peer-focus:ring-4 
            peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer 
            dark:bg-blue-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
            after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
            after:border-blue-300 after:border after:rounded-full after:h-5 after:w-5 
            after:transition-all dark:border-blue-600 peer-checked:bg-blue-600"
            ></div>
          </label>
          <span className="text-sm font-semibold text-gray-400 dark:text-gray-400">
            Yearly
          </span>
        </div>

        <div className="flex space-x-4 h-96">
          <Pricing
            title="Basic"
            size="base"
            price="$100.00"
            storage="100"
            user="1"
            send="1"
          />
          <Pricing
            title="Professional"
            size="large"
            price="$200.00"
            storage="200"
            user="3"
            send="2"
          />
          <Pricing
            title="Enterprise"
            size="base"
            price="$300.00"
            storage="300"
            user="5"
            send="3"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingOne;
