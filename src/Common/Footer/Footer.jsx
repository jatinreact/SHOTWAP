import React from "react";
import { Grid } from "@material-ui/core";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  let year = new Date().getFullYear();
  let navigate = useNavigate();
  return (
    <>
      <div className="footer_main work_section_our py-5">
        <div className="container">
          <div>
            <Grid className="Component_main_grid">
              <Grid item md={4}>
                <div>
                  <h1>
                    <i>SHOTWAP</i>
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                </div>
                <div className="footer_icons">
                  <i class="fa fa-facebook-square"></i>
                  <i class="fa fa-twitter-square"></i>
                </div>
                <div>
                  <p className="mt-4">{year} SHOTWAP. All Rights Resume</p>
                </div>
              </Grid>
              <Grid item md={2}>
                <div className="footer_all">
                  <div className="footer_ser">
                    <h5 className="">Services</h5>
                  </div>
                  <div className="service_footer">
                    <ul>
                      <li onClick={() => navigate("/pricingOffers")}>
                        Check prices
                      </li>
                      <li
                        onClick={() => navigate("/contact")}
                        style={{ cursor: "pointer" }}
                      >
                        Contact Us
                      </li>
                      <li
                        onClick={() => navigate("/faq")}
                        style={{ cursor: "pointer" }}
                      >
                        FAQ's
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>
              <Grid item md={2}>
                <div className="footer_all">
                  <div className="footer_ser">
                    <h5 className="">Company</h5>
                  </div>
                  <div className="service_footer">
                    <ul>
                      <li
                        onClick={() => navigate("/Companyinfo")}
                        style={{ cursor: "pointer" }}
                      >
                        About
                      </li>

                      <li onClick={() => navigate("/contact")}>
                        Coustomer Support
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>
              <Grid item md={2}>
                <div className="footer_all">
                  <div className="footer_ser">
                    <h5 className="">Information</h5>
                  </div>
                  <div className="service_footer">
                    <ul>
                      <li
                        onClick={() => navigate("/privacy")}
                        style={{ cursor: "pointer" }}
                      >
                        Privacy Policy
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>
              <Grid item md={2}>
                <div className="footer_all">
                  <div className="footer_ser">
                    <h5 className="">Contact US</h5>
                  </div>
                  <div className="service_footer">
                    <ul>
                      <li>Shotwap@gmail.com</li>
                      <li>981020XXXX</li>
                      <li>384 Crown Building U.S.A</li>
                    </ul>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
