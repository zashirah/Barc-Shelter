import React from "react"
import { Link } from "react-router-dom"
import "./HomePageLargeSection.css"
import cat from "./cat.jpg"
import dog from "./bitmap.jpg"
import orangeCat from "./orangeCat.jpg"
import whiteDog from "./whiteDog.jpg"
import ebay from "./ebay.jpg"
import amazonList from "./bitmap copy.jpg"

const HomePageLargeSection = () => {
  return (
    <div className="main">
      <div className="first-section">
        <img src={cat} alt="Cat" className="Cat" />
        <h1 className="welcome">
          WELCOME TO <b>BARC Shelter</b>
        </h1>
        <h2 className="animals">"Life is great, animals make it better"</h2>
      </div>
      <img src={dog} alt="Dog" className="Dog" />
      <div className="image">
        <h1 className="volunteer">
          VOLUNTEER TO ASSIST TAKING CARE OF HOMELESS ANIMALS
        </h1>
        <Link className="volunteer-link" to="volunteer">
          <button className="volunteer-info">Volunteer Info</button>
        </Link>
      </div>
      <div className="animal-container">
        <img src={whiteDog} alt="Dog" className="whiteDog" />
        <h1 className="animal-saying">
          “Until one has loved an animal, a part of one’s soul remains
          unawakened.”
          <br />
          <br /> Anatole France
        </h1>
        <img src={orangeCat} alt="Cat" className="orangeCat" />
      </div>
      <div className="tiger-cat">
        <h1 className="purchase-items">
          PURCHASE ITEMS TO SUPPORT HOMELESS ANIMALS!
        </h1>
        <Link className="donate-link" to="/donate">
          <button className="donate">Donate Now</button>
          <img src={ebay} alt="Dog" className="ebay" />
          <img src={amazonList} alt="Dog" className="amazon-wish-list" />
        </Link>
      </div>
    </div>
  )
}

export default HomePageLargeSection
