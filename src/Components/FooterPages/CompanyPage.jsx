import React, { useState, useEffect } from "react";
import { Grid, Card } from "@material-ui/core";
import transport from "../images/dock-cargo.png";
import HOC from "../../Common/HOC/HOC";
import Expand from "react-expand-animated";
import ab from "../images/aboutus.png";
import "./Contact.css";
const CompanyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [opendialogbox, setopendialogbox] = useState(false);
  const [opendialogboxsec, setopendialogboxsec] = useState(false);
  const [opendialogboxthird, setopendialogboxthird] = useState(false);
  const [opendialogboxfourth, setopendialogboxfourth] = useState(false);
  return (
    <>
      <section>
        <div className="home_padding">
          <div>
            <div className="contact_banner">
              <img src={transport} alt="contact" />
            </div>
          </div>
          <div className="contact_post">
            <div className="container">
              <div className="contact_banner_form">
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between", color: "#FFF" }}
                >
                  <div className="contact_des">
                    <h3>About Our Company</h3>
                  </div>
                  <div className="contact_des">
                    <h3>Home</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div>
              <Grid className="Component_main_grid">
                <Grid item md={6}>
                  <div className="company_truk_ing">
                    <img src={ab} alt="" />
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div className="p-3">
                    <div className="mt-5">
                      <h3>Lets Spread </h3>
                      <h6 className="mt-2">The Products World Wide</h6>
                      <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc mauris arcu, lobortis id interdum vitae, interdum
                        eget elit. Curabitur quis urna nulla. Suspendisse
                        potenti. Duis suscipit ultrices maximus.
                      </p>
                    </div>
                    <div className="start_btn" style={{ float: "right" }}>
                      <button type="button" class="GET_BTN">
                        Learn More
                      </button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </section>

          <section>
            <div className="container">
              <Grid className="Component_main_grid">
                <Grid item md={6}>
                  <div className="p-3">
                    <div className="mt-5">
                      <h3>The Best Skillset</h3>
                      <h6 className="mt-2">Available in Our Market</h6>
                      <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc mauris arcu, lobortis id interdum vitae, interdum
                        eget elit. Curabitur quis urna nulla. Suspendisse
                        potenti. Duis suscipit ultrices maximus.
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item md={6} lg={6} xs={12}>
                  <div className="m-5">
                    <label for="exampleInputEmail1">Customer Support</label>
                    <div class="progress">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="mt-3">
                      <label for="exampleInputEmail1">
                        Available In 170 Countries
                      </label>
                    </div>

                    <div class="progress ">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="mt-3">
                      <label for="exampleInputEmail1">Shipping Rate</label>
                    </div>

                    <div class="progress ">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default HOC(CompanyPage);
