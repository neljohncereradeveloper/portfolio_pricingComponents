import React from "react";
import classnames from "classnames";
import { CheckIcon, MinusIcon } from "./icon";

type Props = {
  title: string;
  price: string;
  percent: string;
  status: string;
  statusML: string;
  arrowP: string;
  height: string;
  buttonTop: string;
  bgColor: string;
  p3Minus: boolean;
  p4Minus: boolean;
  percentOff: string;
  percentOffBG: string;
};

const Pricing = ({
  title,
  price,
  percent,
  status,
  statusML,
  arrowP,
  height,
  buttonTop,
  bgColor,
  p3Minus,
  p4Minus,
  percentOff,
  percentOffBG,
}: Props) => {
  return (
    <div
      className={classnames(
        "flex flex-col w-72 bg-white rounded-lg shadow-lg",
        height
      )}
    >
      <div className="overflow-hidden relative h-20 flex flex-col justify-center items-center shadow-lg">
        <div
          className={classnames(
            "py-2 text-white text-center w-[150px] absolute",
            "top-[70px] -left-[30px] origin-top-left -rotate-45",
            percentOffBG
          )}
        >
          {percentOff} % OFF
        </div>
        <h3 className="tracking-[0.2rem] font-black text-xl">{title}</h3>
        <h4 className="tracking-[0.1rem] font-semibold text-xs">PACKAGE</h4>
        <div
          className="absolute -bottom-[10px] w-0 h-0 border-solid border-transparent border-l-[10px] 
        border-r-[10px] border-t-[10px] border-t-white"
        ></div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center my-6 px-4">
        <div className="flex">
          <span className="text-6xl font-bold tracking-[0.1rem]">${price}</span>
          <div className="flex flex-col">
            <span className="text-4xl font-bold">.99</span>
            <span className="text-xl font-normal text-sm tracking-[0.2rem] ml-3">
              Per Month
            </span>
          </div>
        </div>

        {/* progress bar */}
        <div className="w-full bg-gray-200 h-1 mt-4 mb-1">
          <div className={classnames("h-1", percent, bgColor)}></div>
        </div>

        <div className={classnames("flex flex-col w-full", arrowP)}>
          {/* arrow up */}
          <div
            className="w-0 h-0 border-solid border-transparent border-l-[5px] 
        border-r-[5px] border-b-[5px] border-b-blue-500"
          ></div>
          <span
            className={classnames(
              "font-thin text-[10px] tracking-[0.1rem]",
              statusML
            )}
          >
            {status}
          </span>
        </div>
        <p className="text-xs font-semibold text-justify my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* icon */}
        <div className="flex justify-center items-center mb-1">
          <CheckIcon size="h-10 w-10" />
          <p className="text-[10px] font-light text-justify ml-2 tracking-[0.1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod
          </p>
        </div>
        <div className="flex justify-center items-center mb-1">
          <CheckIcon size="h-10 w-10" />
          <p className="text-[10px] font-light text-justify ml-2 tracking-[0.1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod
          </p>
        </div>
        <div className="flex justify-center items-center mb-1">
          {p3Minus ? (
            <MinusIcon size="h-10 w-10" />
          ) : (
            <CheckIcon size="h-10 w-10" />
          )}
          <p
            className={classnames(
              "text-[10px] font-light text-justify ml-2 tracking-[0.1rem]",
              { "line-through": p3Minus === true }
            )}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod
          </p>
        </div>
        <div className="flex justify-center items-center mb-1">
          {p4Minus ? (
            <MinusIcon size="h-10 w-10" />
          ) : (
            <CheckIcon size="h-10 w-10" />
          )}
          <p
            className={classnames(
              "text-[10px] font-light text-justify ml-2 tracking-[0.1rem]",
              { "line-through": p4Minus === true }
            )}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod
          </p>
        </div>
        <button
          className={classnames(
            "text-white w-full py-4 mx-2",
            "text-white font-medium text-xs leading-tight uppercase rounded",
            "shadow-md hover:shadow-lg",
            "focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800",
            "active:shadow-lg transition duration-150 ease-in-out",
            buttonTop,
            bgColor
          )}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Pricing;
