import React from "react";
import HOC from "../../Common/HOC/HOC";
import "./Home.css";
import MobileAppAccess from "./MobileAppAccess";
import BannerHome from "./BannerHome";
import WorkProcess from "./WorkProcess";
import CardSection from "./CardSection";
import Worldwide from "./Worldwide";
import SupportSection from "./SupportSection";
import CarrierPartners from "./CarrierPartners";
import Happyclients from "./Happyclients";
import HomeCrousal from "./HomeCrousal";

const Home = () => {
  return (
    <>
      <div className="home_padding">
        <div>
          <BannerHome />
          <CarrierPartners />
          <SupportSection />
          <CardSection />
          <Worldwide />
          <WorkProcess />
          <MobileAppAccess />
          <Happyclients />
          <HomeCrousal />
        </div>
      </div>
    </>
  );
};

export default HOC(Home);
