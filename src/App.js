import { Row } from "react-bootstrap";
import "./App.css";
import SideNav from "./components/side-nav";
import Landing from "./pages/landing";
import CityWeather from "./pages/weather-city";
import Router from "./router";

function App() {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <Row>
          <div className="col-md-3">
            <SideNav />
          </div>

          <div className="col-md-9">
            <Router />
          </div>
        </Row>
      </div>
    </>
  );
}

export default App;
