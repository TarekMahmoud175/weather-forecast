import React, { useEffect } from "react";
import Text from "../Text";
import Styles from "./other_day.module.css";
import Images from "../../constants/Images";
import { WeatherServices } from "../../apis/Services/WeatherServices";
import moment from "moment";

const OtherDayWeather = ({ weatherobj }) => {
  return (
    <div
      className={`${Styles.mainContainer} py-2 d-flex flex-column  align-items-center`}
    >
      <Text className={`${Styles.dayText}`} dontWrap={false}>
        {moment(weatherobj?.date,"YYYY-MM-DD").format("dddd")}
      </Text>
      <img
        src={Images.Sunny}
        className={`${Styles.weatherIcon}`}
        alt="weather-icon"
      />
      <Text className={`${Styles.tempText}`} dontWrap={false}>
        {weatherobj?.avgtempC}° C
      </Text>
    </div>
  );
};

export default OtherDayWeather;
