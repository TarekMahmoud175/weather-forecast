import React, { useEffect, useState } from "react";
import Container from "../components/container";
import { Row } from "react-bootstrap";
import TodayWeather from "../components/today-weather";
import OtherDayWeather from "../components/other-day-weather";
import { WeatherServices } from "../apis/Services/WeatherServices";

const Landing = () => {
  const [longitude, setlongitude] = useState(null);
  const [latitude, setlatitude] = useState(null);

  const getUserLocation = () => {
    const location = window.navigator && window.navigator.geolocation;
    if (location) {
      location.getCurrentPosition(
        (position) => {
          setlatitude(position.coords.latitude);
          setlongitude(position.coords.longitude);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  const [forecastResponse, setforecastResponse] = useState(null);
  const [todayWeather, settodayWeather] = useState(null);
  const [currentWeatherCondition, setcurrentWeatherCondition] = useState(null);

  useEffect(() => {
    if (longitude && latitude) {
      let requestLocation = `${latitude},${longitude}`;
      let num_of_days = 5;
      let show_map = true;

      WeatherServices.getLocalWeather(requestLocation, num_of_days, show_map)
        .then((res) => {
          settodayWeather(res?.data?.weather[0]);
          setcurrentWeatherCondition(res?.data?.current_condition[0]);
          let nextDaysWeather = res?.data?.weather.filter((x, i) => i !== 0);
          setforecastResponse(nextDaysWeather);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [longitude, latitude]);

  return (
    <Container>
      <Row>
        <div className="col-12 mt-5 mb-3">
          <TodayWeather
            weatherobj={todayWeather}
            weatherCondition={currentWeatherCondition}
          />
        </div>
      </Row>

      <Row>
        {forecastResponse?.map((forcastedDay, index) => (
          <div
            className="col-md-3 mt-3 mb-2"
            key={forcastedDay.date + "  " + index}
          >
            <OtherDayWeather
              weatherobj={forcastedDay}
              location={`${latitude},${longitude}`}
            />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default Landing;
