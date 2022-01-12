import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//material ui appbar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//css file
import "./Header.css";
//dialog box
import {
  Grid,
  Card,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import Dialogbox from "../../Components/dialogbox/Dialogbox";

const Header = (props) => {
  let navigate = useNavigate();
  /*local state */
  const [Sidebar, setSidebar] = useState(false);
  const [LoginDailogOpen, setLoginDailogOpen] = useState(false);
  const [SignDailogOpen, setSignDailogOpen] = useState(false);

  const logindata = () => {
    setLoginDailogOpen(!LoginDailogOpen);
  };
  /*function to open a sidebar */
  const setLoadingnewside = () => {
    document.getElementById("mySidenav").style.width = "250px";
    setSidebar(true);
  };

  /*function to close a sidebar */
  const Closesidebar = () => {
    document.getElementById("mySidenav").style.width = "0px";
    setSidebar(false);
  };
  return (
    <div className="topheader">
      <AppBar position="fixed" className="MainHeader">
        <Toolbar className="header_padding">
          <div className="header_link_color">
            <i onClick={() => navigate("/")}>SHOTWAP</i>
          </div>
          <div className="header_grow" />
          <div className="header_links">
            <span className="header_link_color" onClick={() => navigate("/")}>
              HOME
            </span>
            <span
              className="header_link_color"
              onClick={() => navigate("/aboutCompany")}
            >
              COMPANY
            </span>

            <span
              className="header_link_color"
              onClick={() => navigate("/contact")}
            >
              SUPPORT
            </span>
            <span
              className="header_link_color"
              // onClick={() => setLoginDailogOpen(!LoginDailogOpen)}
              onClick={logindata}
            >
              LOGIN
            </span>
            <span
              className="header_link_color"
              onClick={() => setSignDailogOpen(!SignDailogOpen)}
            >
              SIGNUP
            </span>
          </div>
          <div className="mobile_Burger_Menu">
            <span
              className="logout_Pointer_cursor mr-3 text-right mt-2"
              onClick={!Sidebar ? setLoadingnewside : Closesidebar}
            >
              <i class="fa fa-bars"></i>
            </span>

            <div id="mySidenav" className="sidenav">
              <div className="cross_icon_style">
                <i
                  class="fa fa-times cursor"
                  onClick={() => {
                    document.getElementById("mySidenav").style.width = "0px";
                    setSidebar(false);
                  }}
                ></i>
              </div>

              <span
                className="logout_Pointer_cursor"
                onClick={() => navigate("/aboutCompany")}
              >
                COMPANY
              </span>

              <span
                className="logout_Pointer_cursor"
                onClick={() => navigate("/contact")}
              >
                SUPPORT
              </span>
              <span
                className="logout_Pointer_cursor"
                onClick={() => setLoginDailogOpen(!LoginDailogOpen)}
              >
                LOGIN
              </span>
              <span
                className="logout_Pointer_cursor"
                onClick={() => setSignDailogOpen(!SignDailogOpen)}
              >
                SIGNUP
              </span>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {/* //////Signup dialog */}
      <Card className="Card_shadow ">
        <Dialog
          open={SignDailogOpen}
          aria-labelledby="form-dialog-title"
          maxWidth="sm"
          fullWidth="fullWidth"
        >
          <DialogTitle className="text-center">
            SIGNUP
            <span
              className="float-right icon_color"
              onClick={() => setSignDailogOpen(!SignDailogOpen)}
            >
              <i class="fa fa-times hover_cursor" aria-hidden="true"></i>{" "}
            </span>
          </DialogTitle>
          <DialogContent>
            <Grid className="Component_main_grid">
              <Grid item md={12} xs={12}>
                <div className="text_filed_heading pl-1 ">First Name</div>
                <div className=" mt-1 mr-2 mb-4">
                  <input
                    type="text"
                    className="form-control "
                    autoComplete="off"
                  />
                </div>
              </Grid>
              <Grid item md={12} xs={12}>
                <div className="text_filed_heading pl-1 ">Last Name</div>
                <div className=" mt-1 mr-2">
                  <input
                    type="number"
                    className="form-control "
                    autoComplete="off"
                  />
                </div>
              </Grid>
              <Grid item md={12} xs={12}>
                <div className="text_filed_heading pl-1 ">Company Name</div>
                <div className=" mt-1 mr-2">
                  <input
                    type="number"
                    className="form-control "
                    autoComplete="off"
                  />
                </div>
              </Grid>
              <Grid item md={12} xs={12}>
                <div className="text_filed_heading pl-1 ">Email</div>
                <div className=" mt-1 mr-2">
                  <input
                    type="number"
                    className="form-control "
                    autoComplete="off"
                  />
                </div>
              </Grid>
              <Grid item md={12} xs={12}>
                <div className="text_filed_heading pl-1 ">Contact Name</div>
                <div className=" mt-1 mr-2">
                  <input
                    type="number"
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
              <Grid item md={12} xs={12}>
                <div className="text_filed_heading pl-1 ">Confirm Password</div>
                <div className=" mt-1 mr-2">
                  <input
                    type="number"
                    className="form-control "
                    autoComplete="off"
                  />
                </div>
              </Grid>
            </Grid>
            <div className="forgot_passwords">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  I agree with Terms & Conditions
                </label>
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
      </Card>

      <Dialogbox open={LoginDailogOpen} close={logindata} />
    </div>
  );
};

export default Header;
