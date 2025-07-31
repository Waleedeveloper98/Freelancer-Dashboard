import React from "react";

const StatCards = ({ card }) => {
  const { text, amount, bgColor, isCurrency, shadow } = card;
  return (
    <div
      className={`rounded-md ${bgColor} shadow ${shadow} text-black p-6 sm:px-4 w-80 h-36 sm:w-[43%] lg:w-[22%] flex justify-between`}
      style={{ boxShadow:`0 0 10px ${shadow}` }}
    >
      <div className="flex flex-col justify-between">
        <card.icon className="w-8 h-8" />
        <h3
          className="whitespace-nowrap sm:whitespace-normal lg:white
        sm:text-sm lg:text-xs"
        >
          {text}
        </h3>
      </div>
      <h3 className="text-2xl font-bold whitespace-nowrap lg:text-xl">
        {isCurrency
          ? new Intl.NumberFormat("en-PK", {
              style: "currency",
              currency: "PKR",
              maximumFractionDigits: 0,
            }).format(Number(amount || 0))
          : Number(amount || 0)}
      </h3>
    </div>
  );
};

export default StatCards;
