import React from 'react';
import SearchResults from './pages/SearchResults/index';
import SalesMade from './pages/SalesMade/index';
import SalesConstituents from './pages/Sales Constituents/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (

    <Router >
   
    <Switch>
           <Route
            exact 
            path="/"
            component={<SearchResults />}>
            <SearchResults />
            </Route>
            
            <Route
            exact 
            path="/sales"
            component={<SalesMade />}>
            <SalesMade />
            </Route>

            <Route
              exact
              path="/sales-constituents"
              component={<SalesConstituents />}>
              <SalesConstituents />
            </Route>
            </Switch>
       {/*  <SearchResults /> */}
            </Router>
  
  )
}

export default App;
