import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import HOC from "../../../Common/HOC/HOC";

function ShipmentPage() {
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
      <div>
        <div className="content_padding">
          <div className="m-5 pt-5">
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontSize: "20px" }}>Order ID</TableCell>
                    <TableCell style={{ fontSize: "20px" }}>Date</TableCell>
                    <TableCell style={{ fontSize: "20px" }}>
                      Shipment ID
                    </TableCell>
                    <TableCell style={{ fontSize: "20px" }}>Customer</TableCell>
                    <TableCell style={{ fontSize: "20px" }}>Value</TableCell>
                    <TableCell style={{ fontSize: "20px" }}>
                      Warehouse
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        ######
                      </TableCell>

                      <TableCell>12/1/2022</TableCell>

                      <TableCell>1111111</TableCell>
                      <TableCell>User</TableCell>
                      <TableCell>20</TableCell>
                      <TableCell>Noida</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
export default HOC(ShipmentPage);
