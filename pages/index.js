import React from 'react'
import Homecategory from '../app/components/Home/Homecategory'
import Homehero from '../app/components/Home/Homehero'
import FeatureBrands from '../app/components/Home/FeatureBrands'
import TodaysDeal from '../app/components/Home/TodaysDeal'
import Homeposter from '../app/components/Home/Homeposter'
import EssentialProduct from '../app/components/Home/Essentialproduct'
function index() {
  return (
    <>
      <Homehero />
      <Homecategory />
      <FeatureBrands />
      <TodaysDeal />
      <Homeposter />
      <EssentialProduct />
    </>
  )
}

export default index