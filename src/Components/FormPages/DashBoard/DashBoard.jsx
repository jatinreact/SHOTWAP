import React, { useEffect } from "react";
import HOC from "../../../Common/HOC/HOC";
import Group from "../../images/Group.png";
import unusual from "../../images/unusual.png";
import cod from "../../images/cod.png";
import process from "../../images/process.png";
import { Grid } from "@material-ui/core";
import "./Dashboard.css";
const NDR = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="home_padding">
        <div className="reconcilation p-2">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              DashBoard
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

        {/* ////dashboard part */}

        <div className="container">
          <div className="dashboard_box">
            <Grid className="Component_main_grid">
              <Grid item md={3} xs={12}>
                <div className="box_card">
                  <div>
                    <h5>Total Shipment</h5>
                  </div>
                  <div
                    className="d-flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    <img src={Group} alt="" />
                    <p className="" style={{ fontSize: "20px" }}>
                      0
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <div className="box_card">
                  <div>
                    <h5>Usable Amount</h5>
                  </div>
                  <div
                    className="d-flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    <img src={unusual} alt="" />
                    <p className="" style={{ fontSize: "20px" }}>
                      0
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                {" "}
                <div className="box_card">
                  <div>
                    <h5>Expected COD</h5>
                  </div>
                  <div
                    className="d-flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    <img src={cod} alt="" />
                    <p className="" style={{ fontSize: "20px" }}>
                      0
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                {" "}
                <div className="box_card">
                  <div>
                    <h5>Unprocessed Orders</h5>
                  </div>
                  <div
                    className="d-flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    <img src={process} alt="" />
                    <p className="" style={{ fontSize: "20px" }}>
                      0
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>

          {/* //////order type */}
          <div>
            <div className="">
              <Grid className="Component_main_grid">
                <Grid item md={8}>
                  <div className="order_type order_box">
                    <div
                      className="d-flex"
                      style={{ justifyContent: "space-between" }}
                    >
                      <div>
                        <h5>Analytics</h5>
                      </div>
                      <div>
                        <h5>This Month Report</h5>
                      </div>
                    </div>
                    <div>
                      <Grid className="Component_main_grid">
                        <Grid item md={6}>
                          <div className="mt-3 mb-4">
                            {" "}
                            <div className="mt-3">
                              <h4>Order Type</h4>
                            </div>
                            <div className="d-flex mt-3 ">
                              <div className="d-flex">
                                <div className="color_radius"></div>
                                <div className="pr-3"> Prepaid</div>
                              </div>
                              <div className="d-flex">
                                <div className="color_radius"></div>
                                <div className="pr-3">COD</div>
                              </div>
                              <div className="d-flex">
                                <div className="color_radius"></div>
                                <div className="pr-3">Reverse</div>
                              </div>
                            </div>
                          </div>
                        </Grid>
                        <Grid>
                          <div item md={6}>
                            <h4>Mode Type</h4>
                            <div className="d-flex mt-3 mb-4">
                              <div className="d-flex">
                                <div className="color_radius"></div>
                                <div className="pr-3"> Air </div>
                              </div>
                              <div className="d-flex">
                                <div className="color_radius"></div>
                                <div className="pr-3">Surface-10Kg</div>
                              </div>
                              <div className="d-flex">
                                <div className="color_radius"></div>
                                <div className="pr-3">Surface-5Kg</div>
                              </div>
                            </div>
                            <div className="d-flex mt-3 mb-4">
                              <div className="d-flex">
                                <div className="color_radius"></div>
                                <div className="pr-3"> Lite-1Kg</div>
                              </div>
                              <div className="d-flex">
                                <div className="color_radius"></div>
                                <div className="pr-3">Lite-2Kg</div>
                              </div>
                              <div className="d-flex">
                                <div className="color_radius"></div>
                                <div className="pr-3">Lite-0.5Kg</div>
                              </div>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div>
                    <div className="order_type_pending mb-4">
                      <h5>Recent Pending Orders</h5>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(NDR);
