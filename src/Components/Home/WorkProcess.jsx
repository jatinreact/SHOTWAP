import React from "react";
import { Grid } from "@material-ui/core";

const WorkProcess = () => {
  return (
    <>
      <div>
        {/* WORKPROSCESSES section */}
        <section className="work_process">
          <div className="work_section_our">
            <div className="container">
              <div className="processs_div">
                <h2 className="text-center pt-5" style={{ color: "white" }}>
                  OUR WORK PROCESS
                </h2>
              </div>
              <Grid
                className="Component_main_grid"
                style={{ justifyContent: "space-around" }}
              >
                <Grid item md={2}>
                  <div className="p-2">
                    <div className="number text-center mt-5">
                      <span className="one_class">1</span>
                    </div>
                    <div className="process_para">
                      <p
                        className=""
                        style={{ color: "white", fontSize: "14px" }}
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item md={2}>
                  <div className="p-2">
                    <div className="number text-center mt-5">
                      <span className="one_class">2</span>
                    </div>
                    <div className="process_para">
                      <p
                        className=""
                        style={{ color: "white", fontSize: "14px" }}
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item md={2}>
                  <div className="p-2">
                    <div className="number text-center mt-5">
                      <span className="one_class">3</span>
                    </div>
                    <div className="process_para">
                      <p
                        className=""
                        style={{ color: "white", fontSize: "14px" }}
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item md={2}>
                  <div className="p-2">
                    <div className="number text-center mt-5">
                      <span className="one_class">4</span>
                    </div>
                    <div className="process_para">
                      <p
                        className=""
                        style={{ color: "white", fontSize: "14px" }}
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item md={2}>
                  <div className="p-2">
                    <div className="number text-center mt-5">
                      <span className="one_class">5</span>
                    </div>
                    <div className="process_para">
                      <p
                        className=""
                        style={{ color: "white", fontSize: "14px" }}
                      >
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
        </section>
      </div>
    </>
  );
};

export default WorkProcess;
