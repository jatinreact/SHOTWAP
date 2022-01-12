import React from "react";
import { Grid } from "@material-ui/core";
///image
import hero from "../images/gatin.gif";
const BannerHome = () => {
  return (
    <>
      <div className="main_div">
        <div className="">
          <Grid className="Component_main_grid">
            <Grid item md={7}>
              <div className="d-flex">
                <div className="icons_main">
                  <span className="banner_icons">
                    <i class="fa fa-facebook-square"></i>
                  </span>
                  <span className="banner_icons">
                    <i class="fa fa-twitter-square"></i>
                  </span>
                  <span className="banner_icons">
                    <i class="fa fa-youtube"></i>
                  </span>
                  <span className="banner_icons">
                    <i class="fa fa-instagram"></i>
                  </span>
                </div>

                <div className="banner">
                  <h2>IOREM IPSUM </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem ipsam, natus ex debitis tenetur ipsum fugiat,
                    fugit vitae reiciendis voluptatibus ipsa nam tempora
                    reprehenderit officia repellendus! Velit fugit ab dolorem.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item md={5}>
              <div className="hero_img">
                <img src={hero} alt="" />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default BannerHome;
