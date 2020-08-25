import React from "react"
import "./Home.css"
import HomePageCards from "../../components/HomePageCards/HomePageCards"
import HeaderImage from "../../components/HeaderImage/HeaderImage"
import HomePageLargeSection from "../../components/HomePageLargeSection/HomePageLargeSection"
import HorizaontalAnimalPictureSection from "../../components/HorizontalAnimcalPictureSection/HorizontalAnimcalPictureSection"

const Home = () => {
  return (
    <div>
      <HeaderImage />
      <HomePageLargeSection />
      <HomePageCards />
      <HorizaontalAnimalPictureSection />
    </div>
  )
}

export default Home
