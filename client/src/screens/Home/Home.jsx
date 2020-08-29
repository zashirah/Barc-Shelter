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
import largeSectionImage3 from "../../assets/main-large-section-3.png";
import smallSectionLeft1 from "../../assets/main-small-section-left-1.png";
import smallSectionRight1 from "../../assets/main-small-section-right-1.png";
import smallSectionLeft2 from "../../assets/main-small-section-left-2.png";
import smallSectionRight2 from "../../assets/main-small-section-right-2.png";

const Home = () => {

  const homeScreenLargeText1JSX = (
    <div>
      <h1 className="georgia page-title">
        <i>BARC</i> Shelter
      </h1>
      <h1 className="lato-bold">ADOPT YOUR NEW BEST FRIEND TODAY!</h1>
    </div>
  );

  const homeScreenSmallText1JSX = (
    <div>
      <h1 style={{fontSize: '48px'}}>
        {" "}
        <span className="lato-regular">WELCOME TO</span>
        <span className="barc-shelter-span georgia">
          {" "}
          <i>BARC</i> Shelter
        </span>
      </h1>
      <h2 className="lato-light" style={{fontSize: '36px'}}>
        <i>"Life is great, animals make it better"</i>
      </h2>
    </div>
  );

  const homeScreenLargeText2JSX = (
    <div>
      <h1 className="lato-bold">VOLUNTEER TO ASSIST TAKING CARE OF HOMELESS ANIMALS</h1>
    </div>
  );

  const homeScreenSmallText2JSX = (
    <div>
      <h2 className="lato-light" style={{ fontSize: "36px" }}>
        <i>
          "Until one has loved an animal, a part of one's soul remains
          unawakened."
        </i>
      </h2>
      <h2>
        <i>- Anatole France</i>
      </h2>
    </div>
  );

  const homeScreenLargeText3JSX = (
    <div>
      <h1 className="lato-bold">
        PURCHASE ITEMS TO SUPPORT HOMELESS ANIMALS!
      </h1>
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
        leftPadding="home-large-section-left-padding-5"
        fontColor="home-large-section-white-font"
      />
      <HomeScreenSmallSection2
        leftImage={smallSectionLeft1}
        leftImageAlt="white and gray striped cat"
        rightImage={smallSectionRight1}
        rightImageAlt="large brown dog"
        text={homeScreenSmallText1JSX}
        extraLeftPaddingTop={"120px"}
      />
      <HomeScreenLargeSection2
        srcImage={largeSectionImage2}
        srcImageAlt="happy yellow lab in green grass"
        text={homeScreenLargeText2JSX}
        buttonText="Volunteer Info"
        buttonLink="/volunteer"
        leftPadding="home-large-section-left-padding-55"
        fontColor="home-large-section-white-font"
      />
      <HomeScreenSmallSection2
        leftImage={smallSectionLeft2}
        leftImageAlt="yellow lab"
        rightImage={smallSectionRight2}
        rightImageAlt="orange striped cat"
        text={homeScreenSmallText2JSX}
        extraRightPaddingTop={"100px"}
        textWidth={"650px"}
      />
      <HomeScreenLargeSection2
        srcImage={largeSectionImage3}
        srcImageAlt="happy white lab in green grass"
        text={homeScreenLargeText3JSX}
        buttonText="Donate Now"
        buttonLink="/donate"
        leftPadding="home-large-section-left-padding-5"
        fontColor="home-large-section-black-font"
      />
    </Layout>
  );
};

export default Home;
