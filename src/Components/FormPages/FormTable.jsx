import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

function FormTable() {
  const classes = useStyles();

  return (
    <>
      <div>
        <div className="content_padding">
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>AWD</TableCell>
                  <TableCell>Carrier</TableCell>
                  <TableCell>Mode</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Volumetric Weight</TableCell>
                  <TableCell>Declared Weight</TableCell>
                  <TableCell>Carrier Weight</TableCell>
                  <TableCell>Claimed Weight</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.awd}
                    </TableCell>

                    <TableCell>{row.Carrier}</TableCell>
                    <TableCell>{row.Mode}</TableCell>
                    <TableCell>{row.Quantity}</TableCell>
                    <TableCell>{row.Weight}</TableCell>
                    <TableCell>{row.Weight}</TableCell>
                    <TableCell>{row.Carrier}</TableCell>
                    <TableCell>{row.Claimed}</TableCell>
                    <TableCell>{row.Status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br />
        </div>
      </div>
    </>
  );
}
export default FormTable;
