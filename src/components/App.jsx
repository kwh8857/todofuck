import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./route/Main";
import Card from "./route/Card";
import Input from "./route/Input";
import "./css/core.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/card" exact component={Card}></Route>
        <Route path="/input" exact component={Input}></Route>
      </Switch>
    </Router>
  );
}

export default App;
