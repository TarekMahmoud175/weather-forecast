import React from "react";
import Styles from "./todayCard.module.css";
import { Row, Col } from "react-bootstrap";
import Text from "../Text";
import Images from "../../constants/Images";

const TodayWeather = ({ weatherobj, weatherCondition }) => {
  return (
    <div className={`${Styles.container} px-4 py-4`}>
      <Row>
        <Col md={6} className={"d-flex flex-column align-items-between"}>
          <Text className={`${Styles.today} my-2`}>Today</Text>
          <Text className={`${Styles.degree} my-3`}>
            {weatherCondition?.temp_C}° C
          </Text>
          <Text className={`${Styles.status} my-3`} dontWrap={false}>
            {weatherCondition?.weatherDesc?.[0]?.value}
          </Text>
        </Col>
        <Col md={6}>
          <Row className="justify-content-center">
            <img
              src={Images[weatherCondition?.weatherDesc?.[0]?.value]}
              alt="weather-icon"
              className={`${Styles.icon}`}
            />
          </Row>
          <div className=" d-flex align-items-center justify-content-evenly my-3">
            <Text className={`${Styles.highLowText}`} dontWrap={false}>
              High: {weatherobj?.maxtempC}° C{" "}
            </Text>
            <Text className={`${Styles.highLowText}`} dontWrap={false}>
              Low: {weatherobj?.mintempC}° C
            </Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TodayWeather;
