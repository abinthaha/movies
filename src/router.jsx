import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginComponent from "./components/Login/Login";
import SignUpComponent from "./components/SignUp/SignUp";
import MoviesSearchComponent from "./components/MoviesList/MoviesList";
import HomePage from './components/Home/Home';

function RouterComponent() {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginComponent} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/sign-up" component={SignUpComponent} />
          <Route path="/home" component={HomePage} />
          <Route path="/search" component={MoviesSearchComponent} />
        </Switch>
      </Router>
    </main>
  );
}

export default RouterComponent;
