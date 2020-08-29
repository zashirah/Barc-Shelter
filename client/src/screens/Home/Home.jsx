import React from "react";
import "./Home.css";
// import HomePageCards from "../../components/HomePageCards/HomePageCards";
// import HeaderImage from "../../components/HeaderImage/HeaderImage";
// import HomePageLargeSection from "../../components/HomePageLargeSection/HomePageLargeSection";
// import HorizaontalAnimalPictureSection from "../../components/HorizontalAnimcalPictureSection/HorizontalAnimcalPictureSection";
import Layout from "../../components/shared/Layout/Layout";

import HomeScreenLargeSection2 from "../../components/HomeScreenLargeSection2/HomeScreenLargeSection2";
// import HomeScreenSmallSection2 from "../../components/HomeScreenSmallSection2/HomeScreenSmallSection2";

import HeaderImage from "../../components/HeaderImage/HeaderImage";

import largeSectionImage1 from "../../assets/main-large-section-1.png";

const Home = () => {

  const homeScreenLargeTextJSX = (
    <div>
      <h1>
        <i>BARC</i> Shelter
      </h1>
      <h1>ADOPT YOUR NEW BEST FRIEND TODAY!</h1>
    </div>
  );


  return (
    <Layout>
      <div>
        <HomeScreenLargeSection2
          srcImage={largeSectionImage1}
          // srcImageAlt=""
          text={homeScreenLargeTextJSX}
          buttonText={"Adopt me!"}
          buttonLink={"/adopt"}
        />
        {/* <HomeScreenSmallSection2 /> */}
      </div>
    </Layout>
  );
};

export default Home;
