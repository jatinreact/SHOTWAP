import React, { useEffect } from "react";
import { Card, Grid } from "@material-ui/core";
import HOC from "../../Common/HOC/HOC";
import "./PricingOffers.css";

const PricingOffers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="home_padding">
        <div className="container mb-5">
          <div className="pt-5 mb-3">
            <h2 className="text-center">Pricing Offers</h2>
          </div>
          <div>
            <div className="text-center mt-5 mb-5">
              <button type="button" class="GET_BTN_track mr-2">
                Trucking
              </button>
              <button type="button" class="GET_BTN_track">
                Shipping
              </button>
            </div>
          </div>
          <div>
            <Grid className="Component_main_grid">
              <Grid item md={4}>
                <Card className="Card_shadow p-3 m-3">
                  <div>
                    <div className="basicprice">
                      <div>
                        <h3>Basic</h3>
                      </div>
                      <div>
                        <p>Standard version</p>
                      </div>
                      <div>
                        <h2>
                          4,000 <span>/Truck</span>
                        </h2>
                      </div>
                      <div className="text-center">
                        <spa
                          className="d-flex"
                          style={{ justifyContent: "center" }}
                        >
                          <i class="fa fa-check mt-1 pr-3"></i>
                          <p>Support Form</p>
                        </spa>
                        <span
                          className="d-flex"
                          style={{ justifyContent: "center" }}
                        >
                          <i class="fa fa-times mt-1 pr-3"></i>
                          <p>Free Hosting</p>
                        </span>
                        <span
                          className="d-flex"
                          style={{ justifyContent: "center" }}
                        >
                          <i class="fa fa-times mt-1 pr-3"></i>
                          <p>Bumper Offer</p>
                        </span>
                      </div>
                    </div>
                    <div className="text-center mt-5 mb-5">
                      <button type="button" class="GET_BTN">
                        Choose Plan
                      </button>
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card className="Card_shadow p-3 m-3">
                  <div>
                    <div className="basicprice">
                      <div>
                        <h3>Popular</h3>
                      </div>
                      <div>
                        <p>Standard version</p>
                      </div>
                      <div>
                        <h2>
                          4,000 <span>/Truck</span>
                        </h2>
                      </div>
                      <div className="text-center">
                        <spa
                          className="d-flex"
                          style={{ justifyContent: "center" }}
                        >
                          <i class="fa fa-check mt-1 pr-3"></i>
                          <p>Support Form</p>
                        </spa>
                        <span
                          className="d-flex"
                          style={{ justifyContent: "center" }}
                        >
                          <i class="fa fa-times mt-1 pr-3"></i>
                          <p>Free Hosting</p>
                        </span>
                        <span
                          className="d-flex"
                          style={{ justifyContent: "center" }}
                        >
                          <i class="fa fa-times mt-1 pr-3"></i>
                          <p>Bumper Offer</p>
                        </span>
                      </div>
                    </div>
                    <div className="text-center mt-5 mb-5">
                      <button type="button" class="GET_BTN">
                        Choose Plan
                      </button>
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card className="Card_shadow p-3 m-3">
                  <div>
                    <div className="basicprice">
                      <div>
                        <h3>Enterprice</h3>
                      </div>
                      <div>
                        <p>Standard version</p>
                      </div>
                      <div>
                        <h2>
                          4,000 <span>/Truck</span>
                        </h2>
                      </div>
                      <div className="text-center">
                        <spa
                          className="d-flex"
                          style={{ justifyContent: "center" }}
                        >
                          <i class="fa fa-check mt-1 pr-3"></i>
                          <p>Support Form</p>
                        </spa>
                        <span
                          className="d-flex"
                          style={{ justifyContent: "center" }}
                        >
                          <i class="fa fa-times mt-1 pr-3"></i>
                          <p>Free Hosting</p>
                        </span>
                        <span
                          className="d-flex"
                          style={{ justifyContent: "center" }}
                        >
                          <i class="fa fa-times mt-1 pr-3"></i>
                          <p>Bumper Offer</p>
                        </span>
                      </div>
                    </div>
                    <div className="text-center mt-5 mb-5">
                      <button type="button" class="GET_BTN">
                        Choose Plan
                      </button>
                    </div>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(PricingOffers);
