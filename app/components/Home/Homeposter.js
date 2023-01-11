import React from "react";
import { setBackgroundImage } from "../../utils/helper";
function Homeposter() {
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex flex-wrap justify-between gap-4">
          <div
            className="w-full md:w-[32%] px-10 py-10 md:px-12 md:py-14 rounded-lg"
            style={setBackgroundImage("/images/banner-2.png", {
              backgroundPosition: "center center",
              backgroundColor: "#FAC250",
              backgroundSize: "cover",
            })}
          >
            <div className="flex flex-col justify-between">
              <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-title">
                Mango Juice
                <br />
                Bottle
              </h2>
              <a
                href="/"
                className="text-color text-lg font-semibold md:mt-8 mt-6"
              >
                20% off for new customer
              </a>
            </div>
          </div>

          <div
            className="w-full md:w-[32%] px-10 py-10 md:px-12 md:py-14 rounded-lg"
            style={setBackgroundImage("/images/banner-3.png", {
              backgroundPosition: "bottom",
              backgroundColor: "#D5DEE5",
              backgroundSize: "unset",
            })}
          >
            <div className="flex flex-col justify-between">
              <div className="flex space-x-3 relative">
                <span className="text-orange text-3xl font-bold">$14,5</span>
                <span className="line-through font-bold mt-3">$39.6</span>
              </div>
              <h2 className="md:text-xl sm:text-lg text-base font-extrabold text-black mt-4 uppercase">
                Meat pork <br />
                CANNED
              </h2>
              <span className="text-gray-500 text-lg font-semibold md:mt-8 mt-6">
                250g
              </span>
            </div>
          </div>

          <div
            className="w-full md:w-[32%] px-10 py-10 md:px-12 md:py-14 rounded-lg"
            style={setBackgroundImage("/images/banner-4.png", {
              backgroundPosition: "center center",
              backgroundColor: "#FEAC7D",
              backgroundSize: "cover",
            })}
          >
            <div className="flex flex-col justify-between">
              <div className="">
                <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-white">
                  Olive oil
                </h2>
                <p className="text-white md:mt-7 mt-4 font-bold">
                  Best product to make <br />
                  your favor
                </p>
              </div>
              <span className="text-white text-lg font-semibold md:mt-8 mt-6">
                ONLY
              </span>
              <span className="text-white text-3xl font-bold">$14.5</span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Homeposter;
