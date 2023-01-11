import React from "react";

function Featurecard({ category, title, img }) {
  return (
    <>
      <div className="min-w-[340px] rounded-md overflow-hidden cursor-pointer">
        <img src={img} alt="brand" className="object-contain" />
        <p className="text-color mb-1 uppercase font-bold text-sm">
          {category}
        </p>
        <p className="font-bold text-lg hover:text-primary duration-500 ease-in-out">
          {title}
        </p>
      </div>
    </>
  );
}

export default Featurecard;
