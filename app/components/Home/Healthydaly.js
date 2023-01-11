import React from "react";
import SectionHeading from "../shared/SectionHeading";
import { HEALTHY } from "../data/product";
import Blogcard from "./Blogcard";
import { setBackgroundImage } from "../../utils/helper";
import Image from "next/image";
function Healthydaly() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-wrap gap-6">
          <div className="flex-1">
            <SectionHeading title="Health Daily" text="All offers" nobutton />
            <div className="border bg-white border-gray-100 rounded-lg mt-8 flex items-center md:flex-nowrap flex-wrap">
              {HEALTHY.map((item, index) => (
                <Blogcard {...item} key={index} />
              ))}
            </div>
          </div>
          <div className="lg:w-[32%] w-full h-[547px]">
            <div
              className="mb-5 h-full w-full md:py-14 md:px-12 py-10 px-6 rounded-lg"
              style={setBackgroundImage(
                "https://demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-content-bg-2.png",
                {
                  backgroundPosition: "bottom center",
                  backgroundColor: "#e4eaee",
                  backgroundSize: "unset",
                }
              )}
            >
              <div className="flex flex-col text-center">
                <h2 className="md:text-4xl text-3xl font-bold text-title">
                  Shop faster
                  <br />
                  with Farmart App
                </h2>
                <span className="text-color text-base font-semibold md:mt-4 mt-3">
                  Available on both iOS & Android
                </span>
                <img
                  src="https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/app-while-img.png"
                  alt=""
                  loading="lazy"
                  className="object-contain w-64 mx-auto mt-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Healthydaly;
