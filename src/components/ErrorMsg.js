import React from "react";
import { Col, Row } from "react-bootstrap";
import Text from "./Text";

const ErrorMsg = ({ msg }) => {
  return (
    <Row className={`justify-content-center text-center`}>
      <Col>
        <Text style={Styles.errMsg} dontWrap={false}>
          {msg}
        </Text>
      </Col>
    </Row>
  );
};

export default ErrorMsg;

const Styles = {
  errMsg: {
    fontSize: "var(--fs-60)",
    fontFamily: "var(--ff-poppinsMedium)",
    marginTop: "30%",
  },
};
