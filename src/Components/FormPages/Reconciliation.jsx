import React, { useEffect } from "react";
import HOC from "../../Common/HOC/HOC";
import { Grid, Card } from "@material-ui/core";
import "./formPages.css";
import FormTable from "../FormPages/FormTable";
import RecontionImage from "./RecontionImage";
//tabs
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Reconciliation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
      <div>
        <div className="home_padding">
          <div className="reconcilation p-2">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">
                Reconciliation
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto"></ul>
                <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0 mr-2"
                    type="submit"
                  >
                    <i class="fa fa-plus mr-2"></i>0
                  </button>
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    <i class="fa fa-plus mr-2"></i>New Orderd
                  </button>
                </form>
              </div>
            </nav>
          </div>

          {/* ///tabs */}
          <div className="tabs">
            <div className="container">
              <Box sx={{ bgcolor: "background.paper", width: 500 }}>
                <AppBar position="static">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                  >
                    <Tab label=" Action Required" {...a11yProps(0)} />
                    <Tab label=" Submitted" {...a11yProps(1)} />
                    <Tab label=" Accepted" {...a11yProps(2)} />
                    <Tab label=" Rejected" {...a11yProps(2)} />
                    <Tab label=" Images" {...a11yProps(2)} />
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={value}
                  onChangeIndex={handleChangeIndex}
                >
                  <TabPanel value={value} index={0} dir={theme.direction}>
                    <FormTable />
                  </TabPanel>
                  <TabPanel value={value} index={1} dir={theme.direction}>
                    <FormTable />
                  </TabPanel>
                  <TabPanel value={value} index={2} dir={theme.direction}>
                    <FormTable />
                  </TabPanel>
                  <TabPanel value={value} index={3} dir={theme.direction}>
                    <FormTable />
                  </TabPanel>
                  <TabPanel value={value} index={4} dir={theme.direction}>
                    <RecontionImage />
                  </TabPanel>
                </SwipeableViews>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default HOC(Reconciliation);
