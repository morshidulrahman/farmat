import React from 'react'
import Homecategory from '../app/components/Home/Homecategory'
import Homehero from '../app/components/Home/Homehero'
import FeatureBrands from '../app/components/Home/FeatureBrands'
import TodaysDeal from '../app/components/Home/TodaysDeal'
import Homeposter from '../app/components/Home/Homeposter'
import EssentialProduct from '../app/components/Home/Essentialproduct'
import Healthydaly from '../app/components/Home/Healthydaly'
import { setBackgroundImage, getPage, getPageServer } from '../app/utils/helper'
import Admin from '../app/admin'
function index({ page }) {
  if (page === 'admin') return <Admin />
  return (
    <>
      <Homehero />
      <Homecategory />
      <FeatureBrands />
      <TodaysDeal />
      <Homeposter />
      <div className="py-5" style={setBackgroundImage('https://demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-content-bg-scaled.jpg', { backgroundPosition: 'bottom center', backgroundColor: '#f3f3f3', backgroundSize: 'cover' })}>
        <EssentialProduct />
        <Healthydaly />
      </div>
    </>
  )
}

export default index

export async function getServerSideProps(context) {
  let page
  const { req } = context;
  if (req) {
    let host = req.headers.host
    page = getPageServer(host) || null
  }

  return {
    props: {
      page: page
    },
  }
}