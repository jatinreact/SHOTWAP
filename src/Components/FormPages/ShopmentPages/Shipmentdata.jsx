import React, { useEffect } from "react";
import { Grid, Card } from "@material-ui/core";
import nodata from "../../images/nodata.png";
import HOC from "../../../Common/HOC/HOC";

const Shipmentdata = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="home_padding">
        <div>
          <Card className="Card_shadow">
            <div
              className="d-flex p-3 "
              style={{ justifyContent: "space-between" }}
            >
              <h5>Shipment</h5>

              <h5>Total Images : 0</h5>
            </div>

            {/* image part */}

            <div className="">
              <div className="d-flex mt-4" style={{ justifyContent: "center" }}>
                <Grid className="Component_main_grid">
                  <Grid item md={6}>
                    <div className="text-center">
                      <img
                        style={{ width: "400px", width: "400px  " }}
                        src={nodata}
                        alt=""
                        id="img"
                        className="profile_Edit"
                      />
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div className="profile_tab profile_input pt-5 ml-3">
                      <input
                        type="file"
                        accept="image/*"
                        name="image-upload"
                        id="input"
                      />

                      <label
                        className="resumeview_image_upload"
                        htmlFor="input"
                      >
                        <i class="fa fa-camera mr-1"></i>upload
                      </label>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="start_btn text-center">
                <button type="button" class="GET_BTN">
                  Submit
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HOC(Shipmentdata);
