import React from "react";
import "./app.css";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/" component={CheckOut} />
      </Switch>
    </Router>
  );
};

export default App;
