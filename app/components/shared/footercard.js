import React from "react";

function Footercard({ image, title, desc }) {
  return (
    <>
      <div className="flex gap-4 pb-5">
        <img src={image} alt="ee" className="w-8 h-8 object-contain" />
        <div className="flex flex-col">
          <h3 className="text-title font-bold">{title}</h3>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </>
  );
}

export default Footercard;
