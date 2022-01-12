import React from "react";
import awesomefeature from "../images/awesome-feature.png";
import { Grid } from "@material-ui/core";
const Worldwide = () => {
  return (
    <>
      {/* product of widerange */}
      <section className="product_widerange">
        <div className="container">
          <Grid className="Component_main_grid">
            <Grid item md={6}>
              <h1 className="spreadProducts mt-5">
                Let's spread Products to Worldwide
              </h1>
            </Grid>
            <Grid item md={6}>
              <div className="awesomefeature">
                <img src={awesomefeature} alt="" class="img-fluid" />
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
      <div className="pricing_btn text-center mt-3 mb-4">
        <button type="button" class="pricing_button">
          PRICING
        </button>
      </div>
    </>
  );
};

export default Worldwide;
