import React from "react";
import cleareDay from "./Icons/clear-day.svg";
export default function Forecast() {
  return (
    <div className="row Forecast weather-forecast">
      <div className="col-2">
        <div className="weather-forecast-date">Sun</div>

        <img
          className="forecast-img"
          src={cleareDay}
          alt=""
          width="50"
        />
        <div className="weather-forecast-temprature">
          <span className="weather-forecast-temprature-max">24° </span>
          <span className="weather-forecast-temprature-min">18°</span>
        </div>
      </div>
      <div className="col-2">
        <div className="weather-forecast-date">Mon</div>

        <img
          className="forecast-img"
          src={cleareDay}
          alt=""
          width="50"
        />
        <div className="weather-forecast-temprature">
          <span className="weather-forecast-temprature-max">24° </span>
          <span className="weather-forecast-temprature-min">18°</span>
        </div>
      </div>
      <div className="col-2">
        <div className="weather-forecast-date">Tue</div>

        <img
          className="forecast-img"
          src={cleareDay}
          alt=""
          width="50"
        />
        <div className="weather-forecast-temprature">
          <span className="weather-forecast-temprature-max">24° </span>
          <span className="weather-forecast-temprature-min">18°</span>
        </div>
      </div>
      <div className="col-2">
        <div className="weather-forecast-date">Wed</div>

        <img
          className="forecast-img"
          src={cleareDay}
          alt=""
          width="50"
        />
        <div className="weather-forecast-temprature">
          <span className="weather-forecast-temprature-max">24° </span>
          <span className="weather-forecast-temprature-min">18°</span>
        </div>
      </div>
      <div className="col-2">
        <div className="weather-forecast-date">Tue</div>

        <img
          className="forecast-img"
          src={cleareDay}
          alt=""
          width="50"
        />
        <div className="weather-forecast-temprature">
          <span className="weather-forecast-temprature-max">24° </span>
          <span className="weather-forecast-temprature-min">18°</span>
        </div>
      </div>
      <div className="col-2">
        <div className="weather-forecast-date">Fri</div>

        <img
          className="forecast-img"
          src={cleareDay}
          alt=""
          width="50"
        />
        <div className="weather-forecast-temprature">
          <span className="weather-forecast-temprature-max">24° </span>
          <span className="weather-forecast-temprature-min">18°</span>
        </div>
      </div>
    </div>
  );
}
