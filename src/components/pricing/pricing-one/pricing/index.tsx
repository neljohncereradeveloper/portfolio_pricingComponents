import React from "react";
import classnames from "classnames";

type Props = {
  title: string;
  size: "base" | "large";
  price: string;
  storage: string;
  user: string;
  send: string;
};

const Pricing = ({ title, size, price, storage, user, send }: Props) => {
  return (
    <div
      className={classnames(
        "flex flex-col w-64 rounded-lg shadow-lg justify-start items-center",
        "my-auto",
        {
          "h-80": size === "base",
          "py-2": size === "base",
          "bg-white": size === "base",
          "h-96": size === "large",
          "pt-10": size === "large",
          "bg-blue-500": size === "large",
          "text-white": size === "large",
        }
      )}
    >
      <h4 className="font-medium text-sm">{title}</h4>
      <h3 className="font-bold text-xl my-4">{price}</h3>
      <div className="w-full px-2 divide-y divide-gray-200">
        <p className="text-center py-2">{storage} GB Storage</p>
        <p className="text-center py-2">{user} Users</p>
        <p className="text-center py-2">Send {send} GB</p>
      </div>
      <button
        className={classnames(
          "w-10/12 py-2 mt-4 mx-2",
          "text-white font-medium text-xs leading-tight uppercase rounded",
          "shadow-md hover:bg-blue-700 hover:shadow-lg",
          "focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800",
          "active:shadow-lg transition duration-150 ease-in-out",
          {
            "text-white": size === "base",
            "bg-blue-500": size === "base",
            "text-blue-500": size === "large",
            "bg-white": size === "large",
            "hover:text-white": size === "large",
          }
        )}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Pricing;
