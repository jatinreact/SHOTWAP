import React, { useEffect } from "react";
import HOC from "../../Common/HOC/HOC";
import transport from "../images/dock-cargo.png";
import { Grid, Card } from "@material-ui/core";
///csss
import "./Contact.css";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <div className="home_padding">
          <div>
            <div className="contact_banner">
              <div>
                <img src={transport} alt="contact" />
              </div>
              <div className="contect_heading">
                <h1>Contact Us </h1>
              </div>
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
                    <h3>Contact us</h3>
                  </div>
                  <div className="contact_des">
                    <h3>Home</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="category_sect">
          <div className="container">
            <div className="heading_contact">
              <h3 className="text-center pt-4 mb-5">Contact Us</h3>
              <div className="text-center pl-5 pr-5 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                mauris arcu, lobortis id interdum vitae, interdum eget elit.
                Curabitur quis urna nulla. Suspendisse potenti. Duis suscipit
                ultrices maximus.
              </div>
            </div>
          </div>
        </div>

        <div>
          <Grid className="Component_main_grid">
            <Grid item md={6}>
              <Card className="Card_shadow m-5">
                <div className="p-3">
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Subject"
                    />
                  </div>
                  <div className="col-md-12 pb-3">
                    <textarea
                      rows={3}
                      class="form-control"
                      placeholder="Your Message"
                    />
                  </div>
                </div>
                <div className="pricing_btn text-right mb-3 mr-4">
                  <button type="button" class="pricing_button">
                    Lets Get In Touch
                  </button>
                </div>
              </Card>
            </Grid>

            <Grid item md={6}>
              <>
                <div className="p-5">
                  <h3>Rakib Worldwide </h3>
                  <p>
                    Our London Agency Address: 309, New Cavendish St, EC1Y 3WK
                  </p>
                  <p>0800 214 5252</p>
                  <p>0800 214 5253</p>
                  <p>example@gmail.com</p>
                  <p>example@gmail.com</p>
                  <p>Mon-Fri: 9am-5pm</p>
                </div>
              </>
            </Grid>
          </Grid>
          {/* //stay connected */}
          <section>
            <div>
              <div className="container">
                <div>
                  <h2 className="mb-3 ml-2">Stay Connected</h2>
                </div>
                <Grid className="Component_main_grid">
                  <Grid item md={4} xs={12}>
                    <div className="">
                      <div className="col-md-12 pb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <div className="">
                      <div className="col-md-12 pb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Company"
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <div className="">
                      <div className="col-md-12 pb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <div className="pricing_btn text-right mb-3 mr-4">
                  <button type="button" class="pricing_button">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default HOC(Contact);
