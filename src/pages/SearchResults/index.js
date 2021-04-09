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
import { getBranchResults, GetSalesMade } from "./fetchresults";
import Loader from "../../components/loader";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import '../../bootstrap.min.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const SearchResults = (props) => {
  const classes = useStyles();
  const [nrows, setRows] = React.useState([]);
  const [thebranchid, setTheBranchID] = React.useState([]);
  useEffect(() => {
    getBranchResults().then((response) => {
      console.log(response);
      if (response.success === true) {
        setRows(response.data.branches);
      }
    });
  }, []);
//   console.log(nrows);
// const branch_id = nrows.map((row) => row.id)
// const io = (props) => {
// 	finalBranch = nrows.map(())
// };
// console.log(branch_id);
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
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Branch Name </TableCell>
                <TableCell align="right">Location</TableCell>
                <TableCell align="right">Phone Number (WhatsApp) </TableCell>
                <TableCell align="right">Business Type </TableCell>
                <TableCell align="right">Started on</TableCell>
				<TableCell align="right"> View Sales Info </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {nrows.map((row) => (
                <TableRow key={row.id} io={row.id}>
                  <TableCell component="th" scope="row">
					  <Router>
						  <Link to="/">
						  	{row.name}
						  </Link>
					  </Router>
                  </TableCell>
                  <TableCell align="right">{row.location}</TableCell>
                  <TableCell align="right">{row.whatsAppPhone}</TableCell>
                  <TableCell align="right">{row.type}</TableCell>
                  <TableCell align="right">{row.startDate}</TableCell>
				  <TableCell align="right">
                    <button 
                        type="button" 
                        className="btn btn-secondary"
                        onClick = {()=> {localStorage.setItem('id', row.id); window.location.href='/sales'}}
                        >
                       View Sales  
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Footer />
    </div>
  );
};

export default SearchResults;