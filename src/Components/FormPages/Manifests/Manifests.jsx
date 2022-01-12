import React, { useEffect } from "react";
import HOC from "../../../Common/HOC/HOC";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const NDR = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const rows = [
    {
      awd: "AWD",
      Carrier: "Carrier",
      Mode: "Mode",
      Quantity: "Quantity",
      Weight: "Weight",
      Declared: "Declared ",
      Carrier: "Carrier",
      Claimed: "Claimed",
      Status: "Status",
    },
    {
      awd: "AWD",
      Carrier: "Carrier",
      Mode: "Mode",
      Quantity: "Quantity",
      Weight: "Weight",
      Declared: "Declared ",
      Carrier: "Carrier",
      Claimed: "Claimed",
      Status: "Status",
    },
    {
      awd: "AWD",
      Carrier: "Carrier",
      Mode: "Mode",
      Quantity: "Quantity",
      Weight: "Weight",
      Declared: "Declared ",
      Carrier: "Carrier",
      Claimed: "Claimed",
      Status: "Status",
    },
  ];

  const classes = useStyles();
  return (
    <>
      <div className="home_padding">
        <div className="reconcilation p-2">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              Manifests(0)
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
        {/* ///table section  */}
        <div>
          <div className="container">
            <div className="minifires_data_table mt-5 mb-5">
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontSize: "20px" }}>Date</TableCell>
                      <TableCell style={{ fontSize: "20px" }}>
                        Manifest ID
                      </TableCell>

                      <TableCell style={{ fontSize: "20px" }}>
                        Carrier
                      </TableCell>
                      <TableCell style={{ fontSize: "20px" }}>Mode</TableCell>
                      <TableCell style={{ fontSize: "20px" }}>
                        Shipments
                      </TableCell>
                      <TableCell style={{ fontSize: "20px" }}>
                        Warehouse
                      </TableCell>

                      <TableCell style={{ fontSize: "20px" }}>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          12/1/2022
                        </TableCell>

                        <TableCell>##########</TableCell>
                        <TableCell>Carrier</TableCell>
                        <TableCell>COD</TableCell>
                        <TableCell>Shipment</TableCell>
                        <TableCell>Delhi</TableCell>
                        <TableCell>Success</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(NDR);
