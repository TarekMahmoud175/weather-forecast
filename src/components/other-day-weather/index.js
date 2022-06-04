import React from "react";
import Text from "../Text";
import Styles from "./other_day.module.css";
import Images from "../../constants/Images";
import moment from "moment";

const OtherDayWeather = ({ weatherobj, location }) => {
  /** handle changing icon based on temp */
  const handleIcon = (temp) => {
    if (temp >= 25) return "Sunny";
    else if (temp >= 15 && temp < 25) return "Partly cloudy";
    else if (temp < 15) return "light rain";
  };

  return (
    <div
      className={`${Styles.mainContainer} py-2 d-flex flex-column  align-items-center`}
    >
      <Text className={`${Styles.dayText}`} dontWrap={false}>
        {moment(weatherobj?.date, "YYYY-MM-DD").format("dddd")}
      </Text>
      <img
        src={Images[handleIcon(weatherobj?.avgtempC)]}
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
