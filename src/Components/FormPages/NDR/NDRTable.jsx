import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const NDRTable = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const rows = [
    {
      awd: "AWD",
    },
  ];

  const classes = useStyles();
  return (
    <div>
      {/* ///table section  */}
      <div>
        <div className="container">
          <div className="minifires_data_table mt-5 mb-5">
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontSize: "20px" }}>AWB</TableCell>
                    <TableCell style={{ fontSize: "20px" }}>Order ID</TableCell>
                    <TableCell style={{ fontSize: "20px" }}>Carrier</TableCell>

                    {/* <TableCell style={{ fontSize: "20px" }}>Carrier</TableCell>
                    <TableCell style={{ fontSize: "20px" }}>
                      Carrier Remark
                    </TableCell>
                    <TableCell style={{ fontSize: "20px" }}>Customer</TableCell>
                    <TableCell style={{ fontSize: "20px" }}>NDR Date</TableCell>

                    <TableCell style={{ fontSize: "20px" }}>
                      OFD Count
                    </TableCell> */}
                    <TableCell style={{ fontSize: "20px" }}>
                      Last OFD Date
                    </TableCell>
                    <TableCell style={{ fontSize: "20px" }}>Action</TableCell>
                    <TableCell style={{ fontSize: "20px" }}>
                      Seller Remark
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
  );
};

export default NDRTable;
