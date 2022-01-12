import React from "react";
import { Grid } from "@material-ui/core";
//image
// import a from "../images/user1.png";
const OurTeam = () => {
  return (
    <>
      <div>
        <section className="category_section">
          <div className="container">
            <div className=" team_meet">
              <Grid className="Component_main_grid">
                <Grid item md={4} sm={12} xs={12}>
                  <div className="john_box_img">
                    <div className="john_img"></div>
                    <div className="humar_resourecs d-flex">
                      <h3>
                        John
                        <br />
                        <span className="" style={{ fontSize: "20px" }}>
                          Human Resources
                        </span>
                      </h3>
                      <div>
                        <i class="fa fa-linkedin"></i>
                      </div>
                    </div>
                  </div>

                  <div className="john_box_second">
                    <div className="john_img"></div>
                    <div className="humar_resourecs d-flex">
                      <h3>
                        John
                        <br />
                        <span className="" style={{ fontSize: "20px" }}>
                          Human Resources
                        </span>
                      </h3>
                      <div>
                        <i class="fa fa-linkedin"></i>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                  <div className="john_box_img">
                    <div className="john_img"></div>
                    <div className="humar_resourecs d-flex">
                      <h3>
                        John
                        <br />
                        <span className="" style={{ fontSize: "20px" }}>
                          Human Resources
                        </span>
                      </h3>
                      <div>
                        <i class="fa fa-linkedin"></i>
                      </div>
                    </div>
                  </div>

                  <div className="john_box_second">
                    <div className="john_img"></div>
                    <div className="humar_resourecs d-flex">
                      <h3>
                        John
                        <br />
                        <span className="" style={{ fontSize: "20px" }}>
                          Human Resources
                        </span>
                      </h3>
                      <div>
                        <i class="fa fa-linkedin"></i>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                  <div className="john_box_img">
                    <div className="john_img"></div>
                    <div className="humar_resourecs d-flex">
                      <h3>
                        John
                        <br />
                        <span className="" style={{ fontSize: "20px" }}>
                          Human Resources
                        </span>
                      </h3>
                      <div>
                        <i class="fa fa-linkedin"></i>
                      </div>
                    </div>
                  </div>

                  <div className="john_box_second">
                    <div className="john_img"></div>
                    <div className="humar_resourecs d-flex">
                      <h3>
                        John
                        <br />
                        <span className="" style={{ fontSize: "20px" }}>
                          Human Resources
                        </span>
                      </h3>
                      <div>
                        <i class="fa fa-linkedin"></i>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <h2 className="text-center">Life At Shotwap</h2>
            <Grid className="Component_main_grid">
              <Grid item md={6} sm={12} xs={12}>
                <div className="part_team_member">
                  <div className="john_img"></div>
                </div>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <div className="part_team_member">
                  <div className="john_img"></div>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurTeam;
