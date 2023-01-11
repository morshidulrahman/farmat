import React from "react";

const Quantity = ({ quantity, decreaseQuantity, increaseQuantity }) => {
  return (
    <div className="flex border ">
      <button
        className="w-10 bg-[#F5F5F5] flex items-center justify-center p-1"
        onClick={decreaseQuantity}
      >
        -
      </button>
      <div className="w-20 md:w-10 flex items-center justify-center">
        {quantity || 1}
      </div>
      <button
        className="w-10 bg-[#F5F5F5] flex items-center justify-center"
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
