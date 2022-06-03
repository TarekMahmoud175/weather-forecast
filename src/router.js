import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NotFound from "./pages/404";
import Landing from "./pages/landing";
import CityWeather from "./pages/weather-city";

const Pages = ({ state }) => (
  <>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/city/:location" component={CityWeather} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  </>
);

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Pages />
    </BrowserRouter>
  );
};

export default Router;
