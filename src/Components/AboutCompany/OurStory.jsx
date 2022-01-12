import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import "./AboutCompany.css";
import ventured from "../images/Ventured_img.png";
import Milestone from "../images/Milestone.png";

const OurStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="">
        <div className="category_section">
          <div className="container">
            <div className="ourStory text-center mp-5 pb-5">
              <h1 className="pt-5">OUR STORY</h1>
            </div>
            <div className="ourstory_paragr">
              <h5>What is Lorem ipsum?</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur explicabo accusamus doloribus nostrum eligendi
                reprehenderit, neque commodi aperiam quas molestiae veritatis
                delectus atque iste, deserunt voluptatibus ipsam eius qui quia.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur explicabo accusamus doloribus nostrum eligendi
                reprehenderit, neque commodi aperiam quas molestiae veritatis
                delectus atque iste, deserunt voluptatibus ipsam eius qui quia.
              </p>
            </div>
            <div className="ourstory_paragr">
              <h5>Why do we use it?</h5>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            {/* //section ventures */}
            <section>
              <div className="ventured_section">
                <Grid className="Component_main_grid ">
                  <Grid item md={6}>
                    <div>
                      <div className="ventured_img">
                        <img
                          src={ventured}
                          alt="ventured"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h4 className="text-center"> Ventured into LTL</h4>
                      </div>
                      <div>
                        <p className="text-center">
                          LTL pilot in integration with FedEx, Delivery, Safex
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div className="ventured_img">
                      <img
                        src={Milestone}
                        alt="ventured"
                        className="img-fluid"
                      />
                    </div>
                    <h4 className="text-center"> Milestone</h4>
                    <p className="text-center">
                      Started serving 28,000 pin codes PAN India, working with 7
                      carriers providing 11 different services
                    </p>
                  </Grid>
                </Grid>
              </div>
            </section>

            {/* ///achivement section */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
