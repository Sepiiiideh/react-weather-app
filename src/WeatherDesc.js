import React from "react";
export default function WeatherDesc() {
  return (
    <div className="col-4 WeatherDesc">
      <div id="city" className="city">
        Tehran
      </div>
      <div id="date" className="date">
        Sunday 19:42
      </div>
      <div id="condition" className="condition">
        clear sky
      </div>
    </div>
  );
}
