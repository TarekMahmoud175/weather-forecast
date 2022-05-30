import { Col, Row } from "react-bootstrap";
import "./App.css";
import TodayWeather from "./components/today-weather";

function App() {
  return (
    <Row className="justify-content-center my-5">
      <Col md={8}>
        <TodayWeather />
      </Col>
    </Row>
  );
}

export default App;
