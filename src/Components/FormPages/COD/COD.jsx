import React, { useEffect } from "react";
import HOC from "../../../Common/HOC/HOC";
import { Card, Grid } from "@material-ui/core";
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
              COD
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

        {/* cod section  */}

        <div>
          <div className="container">
            <div className="card_section" style={{ marginTop: "20px" }}>
              <Card className="Card_shadow p-3 mb-5">
                <div>
                  <h4>
                    Bank Account Information{" "}
                    <span className="" style={{ fontSize: "14px" }}>
                      (All the fields are mandatory to fill)
                    </span>
                  </h4>
                </div>
                <div>
                  <Grid className="Component_main_grid">
                    <Grid item md={12} xs={12}>
                      {" "}
                      <div className="pl-2 mt-3 mb-2">
                        <label for="formGroupExampleInput">
                          Account Name *
                        </label>
                        <input
                          style={{ borderRadius: "16px" }}
                          class="form-control "
                          id="formGroupExampleInput"
                          placeholder="Account Name *"
                        />
                      </div>
                    </Grid>
                    <Grid md={12} xs={12}>
                      {" "}
                      <div className="pl-2 mt-3 mb-2">
                        <label for="formGroupExampleInput">
                          Account Number *
                        </label>
                        <input
                          style={{ borderRadius: "16px" }}
                          class="form-control "
                          id="formGroupExampleInput"
                          placeholder="Account Number *"
                        />
                      </div>
                    </Grid>

                    <Grid md={12} xs={12}>
                      {" "}
                      <div className="pl-2 mt-3 mb-2">
                        <label for="formGroupExampleInput">Bank Name *</label>
                        <input
                          style={{ borderRadius: "16px" }}
                          class="form-control "
                          id="formGroupExampleInput"
                          placeholder="Bank Name *"
                        />
                      </div>
                    </Grid>
                    <Grid md={12} xs={12}>
                      {" "}
                      <div className="pl-2 mt-3 mb-2">
                        <label for="formGroupExampleInput">IFSC CODE *</label>
                        <input
                          style={{ borderRadius: "16px" }}
                          class="form-control "
                          id="formGroupExampleInput"
                          placeholder="IFSC CODE"
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="mt-5 mb-4">
                  <button type="button" class="pricing_button">
                    Submit
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
