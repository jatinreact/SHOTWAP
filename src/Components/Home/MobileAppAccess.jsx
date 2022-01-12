import React from "react";
import "./Home.css";
import { Grid, Card, TextField } from "@material-ui/core";
import Settings from "../images/Settings.gif";
import warehousedelivery from "../images/warehousedelivery.gif";
import mobile from "../images/mobile.png";
import deliverytruckloadin from "../images/deliverytruckloadin.gif";

const MobileAppAccess = () => {
  return (
    <>
      <section>
        <div>
          <div className="category_sectionn">
            <div className="container">
              <div className="mobile_app_heading mb-5">
                <h2 className="" style={{ float: "right" }}>
                  Mobile App Access
                </h2>
              </div>
              <div className="support_main_div">
                <Grid className="Component_main_grid">
                  <Grid item md={4}>
                    <div className="p-4 mt-5">
                      <div className="setting_img">
                        <img src={Settings} alt="" className="img-fluid" />
                      </div>
                      <div className="setting_heading">
                        <h3 className="text-center  mt-1">24/7 support</h3>
                      </div>
                      <div className="setting_paragraph p-2">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="delevrytruck">
                        <img
                          src={deliverytruckloadin}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="setting_heading">
                        <h3 className="text-center  mt-1">Best Feedback</h3>
                      </div>
                      <div className="setting_paragraph p-2">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={4}>
                    <img src={mobile} alt="" className="img-fluid" />
                  </Grid>
                  <Grid item md={4}>
                    <div className="">
                      <div className="delevrytruck">
                        <img
                          src={deliverytruckloadin}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="setting_heading">
                        <h3 className="text-center  mt-1">Active work</h3>
                      </div>
                      <div className="setting_paragraph p-4">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="warehouse_img">
                        <img
                          src={warehousedelivery}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="setting_heading">
                        <h3 className="text-center  mt-1">Ware House</h3>
                      </div>
                      <div className="setting_paragraph p-4">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book
                        </p>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileAppAccess;
