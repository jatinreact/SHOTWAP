import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import "./AboutCompany.css";
import trophy from "../images/trophy.png";
const Achivements = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <div className="achivements">
          <div>
            <Grid className="Component_main_grid">
              <Grid item md={1}></Grid>
              <Grid item md={2}>
                <div>
                  <h2 className="text-center">2018</h2>
                </div>
                <div className="trophy_img">
                  <img src={trophy} alt="" class="img-fluid" />
                </div>
                <div>
                  <h4 className="text-center">Achivements</h4>
                  <p className="text-center">
                    Started fixed contractual business
                  </p>
                </div>
              </Grid>
              <Grid item md={2}>
                <div>
                  <h2 className="text-center">2019</h2>
                </div>
                <div className="trophy_img">
                  <img src={trophy} alt="" class="img-fluid" />
                </div>
                <div>
                  <h4 className="text-center">Launched Mercury</h4>
                  <p className="text-center">
                    Application suite catering to vendor payment, client
                    billing, fleet management, client dashboard, driver app
                  </p>
                </div>
              </Grid>
              <Grid item md={2}>
                <div>
                  <h2 className="text-center">2020</h2>
                </div>
                <div className="trophy_img">
                  <img src={trophy} alt="" class="img-fluid" />
                </div>
                <div>
                  <h4 className="text-center">Launched guard App</h4>
                  <p className="text-center">
                    Application suite catering to vendor payment, client
                    billing, fleet management, client dashboard, driver app
                  </p>
                </div>
              </Grid>
              <Grid item md={2}>
                <div>
                  <h2 className="text-center">2021</h2>
                </div>
                <div className="trophy_img">
                  <img src={trophy} alt="" class="img-fluid" />
                </div>
                <div>
                  <h4 className="text-center">Achivements</h4>
                  <p className="text-center">
                    Started fixed contractual business
                  </p>
                </div>
              </Grid>
              <Grid item md={2}>
                <div>
                  <h2 className="text-center">2022</h2>
                </div>
                <div className="trophy_img">
                  <img src={trophy} alt="" class="img-fluid" />
                </div>
                <div>
                  <h4 className="text-center">Launched Mercury</h4>
                  <p className="text-center">
                    Application suite catering to vendor payment, client
                    billing, fleet management, client dashboard, driver app
                  </p>
                </div>
              </Grid>
              <Grid item md={1}></Grid>
            </Grid>
            <div>
              <h2 className="text-center mt-4">OUR TEAM</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achivements;
