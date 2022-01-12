import React, { useEffect } from "react";
import HOC from "../../Common/HOC/HOC";
import BannerHome from "../Home/BannerHome";
import OurStory from "./OurStory";
import Achivements from "./Achivements";
import OurTeam from "./OurTeam";

const AboutCompany = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="home_padding">
        <div>
          <BannerHome />
          <OurStory />
          <Achivements />
          <OurTeam />
        </div>
      </div>
    </>
  );
};

export default HOC(AboutCompany);
