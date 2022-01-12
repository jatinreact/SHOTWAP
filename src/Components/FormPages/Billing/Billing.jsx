import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import HOC from "../../../Common/HOC/HOC";
import Group from "../../images/Group.png";
import unusual from "../../images/unusual.png";
import cod from "../../images/cod.png";
import process from "../../images/process.png";
import money from "../../images/money.png";
import moneyS from "../../images/moneyS.png";
import "./Billing.css";
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
              Billing
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

        {/* ///Billing Section */}
        <div>
          <div className="container">
            <div className="dashboard_box">
              <Grid className="Component_main_grid">
                <Grid item md={4} xs={12}>
                  <div className="box_card">
                    <div>
                      <h5>Total Balance</h5>
                    </div>
                    <div
                      className="money d-flex"
                      style={{ justifyContent: "space-between" }}
                    >
                      <img src={money} alt="" />
                      <p className="" style={{ fontSize: "20px" }}>
                        0
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div className="box_card">
                    <div>
                      <h5>Unbilled Receivables</h5>
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
                <Grid item md={4} xs={12}>
                  {" "}
                  <div className="box_card">
                    <div>
                      <h5>Usable Balance</h5>
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
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(PriceCalulator);
