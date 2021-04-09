import React, { useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
//import Menu from "../../components/menu";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { getSalesConstituents } from "../SearchResults/fetchresults";
import Loader from "../../components/loader";
// import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { TablePagination } from "@material-ui/core";
import '../../bootstrap.min.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const SalesConstituents = () => {
  const classes = useStyles();
  const [nrows, setRows] = React.useState([]);
  const [ page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [dense, setDense] = React.useState(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, nrows.length - page * rowsPerPage);
  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };
  useEffect(() => {
    getSalesConstituents().then((response) => {
    //////  console.log(response);
      if (response.success === true) {
          console.log("ohie")
          console.log(response.data)
         setRows(response.data.sale_entries);
      }
    });
  }, []);
  console.log(JSON.stringify(nrows));

  //const fortotalamount = nrows.map((row) => row.id)
  //const totamountpaid = parseInt(fortotalamount.costPrice) + parseInt(fortotalamount.discount)
  return (
    <div>
      <Header />
	  &nbsp;
	  &nbsp;
	  &nbsp;
	  &nbsp;
	  <p></p>
      {nrows.length == 0 ? (
        <Loader />
      ) : (
        <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product ID </TableCell>
                <TableCell align="right"> Branch ID </TableCell>
                <TableCell align="right"> Customer ID </TableCell>
                <TableCell align="right"> Discount </TableCell>
                <TableCell align="right"> Cost Price </TableCell>
                <TableCell align="right"> Selling Price </TableCell>
                <TableCell align="right"> Quanity </TableCell>
                <TableCell align="right"> Entry Date </TableCell>
                <TableCell align="right"> Product Name </TableCell>
                <TableCell align="right"> Product Summary </TableCell>
                <TableCell align="right"> Product Category ID </TableCell>
                <TableCell align="right"> Product Weight </TableCell>
                <TableCell align="right"> Product Image </TableCell>
                <TableCell align="right"> Total Amount Paid </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(nrows)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                  const totalamountpaid = row.costPrice + row.discount
                  return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">{row.productId}</TableCell>
                  <TableCell align="right">{row.branchId}</TableCell>
                  <TableCell align="right">{row.customerId}</TableCell>
                  <TableCell align="right">{row.discount}</TableCell>
                  <TableCell align="right">{row.costPrice}</TableCell>
                  <TableCell align="right">{row.sellingPrice}</TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">{row.entryDate}</TableCell>
                  <TableCell align="right">{row.product.name}</TableCell>
                  <TableCell align="right">{row.product.summary}</TableCell>
                  <TableCell align="right">{row.product.productCategoryId}</TableCell>
                  <TableCell align="right">{row.product.weight}</TableCell>
                  <TableCell align="right">{row.product.image}</TableCell>
                  <TableCell align="right">
                      {totalamountpaid}
                  </TableCell>
                </TableRow>
                )
            })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows}}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination 
          rowsPerPageOptions={[5]}
          component="div"
          count={nrows.length}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SalesConstituents;