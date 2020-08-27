import React from "react"
import "./HomePageCards.css"
import catCage from "./catCage.jpg"
import dailyKibble from "./dailyKibble.jpg"
import lostDog from "./lostDog.jpg"
import aboutUs from "./about-us.jpg"

const HomePageCards = () => {
  return (
    <>
      <div className="top-cards-div">
        <div>
          <h1 className="happy-trails">Happy Trails</h1>
          <div className="cat-in-cage">
            <img src={catCage} alt="cat" className="cat-cage" />
          </div>
        </div>
        <div>
          <h1 className="lost">Lost Dog/Cats</h1>
          <div className="lost-dog-container">
            <img src={lostDog} alt="lost dog" className="lost-dogs" />
          </div>
        </div>
      </div>
      <div className="bottom-cards-div">
        <div>
          <h1 className="news-paper">Events</h1>
          <div className="daily-kibble">
            <img src={dailyKibble} alt="news" className="news" />
          </div>
        </div>
        <div>
          <h1 className="about">About Us</h1>
          <div className="about-us">
            <img src={aboutUs} alt="bio" className="about-company" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePageCards
