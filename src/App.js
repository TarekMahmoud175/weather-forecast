import { Row } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SideNav from "./components/side-nav";
import Router from "./router";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
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
      </BrowserRouter>
    </>
  );
}

export default App;
