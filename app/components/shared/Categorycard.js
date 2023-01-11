import React from "react";
import Image from "next/image";
function Categorycard({ img, category }) {
  return (
    <>
      <div className="bg-[#f3f3f3] rounded-md min-w-[210px] h-60 flex justify-center items-center flex-col px-5 hover:bg-white hover:shadow-xl duration-500 ease-in-out  cursor-pointer text-center">
        <Image width={80} height={80} src={img} alt="webp" />
        <p className="font-bold mt-5 capitalize">{category}</p>
      </div>
    </>
  );
}

export default Categorycard;
