import React from "react";
import SectionHeading from "../shared/SectionHeading";
import Featurecard from "../shared/Featurecard";

const OFFERS = [
  {
    category: "FOOD POUCH",
    title: "New Snacks Release",
    img: "/images/featured/homepage-new-brand-img-1.jpg",
  },
  {
    category: "itea jsc",
    title: "Happy Tea 100% Organic. From $29.9",
    img: "/images/featured/homepage-new-brand-img-2.jpg",
  },
  {
    category: "Soda BRand",
    title: "Soda Can Box 24 Pieces - 30% OFF",
    img: "/images/featured/homepage-new-brand-img-3.jpg",
  },
  {
    category: "sausage",
    title: "Fresh Meat Saugage. BUY 2 GET 1!",
    img: "/images/featured/homepage-new-brand-img-4.jpg",
  },
];

function FeatureBrands() {
  return (
    <section className="py-16">
      <div className="container">
        {/* heading */}
        <SectionHeading title="Featured Brands" text="All Offers" />
        {/* feature card */}
        <div className="flex items-center mt-10 gap-5 overflow-x-auto no-scrollbar">
          {OFFERS.map((item, index) => (
            <Featurecard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureBrands;
