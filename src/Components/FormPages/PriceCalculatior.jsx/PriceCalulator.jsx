import React, { useEffect } from "react";
import HOC from "../../../Common/HOC/HOC";
import { Grid, Card } from "@material-ui/core";
import "./PriceCalculator.css";
const PriceCalulator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="home_padding">
        <div className="reconcilation p-2">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              Price Calculator
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto"></ul>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0 mr-2"
                  type="submit"
                >
                  <i class="fa fa-plus mr-2"></i>0
                </button>
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  <i class="fa fa-plus mr-2"></i>New Orderd
                </button>
              </form>
            </div>
          </nav>
        </div>

        {/* price carculator form */}

        <div>
          <div className="price_calculate mt-5">
            <div className="container">
              <Card className="Card_shadow p-3 mb-5">
                <div>
                  <Grid className="Component_main_grid">
                    <Grid item md={10}>
                      <div>
                        <div className=" mb-3">
                          <h5>Order Information</h5>
                        </div>
                        <div>
                          <Grid className="Component_main_grid">
                            <Grid item md={4}>
                              <div className="pl-2">
                                <label for="formGroupExampleInput">
                                  Pickup Pin Code
                                </label>
                                <input
                                  style={{ borderRadius: "16px" }}
                                  class="form-control "
                                  id="formGroupExampleInput"
                                  placeholder="Pickup Pin Code"
                                />
                              </div>
                            </Grid>
                            <Grid item md={4}>
                              <div className="pl-2">
                                <label for="formGroupExampleInput">
                                  Delivery Pin Code
                                </label>
                                <input
                                  style={{ borderRadius: "16px" }}
                                  class="form-control "
                                  id="formGroupExampleInput"
                                  placeholder="Delivery Pin Code"
                                />
                              </div>
                            </Grid>
                            <Grid item md={4}>
                              {" "}
                              <div className="pl-2">
                                <label for="formGroupExampleInput">
                                  Order Type
                                </label>
                                <div>
                                  <select class="form-control">
                                    <option>Prepaid</option>
                                    <option>COD</option>
                                    <option>Reverse</option>
                                  </select>
                                </div>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                    </Grid>
                    <Grid item md={2}></Grid>
                  </Grid>
                  {/* packging order */}
                  <div className="mb-4">
                    <Grid className="Component_main_grid">
                      <Grid item md={10}>
                        <div>
                          <div className="mt-5 mb-3">
                            <h5>Package Information</h5>
                          </div>
                          <div>
                            <Grid className="Component_main_grid">
                              <Grid item md={3}>
                                <div className="pl-2">
                                  <label for="formGroupExampleInput">
                                    Length (cm)
                                  </label>
                                  <input
                                    style={{ borderRadius: "16px" }}
                                    class="form-control "
                                    id="formGroupExampleInput"
                                    placeholder="Length (cm)"
                                  />
                                </div>
                              </Grid>
                              <Grid item md={3}>
                                <div className="pl-2">
                                  <label for="formGroupExampleInput">
                                    Width (cm)
                                  </label>
                                  <input
                                    style={{ borderRadius: "16px" }}
                                    class="form-control "
                                    id="formGroupExampleInput"
                                    placeholder="Width (cm)"
                                  />
                                </div>
                              </Grid>
                              <Grid item md={3}>
                                {" "}
                                <div className="pl-2">
                                  <label for="formGroupExampleInput">
                                    Height (cm)
                                  </label>
                                  <input
                                    style={{ borderRadius: "16px" }}
                                    class="form-control "
                                    id="formGroupExampleInput"
                                    placeholder="Height (cm)"
                                  />
                                </div>
                              </Grid>
                              <Grid item md={3}>
                                <div className="pl-2">
                                  <label for="formGroupExampleInput">
                                    Weight (kg)
                                  </label>
                                  <input
                                    style={{ borderRadius: "16px" }}
                                    class="form-control "
                                    id="formGroupExampleInput"
                                    placeholder=" Weight (kg)"
                                  />
                                </div>
                              </Grid>
                            </Grid>
                          </div>
                        </div>
                      </Grid>
                      <Grid item md={2}></Grid>
                    </Grid>
                  </div>
                </div>
                <div className="mt-5 mb-4">
                  <button type="button" class="pricing_button">
                    GET PRICING
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(PriceCalulator);
