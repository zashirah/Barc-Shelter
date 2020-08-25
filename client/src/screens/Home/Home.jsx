import React from "react";
import "./Home.css";
import HomePageCards from "../../components/HomePageCards/HomePageCards";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import HomePageLargeSection from "../../components/HomePageLargeSection/HomePageLargeSection";
import HorizaontalAnimalPictureSection from "../../components/HorizontalAnimcalPictureSection/HorizontalAnimcalPictureSection";
import Layout from "../../components/shared/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div>
        <HeaderImage />
        <HomePageLargeSection />
        <HomePageCards />
        <HorizaontalAnimalPictureSection />
      </div>
    </Layout>
  );
};

export default Home;
