import React from "react";
import classnames from "classnames";

type Props = {
  title?: string;
  price?: string;
  feature?: boolean;
  plus?: boolean;
  basic?: boolean;
};

const Pricing = ({
  title,
  price,
  feature = false,
  plus = false,
  basic,
}: Props) => {
  return (
    <div
      className={classnames("flex flex-col", {
        "flex-1 bg-gray-200": feature === false,
        "w-[450px] bg-gray-50": feature === true,
        "border-[5px] border-blue-500": feature === false && plus === true,
      })}
    >
      <div
        className={classnames(
          "relative w-full h-48 flex flex-col justify-center items-center",
          {
            "border-[1px] border-r-gray-300 border-t-gray-300":
              feature === false && plus === false,
            "border-none": feature === true,
          }
        )}
      >
        <h3 className="tracking-[0.1rem] text-blue-500 font-bold text-3xl uppercase">
          {title}
        </h3>
        <div className="tracking-[0.1rem] font-normal text-xl">{price}</div>
        {plus && (
          <div
            className="absolute top-[135px] bg-red-600 text-white py-2 px-5 w-[310px] z-10 
          shadow-lg shadow-red-900"
          >
            {/* triangle */}
            <div
              className="absolute left-0 top-[39px] w-0 h-0 border-solid border-transparent border-l-[5px] 
        border-r-[5px] border-b-[5px] border-b-red-800 rotate-45"
            ></div>
            <p className="text-center">Our Most valuable package</p>
            <div
              className="absolute right-0 top-[39px] w-0 h-0 border-solid border-transparent border-l-[5px] 
        border-r-[5px] border-b-[5px] border-b-red-800 -rotate-45"
            ></div>
          </div>
        )}
      </div>
      {/* 1 */}
      {feature ? (
        <div
          className="h-24 flex flex-col px-4 py-2
        justify-center items-start 
         bg-white border-[1px] border-r-gray-300 border-t-gray-300"
        >
          <h3 className="font-semibold text-base">
            Feature &apos;Fermentum Leo&apos;
          </h3>
          <p className="text-justify font-normal text-sm">
            Diam ut venenatis tellus in metus vulputate eu scelerisque felis
            imperdiet proin fermentum leo vel orci.
          </p>
        </div>
      ) : (
        <div className="h-24 grid place-items-center bg-white border-[1px] border-r-gray-300 border-t-gray-300">
          <p className="text-center">Lorem ipsum dolor sit amet</p>
        </div>
      )}
      {/* 2 */}
      {feature ? (
        <div
          className="h-24 flex flex-col px-4 py-2
        justify-center items-start 
         bg-gray-100 border-[1px] border-r-gray-300 border-t-gray-300"
        >
          <h3 className="font-semibold text-base">
            Feature &apos;Sagittis Purus&apos;
          </h3>
          <p className="text-justify font-normal text-sm">
            Platea dictumst quisque sagittis purus sit amet volutpat consequat
            mauris nunc congue nisi vitae suscipit tellus.
          </p>
        </div>
      ) : (
        <div className="h-24 grid place-items-center bg-gray-100 border-[1px] border-r-gray-300 border-t-gray-300">
          <p className="text-center">Lorem ipsum dolor sit amet</p>
        </div>
      )}
      {/* 3 */}
      {feature ? (
        <div
          className="h-24 flex flex-col px-4 py-2
        justify-center items-start 
         bg-white border-[1px] border-r-gray-300 border-t-gray-300"
        >
          <h3 className="font-semibold text-base">
            Feature &apos;Mattis Enim&apos;
          </h3>
          <p className="text-justify font-normal text-sm">
            Blandit massa enim nec dui nunc mattis enim ut tellus elementum
            sagittis vitae et leo duis.
          </p>
        </div>
      ) : (
        <div className="h-24 grid place-items-center bg-white border-[1px] border-r-gray-300 border-t-gray-300">
          <p className="text-center">
            {basic ? (
              <b>-</b>
            ) : plus ? (
              "Lorem ipsum dolor sit amet"
            ) : (
              "Lorem ipsum dolor sit amet"
            )}
          </p>
        </div>
      )}
      {/* 4 */}
      {feature ? (
        <div
          className="h-24 flex flex-col px-4 py-2
        justify-center items-start 
         bg-gray-100 border-[1px] border-r-gray-300 border-t-gray-300"
        >
          <h3 className="font-semibold text-base">
            Feature &apos;Egestas Erat&apos;
          </h3>
          <p className="text-justify font-normal text-sm">
            Ut ornare lectus sit amet est placerat in egestas erat imperdiet sed
            euismod nisi porta lorem.
          </p>
        </div>
      ) : (
        <div className="h-24 grid place-items-center bg-gray-100 border-[1px] border-r-gray-300 border-t-gray-300">
          <p className="text-center">
            {basic || plus ? <b>-</b> : "Lorem ipsum dolor sit amet"}
          </p>
        </div>
      )}
      {/* 5 */}
      {feature ? (
        <div
          className="h-24 flex flex-col px-4 py-2
        justify-center items-start 
         bg-white border-[1px] border-r-gray-300 border-t-gray-300"
        >
          <h3 className="font-semibold text-base">
            Feature &apos;Elementum Integer&apos;
          </h3>
          <p className="text-justify font-normal text-sm">
            Consectetur purus ut faucibus pulvinar elementum integer enim neque
            volutpat ac tincidunt vitae semper quis lectus.
          </p>
        </div>
      ) : (
        <div className="h-24 grid place-items-center bg-white border-[1px] border-r-gray-300 border-t-gray-300">
          <p className="text-center">
            {basic || plus ? <b>-</b> : "Lorem ipsum dolor sit amet"}
          </p>
        </div>
      )}

      {feature ? (
        <div
          className="h-24 flex flex-col px-4 py-2
        justify-center items-start 
         bg-gray-100 border-[1px] border-r-gray-300 border-t-gray-300"
        ></div>
      ) : (
        <div className="h-24 px-5 grid place-items-center bg-gray-100 border-[1px] border-r-gray-300 border-t-gray-300">
          <button
            className={classnames(
              "hover:bg-blue-900 text-white w-full py-4 mx-2",
              "text-white font-medium text-xs leading-tight uppercase rounded",
              "shadow-md hover:shadow-lg",
              "focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800",
              "active:shadow-lg transition duration-150 ease-in-out",
              {
                "bg-blue-500": plus === false,
                "bg-red-500": plus === true,
              }
            )}
          >
            Subscribe
          </button>
        </div>
      )}
    </div>
  );
};

export default Pricing;
