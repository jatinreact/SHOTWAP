import React from "react";

import { Grid, Card } from "@material-ui/core";

import NDRTable from "./NDRTable";

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
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={value}
                  onChangeIndex={handleChangeIndex}
                >
                  <TabPanel value={value} index={0} dir={theme.direction}>
                    <NDRTable />
                  </TabPanel>
                  <TabPanel value={value} index={1} dir={theme.direction}>
                    <NDRTable />
                  </TabPanel>

                  <TabPanel
                    value={value}
                    index={4}
                    dir={theme.direction}
                  ></TabPanel>
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

export default Reconciliation;
