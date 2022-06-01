import { Col, Row } from "react-bootstrap";
import "./App.css";
import OtherDayWeather from "./components/other-day-weather";
import SideNav from "./components/side-nav";
import TodayWeather from "./components/today-weather";

function App() {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <Row>
          <Col md={3}> <SideNav></SideNav></Col>
          {/* <Row>
          <Col md={10}>
            <TodayWeather />
          </Col>
        </Row>
        <Row className="justify-content-center my-5">
          <Col className="d-flex justify-content-center">
            <OtherDayWeather />
          </Col>

          <Col className="d-flex justify-content-center">
            <OtherDayWeather />
          </Col>

          <Col className="d-flex justify-content-center">
            <OtherDayWeather />
          </Col>

          <Col className="d-flex justify-content-center">
            <OtherDayWeather />
          </Col>
        </Row> */}
        </Row>
      </div>
    </>
  );
}

export default App;
