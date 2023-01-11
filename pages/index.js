import React from "react";
import {
  Essentialproduct,
  FeatureBrands,
  Homecategory,
  Homehero,
  Homeposter,
  TodaysDeal,
} from "../app/components/Home";
import {
  setBackgroundImage,
  getPage,
  getPageServer,
} from "../app/utils/helper";
import Admin from "../app/admin";
function index({ page }) {
  if (page === "admin") return <Admin />;
  return (
    <>
      <Homehero />
      <Homecategory />
      <FeatureBrands />
      <TodaysDeal />
      <Homeposter />
      <div
        className="py-5"
        style={setBackgroundImage(
          "https://demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-content-bg-scaled.jpg",
          {
            backgroundPosition: "bottom center",
            backgroundColor: "#f3f3f3",
            backgroundSize: "cover",
          }
        )}
      >
        <Essentialproduct />
        <Healthydaly />
      </div>
    </>
  );
}

export default index;

export async function getServerSideProps(context) {
  let page;
  const { req } = context;
  if (req) {
    let host = req.headers.host;
    page = getPageServer(host) || null;
  }

  return {
    props: {
      page: page,
    },
  };
}
