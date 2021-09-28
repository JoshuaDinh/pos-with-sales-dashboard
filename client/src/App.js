import React, { useEffect } from "react";
import "./app.css";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { fetchEmployees } from "./Actions/employees";
import { connect } from "react-redux";

const App = ({ fetchEmployees }) => {
  useEffect(() => {
    fetchEmployees();
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/CheckOut" component={CheckOut} />
        <Route path="/Dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { fetchEmployees })(App);
