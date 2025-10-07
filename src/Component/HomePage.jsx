import React from 'react'
import HomeSection1 from './HomeSection1'
import HomeSection2 from './HomeSection2'
import HomeSection3 from './HomeSection3'
import HomeMainProductSection from './HomeMainProductSection'
import TopCategory from './TopCategory'
import TrendingItems from './TrendingItems'
import CosmeticsSalesSection from './CosmeticsSalesSection'
import HomeNewslaterSection from './HomeNewslaterSection'

const HomePage = () => {
  return (
    
    <>
    <HomeSection1/>
    <HomeSection2/>
    <HomeSection3/>
    <HomeMainProductSection/>
    <TopCategory/>
    <CosmeticsSalesSection/>
    <TrendingItems/>
    <HomeNewslaterSection/>
    </>
  )
}

export default HomePage
