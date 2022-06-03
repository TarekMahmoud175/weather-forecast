import React, { useEffect, useState } from "react";
import Container from "../components/container";
import { Row } from "react-bootstrap";
import TodayWeather from "../components/today-weather";
import OtherDayWeather from "../components/other-day-weather";
import Graph from "../components/d3-graph";
import { WeatherServices } from "../apis/Services/WeatherServices";

const CityWeather = ({ match }) => {
  const [forecastResponse, setforecastResponse] = useState(null);
  const [todayWeather, settodayWeather] = useState(null);
  const [currentWeatherCondition, setcurrentWeatherCondition] = useState(null);
  const [graphData, setgraphData] = useState(null);

  useEffect(() => {
    let requestLocation = match.params.location;
    let num_of_days = 5;
    let show_map = true;

    WeatherServices.getLocalWeather(requestLocation, num_of_days, show_map)
      .then((res) => {
        setgraphData(res?.data?.weather);
        settodayWeather(res?.data?.weather[0]);
        setcurrentWeatherCondition(res?.data?.current_condition[0]);
        let nextDaysWeather = res?.data?.weather.filter((x, i) => i !== 0);
        setforecastResponse(nextDaysWeather);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [match.params.location]);

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
              location={match.params.location}
            />
          </div>
        ))}
      </Row>

      <Row>
        <div className="col-12 my-4">
          {graphData ? (
            <Graph
              width={window.innerWidth * 0.5}
              height={window.innerHeight * 0.4}
              data={graphData}
            />
          ) : null}
        </div>
      </Row>
    </Container>
  );
};

export default CityWeather;
