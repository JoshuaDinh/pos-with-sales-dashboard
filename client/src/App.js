import React from "react";
import "./app.css";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <CheckOut />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
