import React from "react";
import ForecastIcon from "./ForecastIcon.js";
import "./Weather.css";


export default function WeatherForecastDay(props) {
  let iconData = props.data.weather[0];
  let day = new Date(props.data.sunrise * 1000);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let today = days[day.getDay()];

  return (
    <div>
      <div>{today}</div>
      <ForecastIcon data={iconData} />
      <div>
        <span className="tempMax">{Math.round(props.data.temp.max)}&deg;C</span>
        <span className="tempMin">{Math.round(props.data.temp.min)}&deg;C</span>
      </div>
      <div></div>
    </div>
  );
}
