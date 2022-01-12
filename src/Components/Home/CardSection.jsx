import React from "react";
import { Grid, Card, TextField } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
const CardSection = () => {
  const currencies = [
    {
      value: "USD",
      label: "CM",
    },
    {
      value: "EUR",
      label: "CM",
    },
    {
      value: "BTC",
      label: "CM",
    },
    {
      value: "JPY",
      label: "CM",
    },
  ];
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      {/* card section */}
      <section className="category_section pt-5 pb-5">
        <div className="container">
          <Grid className="Component_main_grid">
            <Grid item md={8}>
              <Card className="Card_shadow p-4">
                <div>
                  <Grid className="Component_main_grid">
                    <Grid item md={4}>
                      <TextField
                        required
                        id="outlined-required"
                        label="PICKUP PINCODE"
                      />
                    </Grid>
                    <Grid item md={4}>
                      <TextField
                        required
                        id="outlined-required"
                        label="DESTINATION PINCODE"
                      />
                    </Grid>
                    <Grid item md={4}>
                      <TextField
                        required
                        id="outlined-required"
                        label="WEIGHT(In Kg)"
                      />
                    </Grid>
                  </Grid>
                </div>
                <h6 className="mt-3 mb-3">Add Dimensions</h6>
                <div>
                  <Grid className="Component_main_grid">
                    <Grid item md={3}>
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="CM"
                        value={currency}
                        onChange={handleChange}
                        helperText="Please select item cm"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item md={3}>
                      <TextField
                        required
                        id="outlined-required"
                        label="LENGTH"
                      />
                    </Grid>
                    <Grid item md={3}>
                      <TextField
                        required
                        id="outlined-required"
                        label="HEIGHT"
                      />
                    </Grid>
                    <Grid item md={3}>
                      <TextField
                        required
                        id="outlined-required"
                        label="WIDTH"
                      />
                    </Grid>
                  </Grid>
                </div>
              </Card>
            </Grid>
          </Grid>
          <div className="pricing_btn text-center mt-3">
            <button type="button" class="pricing_button">
              PRICING
            </button>
            {/* 3 card secton  */}

            <div className="mt-5 mb-5">
              <Grid className="Component_main_grid">
                <Grid item md={4}>
                  <div className="p-2">
                    <Card className="Card_shadow_white p-5">
                      <div className="box">
                        <h3 className="text-center mb-3">24/7 ON WORK</h3>
                        <p className="" style={{ fontSize: "15px" }}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book
                        </p>
                      </div>
                    </Card>
                  </div>
                </Grid>
                <Grid item md={4} className="Card_shadow_color">
                  <div className="p-2">
                    <Card className="Card_shadow_white p-5">
                      <div className="box">
                        <h3 className="text-center mb-3">24/7 ON WORK</h3>
                        <p className="" style={{ fontSize: "15px" }}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book
                        </p>
                      </div>
                    </Card>
                  </div>
                </Grid>
                <Grid item md={4}>
                  <div className="p-2">
                    <Card className="Card_shadow_white p-5">
                      <div className="box">
                        <h3 className="text-center mb-3">24/7 ON WORK</h3>
                        <p className="" style={{ fontSize: "15px" }}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book
                        </p>
                      </div>
                    </Card>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardSection;
