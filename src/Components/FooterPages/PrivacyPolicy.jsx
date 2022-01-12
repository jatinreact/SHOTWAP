import React, { useState, useEffect } from "react";
import { Grid, Card } from "@material-ui/core";
import transport from "../images/dock-cargo.png";
import HOC from "../../Common/HOC/HOC";
import Expand from "react-expand-animated";
const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [opendialogbox, setopendialogbox] = useState(false);
  const [opendialogboxsec, setopendialogboxsec] = useState(false);
  const [opendialogboxthird, setopendialogboxthird] = useState(false);
  const [opendialogboxfourth, setopendialogboxfourth] = useState(false);
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
                <h1>Privacy Policy</h1>
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
                    <h3>Privacy Policy</h3>
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
              <h3 className="text-center pt-4 mb-5">Privacy Policy</h3>
              <div className="text-center pl-5 pr-5 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                mauris arcu, lobortis id interdum vitae, interdum eget elit.
                Curabitur quis urna nulla. Suspendisse potenti. Duis suscipit
                ultrices maximus.
              </div>
            </div>
          </div>
        </div>
        {/* ///first */}
        <div>
          <div className="container">
            <Card className=" mb-2 Card_shadow p-3">
              <div
                onClick={() => setopendialogbox(!opendialogbox)}
                className="d-flex"
                style={{ cursor: "pointer" }}
              >
                <span className="mt-1 mr-2">
                  <i class="fa fa-plus"></i>
                </span>
                <h5 className="pt-1">Our Well Links</h5>
              </div>
            </Card>

            <Expand open={opendialogbox}>
              <Card className=" mb-2 Card_shadow p-3">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Card>
            </Expand>
          </div>
        </div>
        {/* //second */}
        <div>
          <div className="container">
            <Card className=" mb-2 Card_shadow p-3">
              <div
                onClick={() => setopendialogboxsec(!opendialogboxsec)}
                className="d-flex"
                style={{ cursor: "pointer" }}
              >
                <span className="mt-1 mr-2">
                  <i class="fa fa-plus"></i>
                </span>
                <h5 className="pt-1">World Wide Approach</h5>
              </div>
            </Card>

            <Expand open={opendialogboxsec}>
              <Card className=" mb-2 Card_shadow p-3">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Card>
            </Expand>
          </div>
        </div>

        {/* //third */}
        <div>
          <div className="container">
            <Card className=" mb-2 Card_shadow p-3">
              <div
                onClick={() => setopendialogboxthird(!opendialogboxthird)}
                className="d-flex"
                style={{ cursor: "pointer" }}
              >
                <span className="mt-1 mr-2">
                  <i class="fa fa-plus"></i>
                </span>
                <h5 className="pt-1">Our Well Links</h5>
              </div>
            </Card>

            <Expand open={opendialogboxthird}>
              <Card className=" mb-2 Card_shadow p-3">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Card>
            </Expand>
          </div>
        </div>

        {/* //fourth */}

        <div>
          <div className="container">
            <Card className=" mb-2 Card_shadow p-3">
              <div
                onClick={() => setopendialogboxfourth(!opendialogboxfourth)}
                className="d-flex"
                style={{ cursor: "pointer" }}
              >
                <span className="mt-1 mr-2">
                  <i class="fa fa-plus"></i>
                </span>
                <h5 className="pt-1">World Wide Approach</h5>
              </div>
            </Card>

            <Expand open={opendialogboxfourth}>
              <Card className=" mb-2 Card_shadow p-3">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Card>
            </Expand>
          </div>
        </div>
      </section>
    </>
  );
};

export default HOC(PrivacyPolicy);
