// react
import React from "react";

import "./HomePageCards2.css"

// components
import HomePageCard from "../HomePageCard/HomePageCard";

// assets
import aboutUs from "../../assets/main-screen-card-about-us.png";
import events from "../../assets/main-screen-card-events.png";
import lostDogsCats from "../../assets/main-screen-card-lost-dog-cat.png";
import happyTrails from "../../assets/main-screen-card-happy-trails.png";

const HomePageCards2 = () => {
  return (
    <div className="home-screen-cards-container">
      <HomePageCard
        title="Happy Trails"
        imageSrc={happyTrails}
        imageAlt="image of woman holding cat in a crate"
        // link=""
      />
      <HomePageCard
        title="Lost Dogs / Cats"
        imageSrc={lostDogsCats}
        imageAlt="lost dog poster"
        // link=""
      />
      <HomePageCard
        title="Events"
        imageSrc={events}
        imageAlt="image of daily kibble article"
        // link=""
      />
      <HomePageCard
        title="About Us"
        imageSrc={aboutUs}
        imageAlt="image of drawn dog hopeful for adoption"
        // link=""
      />
    </div>
  );
};

export default HomePageCards2;
