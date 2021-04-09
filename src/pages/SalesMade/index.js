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
import { GetSalesMade } from "../SearchResults/fetchresults";
import Loader from "../../components/loader";
// import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { TablePagination } from "@material-ui/core";
import '../../bootstrap.min.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const SalesMade = () => {
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
    GetSalesMade().then((response) => {
    //////  console.log(response);
      if (response.success === true) {
        setRows(response.data.sales);
      }
    });
  }, []);
  console.log("dsd")
  console.log(JSON.stringify(nrows));

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
                <TableCell>Sales Type </TableCell>
                <TableCell align="right"> Payment Type </TableCell>
                <TableCell align="right"> Discount </TableCell>
                <TableCell align="right"> Receipt Number </TableCell>
                <TableCell align="right">Created on</TableCell>
                <TableCell align="right"> Sales Constituents </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(nrows)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.type}
                  </TableCell>
                  <TableCell align="right">{row.paymentType}</TableCell>
                  <TableCell align="right">{row.discount}</TableCell>
                  <TableCell align="right">{row.receiptNumber}</TableCell>
                  <TableCell align="right">{row.created_at}</TableCell>
                  <TableCell align="right"> 
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => {localStorage.setItem('forsales', row.id);console.log("id is",row.id); window.location.href='/sales-constituents';}}>
                      View Sales Constituents
                    </button>
                    {/* <details>
                      <summary>
                        Sales Constituents 
                      </summary>
                    </details> */}
                  </TableCell>
                </TableRow>
              ))}
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

export default SalesMade;