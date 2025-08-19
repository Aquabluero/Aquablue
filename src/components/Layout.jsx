import React from "react";
import Carousel from "./Carousel";
import Intro from "./Intro";
import NewLaunches from "./NewLaunches";
import HomeProducts from "./HomeProducts";
import Footer from "./Footer";
import SpecialFeaturesSection from "./SpecialFeaturesSection";
import ChoosingWaterPurifierSection from "./ChoosingWaterPurifierSection";

export default function Layout() {
  return (
    <>
      <Carousel />
      <Intro />
      <NewLaunches />
      <HomeProducts />
      <SpecialFeaturesSection />
      <ChoosingWaterPurifierSection />
      <Footer />
    </>
  );
}
