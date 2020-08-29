// react
import React from "react";

// css
import "./Home.css";
// import HomePageCards from "../../components/HomePageCards/HomePageCards";
// import HeaderImage from "../../components/HeaderImage/HeaderImage";
// import HomePageLargeSection from "../../components/HomePageLargeSection/HomePageLargeSection";
// import HorizaontalAnimalPictureSection from "../../components/HorizontalAnimcalPictureSection/HorizontalAnimcalPictureSection";

// components
import Layout from "../../components/shared/Layout/Layout";
import HomeScreenLargeSection2 from "../../components/HomeScreenLargeSection2/HomeScreenLargeSection2";
import HomeScreenSmallSection2 from "../../components/HomeScreenSmallSection2/HomeScreenSmallSection2";

// assets
import largeSectionImage1 from "../../assets/main-large-section-1.png";
import largeSectionImage2 from "../../assets/main-large-section-2.png";
import smallSectionLeft1 from "../../assets/main-small-section-left-1.png";
import smallSectionRight1 from "../../assets/main-small-section-right-1.png";


const Home = () => {

  const homeScreenLargeText1JSX = (
    <div>
      <h1>
        <i>BARC</i> Shelter
      </h1>
      <h1>ADOPT YOUR NEW BEST FRIEND TODAY!</h1>
    </div>
  );

  const homeScreenSmallText1JSX = (
    <div>
      <h1>
        {" "}
        <span className="late-regular">WELCOME TO</span>
        <span className="barc-shelter-span">
          {" "}
          <i>BARC</i> Shelter
        </span>
      </h1>
      <h2>"Life is great, animals make it better"</h2>
    </div>
  );


  return (
    <Layout>
      <HomeScreenLargeSection2
        srcImage={largeSectionImage1}
        srcImageAlt="happy white lab in green grass"
        text={homeScreenLargeText1JSX}
        buttonText="Adopt me!"
        buttonLink="/adopt"
      />
      <HomeScreenSmallSection2
        leftImage={smallSectionLeft1}
        leftImageAlt="white and gray striped cat"
        rightImage={smallSectionRight1}
        rightImageAlt="large brown dog"
        text={homeScreenSmallText1JSX}
      />
      <HomeScreenLargeSection2
        srcImage={largeSectionImage2}
        srcImageAlt="happy white lab in green grass"
        text={homeScreenLargeText1JSX}
        buttonText="Adopt me!"
        buttonLink="/adopt"
      />
    </Layout>
  );
};

export default Home;
