import React, { useState } from "react";
import { Grid } from "@material-ui/core";
//images
import fedex from "../images/FedEx.png";
import Safexpress from "../images/Safexpress.png";
import frame from "../images/frame_truck.gif";
import Rectangle2 from "../images/Rectangle2.png";
import youtube from "../images/youtube.png";
import { useNavigate } from "react-router-dom";
import Dialogbox from "../dialogbox/Dialogbox";
const CarrierPartners = () => {
  const [LoginDailogOpen, setLoginDailogOpen] = useState(false);
  const logindata = () => {
    setLoginDailogOpen(!LoginDailogOpen);
  };
  let navigate = useNavigate();
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
            <button type="button" class="GET_BTN" onClick={logindata}>
              GET STARTED
            </button>
          </div>
        </div>
      </section>
      <section className="headin_section">
        <div className="container">
          <Grid className="Component_main_grid Fram_class_main">
            <Grid item md={4}>
              <div className="Img_frame_truck">
                <img src={frame} alt="" />
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="Img_frame_truck">
                <img src={frame} alt="" />
              </div>
            </Grid>

            <Grid item md={4}>
              <div className="Img_frame_truck">
                <img src={frame} alt="" />
              </div>
            </Grid>
          </Grid>
          <div className="img_para">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              quis incidunt possimus minus corrupti doloremque quisquam
              doloribus pariatur ut aliquid nobis obcaecati modi assumenda
              temporibus eius, earum, similique, beatae quos?
            </p>
          </div>
        </div>
      </section>
      <section className="category_section_main">
        <div className="category_section">
          <div className="container">
            <Grid className="Component_main_grid img_set">
              <Grid item md={4}>
                <div className="category_section mt-5">
                  <img src={frame} alt="" />
                </div>
              </Grid>
              <Grid item md={8}>
                <div className="category_heding">
                  <h2>IOREM IPSUM</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Non blanditiis quia, unde ipsam, totam, modi consequuntur
                    corrupti dolor doloremque expedita ipsa provident laudantium
                    tempore impedit officia enim minima esse consectetur.
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className="category_section">
          <div className="container">
            <Grid
              className="Component_main_grid"
              style={{ justifyContent: "center" }}
            >
              <Grid item md={4}>
                <div className="category_section mt-5">
                  <img src={Rectangle2} alt="" class="img-fluid" />
                </div>
                <div className="img_youtube">
                  <img src={youtube} alt="" class="img-fluid" />
                </div>
              </Grid>
              <Grid item md={8}>
                <div className="use_heading mt-5 pl-5">
                  <h2>HOW TO USE</h2>
                  <div className="chex_content d-flex">
                    <i
                      class="fa fa-square mt-1 pr-2"
                      style={{ color: "#FFF" }}
                    ></i>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                  </div>
                  <div className="chex_content d-flex">
                    <i
                      class="fa fa-square mt-1 pr-2"
                      style={{ color: "#FFF" }}
                    ></i>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                  </div>
                  <div className="chex_content d-flex">
                    <i
                      class="fa fa-square mt-1 pr-2"
                      style={{ color: "#FFF" }}
                    ></i>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>

            <section className="whyshotwap">
              <div className="shortwap_heading">
                <h2 className="text-center mt-3 mb-3">WHY SHOTWAP</h2>
                <p className="text-center mt-3 mb-3">
                  As a delivery and logistics aggregator in India, we want to
                  make e-commerce shipping and cargo shipping effortlessly easy
                  for our customers.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Dialogbox open={LoginDailogOpen} close={logindata} />
    </>
  );
};

export default CarrierPartners;
