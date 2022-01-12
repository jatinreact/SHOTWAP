import React from "react";
import { Grid } from "@material-ui/core";
///image
import bookpaging from "../images/book-paging.gif";
import Rectangle from "../images/Rectangle.png";
import oneplateform from "../images/oneplateform.png";
import Dedicated from "../images/Dedicated.png";
import mode from "../images/mode.png";
const SupportSection = () => {
  return (
    <>
      <div className="Book_img_book">
        <img src={bookpaging} alt="" class="img-fluid" />
      </div>
      <section className="affortable_category category_section">
        <div className="container">
          <Grid className="Component_main_grid">
            <Grid item md={3}>
              <div className="affortable p-4">
                <div className="rect_img">
                  <img src={Rectangle} alt="" />
                </div>
                <h4 className="text-center mb-3">Affordable Rates</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
            </Grid>
            <Grid item md={3}>
              <div className="affortable p-4">
                <div className="rect_img">
                  <img src={oneplateform} alt="" />
                </div>
                <h4 className="text-center mb-3">
                  One Platform, Multiple Carriers
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
            </Grid>
            <Grid item md={3}>
              <div className="affortable p-4">
                <div className="rect_img">
                  <img src={Dedicated} alt="" />
                </div>
                <h4 className="text-center mb-3">Dedicated Support</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
            </Grid>
            <Grid item md={3}>
              <div className="affortable p-4">
                <div className="rect_img">
                  <img src={mode} alt="" />
                </div>
                <h4 className="text-center mb-3">Support for Multiple Modes</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  );
};

export default SupportSection;
