import React from "react";
import Banner from "../../Components/Banner/Banner";
import TravelConnection from "../../Components/TravelConnection/TravelConnection";
import FeaturedPackageCard from "../../Components/FeaturedPackage/FeaturedPackageCard";
import TravelInStyle from "../../Components/TravelinStyle/TravelInStyle";
import SwiperEffectCard from "../../Components/SwiperEffectCard/SwiperEffectCard";
import GridTravelPhoto from "../../Components/GridTravelPhoto/GridTravelPhot";
import TravelPlanning from "../../Components/TravelPlanning/TravelPlanning";
import PricingSection from "../../Components/PricingSection/PricingSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <TravelConnection></TravelConnection>
      <FeaturedPackageCard></FeaturedPackageCard>
      <TravelInStyle></TravelInStyle>
      <SwiperEffectCard></SwiperEffectCard>
      <GridTravelPhoto></GridTravelPhoto>
      <TravelPlanning></TravelPlanning>
      <PricingSection></PricingSection>
    </div>
  );
};

export default Home;
