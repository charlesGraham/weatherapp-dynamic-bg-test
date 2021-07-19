import React from "react";

function Display(props) {
  return (
    <div>
      <div>
        <div className="location-box">
          <div className="location">
            {props.location}, {props.country}
          </div>
          <div className="date">{props.date}</div>
        </div>

        <div className="weather-box">
          <div className="temp">{props.temp}°F</div>
          <div className="weather">{props.weather}</div>
        </div>
      </div>
    </div>
  );
}

export default Display;
