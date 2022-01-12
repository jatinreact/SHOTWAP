import React from "react";
import HOC from "../../Common/HOC/HOC";
import "../Home/Home.css";
import MobileAppAccess from "../Home/MobileAppAccess";
import BannerHome from "../Home/BannerHome";
import WorkProcess from "../Home/WorkProcess";
import CardSection from "../Home/CardSection";
import Worldwide from "../Home/Worldwide";
import SupportSection from "../Home/SupportSection";
import CarrierPartners from "../Home/CarrierPartners";
import Happyclients from "../Home/Happyclients";
import HomeCrousal from "../Home/HomeCrousal";
import LoginHome from "./LoginHome/LoginHome";

const AftertLoginHome = () => {
  return (
    <>
      <div className="home_padding">
        <div>
          <BannerHome />
          <LoginHome />
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

export default HOC(AftertLoginHome);
