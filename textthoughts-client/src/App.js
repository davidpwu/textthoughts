import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Navigation from "./components/navigation/navigation";
import HomePage from "./pages/home-page/home-page";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
