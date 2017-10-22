import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AppBar from "./components/AppBar";
import Home from "./pages/Home";
import Create from "./pages/Create";

import "./App.css";

const App = () => (
  <div className="App">
    <AppBar title="Jedi admin" />
    <div className="App__content">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" component={Create} />
        <Redirect to="/" />
      </Switch>
    </div>
  </div>
);

export default App;
