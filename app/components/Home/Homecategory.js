import React from "react";
import Categorycard from "../shared/Categorycard";

import SectionHeading from "../shared/SectionHeading";

const CATEGORY = [
  {
    category: "Fruits & Vegetables",
    img: "/images/category/homepage-new-cat-1.webp",
  },
  {
    category: "Breads Sweets",
    img: "/images/category/homepage-new-cat-2.webp",
  },
  {
    category: "Frozen Seafoods",
    img: "/images/category/homepage-new-cat-3.webp",
  },
  {
    category: "Raw Meats",
    img: "/images/category/homepage-new-cat-4.webp",
  },
  {
    category: "Wines & Alcohol Drinks",
    img: "/images/category/homepage-new-cat-5.webp",
  },
  {
    category: "Coffees and Teas",
    img: "/images/category/homepage-new-cat-6.webp",
  },
  {
    category: "Milks and Dairies",
    img: "/images/category/homepage-new-cat-7.webp",
  },
  {
    category: "Pet Foods",
    img: "/images/category/homepage-new-cat-8.webp",
  },
  {
    category: "Food Cupboard",
    img: "/images/category/homepage-new-cat-8.webp",
  },
];

function Homecategory() {
  return (
    <section className="pt-16 pb-5">
      <div className="container">
        <SectionHeading title="Browse by Category" text="All Categories" />
        {/* category items */}
        <div className="flex items-center gap-5 mt-10 overflow-x-auto no-scrollbar pb-5 w-full">
          {CATEGORY.map((item, index) => (
            <Categorycard {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Homecategory;
