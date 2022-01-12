import React from "react";
import {
  Grid,
  Card,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Dialogbox = (props) => {
  let navigate = useNavigate();
  let state = useLocation();
  console.log("state", props);

  return (
    <>
      <Dialog
        open={props.open}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        fullWidth="fullWidth"
        onClose={() => {
          props.close();
        }}
      >
        <DialogTitle className="text-center">
          LOGIN
          <span className="float-right icon_color">
            <i
              class="fa fa-times hover_cursor"
              aria-hidden="true"
              onClick={() => {
                props.close();
              }}
            ></i>{" "}
          </span>
        </DialogTitle>
        <DialogContent>
          <Grid className="Component_main_grid">
            <Grid item md={12} xs={12}>
              <div className="text_filed_heading pl-1 ">Email</div>
              <div className=" mt-1 mr-2 mb-4">
                <input
                  type="text"
                  className="form-control "
                  autoComplete="off"
                />
              </div>
            </Grid>
            <Grid item md={12} xs={12}>
              <div className="text_filed_heading pl-1 ">Password</div>
              <div className=" mt-1 mr-2">
                <input
                  type="number"
                  className="form-control "
                  autoComplete="off"
                />
              </div>
            </Grid>
          </Grid>
          <div className="forgot_password">
            <div>
              <p>Forgot Password?</p>
            </div>
            <div>
              <p>Signup</p>
            </div>
          </div>

          <div className="pricing_btn text-center mt-3 mb-4">
            <button
              type="button"
              class="pricing_button"
              onClick={() => navigate("/loginHome")}
            >
              Continue
            </button>
          </div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
};

export default Dialogbox;
