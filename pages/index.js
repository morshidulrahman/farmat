import React from 'react'
import Homecategory from '../app/components/Home/Homecategory'
import Homehero from '../app/components/Home/Homehero'
import FeatureBrands from '../app/components/Home/FeatureBrands'
import TodaysDeal from '../app/components/Home/TodaysDeal'
function index() {
  return (
    <>
      <Homehero />
      <Homecategory />
      <FeatureBrands />
      <TodaysDeal />
    </>
  )
}

export default index