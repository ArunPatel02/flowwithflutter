import React from "react";
import Tick from "../../asserts/tick.svg";

const PricingCard = ({
  heading,
  subheading,
  price,
  points,
  isPopular = false,
}) => {
  return (
    <div
      style={
        isPopular
          ? {
              padding: "5px",
              backgroundImage:
                "linear-gradient(90deg,#e19dfa,#ff9344 40%,#5470ff 92%)",
                borderRadius : "1.75rem"
            }
          : {}
      }
    >
      <div className="p-6 lg:p-8 text-[#26282f] font-[Merriweather,serif] bg-[#efeff4] rounded-[1.5rem] h-fit pb-5 lg:pb-10">
        {isPopular ? (
          <div className="flex justify-end">
            <span
              className="text-white px-4 py-1 text-[.875rem] font-semibold font-[Manrope,sans-serif] rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(45deg,#5470ff,#e19dfa 69%,#ffa05b)",
              }}
            >
              MOST POPULAR
            </span>
          </div>
        ) : null}
        <h2 className="text-[1.65rem] leading-normal font-bold">{heading}</h2>
        <p className="text-[.87rem] font-medium leading-normal">{subheading}</p>
        <div className="mt-6 font-[Manrope,sans-serif]">
          <span className="text-[2.5rem] font-bold leading-normal">
            ${price}
          </span>
          <span className="text-[1.25rem] font-normal leading-normal">
            {" "}
            / hour
          </span>
        </div>
        <ul className="text-[#575b61] text-[.95rem] font-['Varela Round',sans-serif] mt-6 flex flex-col gap-4">
          {points.length
            ? points.map((item , i) => (
                <li key={i} className="flex gap-3 items-center">
                  <Tick viewBox="0 0 20 20" className="w-5 h-5" />
                  <span className="text-[0.95rem]">{item}</span>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
