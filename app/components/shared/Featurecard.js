import React from "react";
import Image from "next/image";
function Featurecard({ category, title, img }) {
  return (
    <>
      <div className="min-w-[340px] rounded-md overflow-hidden cursor-pointer">
        <Image
          src={img}
          alt="brand"
          className="object-contain"
          width={340}
          height={218}
          objectFit="cover"
        />
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
