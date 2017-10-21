import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import logo from "./logo.svg";
import Home from "./pages/Home.container";
import Create from "./pages/Create.container";
import "./App.css";

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2> Welcome to React </h2>
    </div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create" component={Create} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
