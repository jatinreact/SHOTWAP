import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import fedex from "../../images/FedEx.png";
import Safexpress from "../../images/Safexpress.png";
import frame from "../../images/frame_truck.gif";
import { Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
const options = {
  loop: true,
  nav: false,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  margin: 30,
  center: false,
  dots: false,
  smartSpeed: 1500,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
};

const LoginHome = () => {
  const navigate = useNavigate();
  const dashbord = [
    {
      name: "DashBoard",
      link: "/dashBoard",
    },
    {
      name: "Orders",
      link: "/newOrder",
    },
    {
      name: "Manifests",
      link: "/manifests",
    },
    {
      name: "NDR",
      link: "/ndr",
    },
    {
      name: "Shipment",
      link: "/shipmentPage",
    },
    {
      name: "Billing",
      link: "/billing",
    },
    {
      name: "Recociliation",
      link: "/reconciliation",
    },
    {
      name: "COD",
      link: "/cod",
    },
    {
      name: "Calculater",
      link: "/priceCalulator",
    },
    {
      name: "Profile",
      link: "",
    },
  ];
  return (
    <>
      <section className="Carrier_partnetr">
        <div className="container">
          <div className="titleP ">
            <h2 className="text-center mt-5 mb-5">Carrier Partners</h2>
          </div>
          <div className="brandImages ">
            <img src={fedex} />
            <img src={Safexpress} />
          </div>
          <div className="start_btn">
            <button type="button" class="GET_BTN">
              New Ordered
            </button>
          </div>
        </div>
      </section>

      <OwlCarousel className="client-wrap owl-carousel owl-theme" {...options}>
        {dashbord.map((item, index) => (
          <section className="headin_section">
            <div className="container">
              <h3 className="pl-4">{item.name}</h3>
              <div
                className="Img_frame_truck"
                onClick={() => navigate(`${item.link}`)}
              >
                <img src={frame} alt="" />
              </div>
            </div>
          </section>
        ))}
      </OwlCarousel>
    </>
  );
};

export default LoginHome;
