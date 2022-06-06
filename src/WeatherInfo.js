import React from "react";
import cloudy from './Icons/cloudy.svg';
export default function WeatherInfo() {
  return (
    <div className="WeatherInfo col-8">
      <div className="clear-fix">
        <img
          id="icon"
          className="weather-Img"
          src={cloudy}
          alt="cloudy"
        />
        <div className="degree">
          <span id="temperature" className="degree-Number">
            6
          </span>
          <div className="degree-Metrics">
            <a id="celcius-link" className="active" href="./">
              °C
            </a>
            |
            <a id="farenhite-link" href="./">
              °F
            </a>
          </div>
        </div>
        <div id="weather-Conditions" className="weather-Conditions">
          <ul>
            <li>
              Humidity: <span id="humidity">48</span>%
            </li>
            <li>
              Wind: <span id="wind">14</span> mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
