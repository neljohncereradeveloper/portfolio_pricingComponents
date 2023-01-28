import React from "react";
import classnames from "classnames";

type Props = {
  title: string;
  price: string;
  premium?: boolean;
  superr?: boolean;
  ultimate?: boolean;
};

const Pricing = ({
  title,
  price,
  premium = false,
  superr = false,
  ultimate = false,
}: Props) => {
  return (
    <div
      className={classnames("flex flex-col w-72 rounded-lg shadow-lg", {
        "border-4 border-pink-500": premium === true && ultimate === false,
        "border-2 border-gray-100": premium === false,
      })}
    >
      <div className="overflow-hidden relative bg-gray-50 relative h-20 flex flex-col justify-center items-center shadow-lg">
        {premium && ultimate === false && (
          <div
            className={classnames(
              "bg-blue-500 py-2 text-white text-center w-[150px] absolute",
              "top-[74px] -left-[38px] origin-top-left -rotate-45"
            )}
          >
            Best Sales
          </div>
        )}
        <h3 className="tracking-[0.1rem] font-bold text-lg uppercase">
          {title}
        </h3>
      </div>
      <div className="bg-white flex-1 flex flex-col justify-start items-center">
        <div className="flex p-10">
          <span className="text-5xl font-bold tracking-[0.1rem]">${price}</span>
          <span className="text-xl font-normal text-sm tracking-[0.2rem] ml-3">
            Per Month
          </span>
        </div>
        <div className="divide-y divide-gray-100 bg-gray-50 w-full flex flex-col py-8 px-4">
          <div className="h-10 w-full flex flex-col justify-center items-center">
            <span className="font-normal text-base opacity-75">
              Unlimited Templates
            </span>
          </div>
          <div className="h-10 w-full flex flex-col justify-center items-center">
            <span className="font-normal text-base opacity-75">
              Responsive / Mobile Friendly
            </span>
          </div>
          <div className="h-10 w-full flex flex-col justify-center items-center">
            <span
              className={classnames("font-normal text-base", {
                "opacity-75": superr === true,
                "opacity-20": superr === false,
              })}
            >
              Unlimited Training
            </span>
          </div>
          <div className="h-10 w-full flex flex-col justify-center items-center">
            <span
              className={classnames("font-normal text-base", {
                "opacity-75": premium === true,
                "opacity-20": premium === false,
              })}
            >
              Custom Branding
            </span>
          </div>
          <div className="h-10 w-full flex flex-col justify-center items-center">
            <span
              className={classnames("font-normal text-base", {
                "opacity-75": ultimate === true,
                "opacity-20": ultimate === false,
              })}
            >
              Resource Library
            </span>
          </div>
          <div className="h-10 w-full flex flex-col justify-center items-center">
            <span
              className={classnames("font-normal text-base", {
                "opacity-75": ultimate === true,
                "opacity-20": ultimate === false,
              })}
            >
              Dedicated Support
            </span>
          </div>
          <button
            className={classnames(
              "text-white py-4 mt-2",
              "text-white font-medium text-xs leading-tight uppercase rounded",
              "shadow-md hover:shadow-lg",
              "focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800",
              "active:shadow-lg transition duration-150 ease-in-out",
              {
                "bg-pink-500 hover:bg-pink-900":
                  premium === true && ultimate === false,
                "bg-blue-500 hover:bg-blue-900":
                  premium === false ||
                  (premium === true && ultimate === true && superr === true),
              }
            )}
          >
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
