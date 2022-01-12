import React from "react";
import { Grid } from "@material-ui/core";

const Happyclients = () => {
  return (
    <>
      <div>
        <div className="aboutcompany pt-5 pb-5">
          <div className="container">
            <Grid className="Component_main_grid">
              <Grid item md={4}>
                <div className="year">
                  <h2 className="para_color_common text-center">
                    1999
                    <br /> since we started
                  </h2>
                </div>
                {/* <div className="since_started">
                  <h2 className="text-center para_color_common">
                   
                  </h2>
                </div> */}
              </Grid>
              <Grid item md={4}>
                <div className="client_para">
                  <p className="para_color_common">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                </div>
              </Grid>
              <Grid item md={4}>
                <div className="happy_client">
                  <h2 className="para_color_common text-center">
                    {" "}
                    9,595
                    <br /> Happy Clients
                  </h2>
                </div>
                {/* <div className="happy_para">
                  <h2 className="para_color_common text-center">
                   
                  </h2>
                </div> */}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default Happyclients;
