import React from "react"
import "./Home.css"
import HomePageCards from "../../components/HomePageCards/HomePageCards"
import HeaderImage from "../../components/HeaderImage/HeaderImage"
import HomePageLargeSection from "../../components/HomePageLargeSection/HomePageLargeSection"

const Home = () => {
  return (
    <div>
      <HeaderImage />
      <HomePageLargeSection />
      <HomePageCards />
    </div>
  )
}

export default Home
