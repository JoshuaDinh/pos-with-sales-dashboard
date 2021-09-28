import React, { useEffect } from "react";
import "./app.css";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/CheckOut" component={CheckOut} />
        <Route path="/Dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
