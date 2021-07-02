import React from "react";
import { Carousel } from "react-responsive-carousel";

function Slider(props) {
  let weather = props.weatherData;
  let date = props.date;
  let city = props.city;
  let country = props.country;

  const temps = [
    weather.list[0].main.temp,
    weather.list[1].main.temp,
    weather.list[2].main.temp,
    weather.list[3].main.temp,
    weather.list[4].main.temp
  ];

  const types = [
    weather.list[0].weather[0].main,
    weather.list[1].weather[0].main,
    weather.list[2].weather[0].main,
    weather.list[3].weather[0].main,
    weather.list[4].weather[0].main
  ];

  const times = [
    weather.list[0].dt_txt,
    weather.list[1].dt_txt,
    weather.list[2].dt_txt,
    weather.list[3].dt_txt,
    weather.list[4].dt_txt
  ];


  return (
    <div>
      <Carousel>
        <div>
          {/* slide 1 */}
          <div>
            <div className="location-box">
              <div className="location">
                {city}, {country}
              </div>
              <div className="date">{date}</div>
            </div>

            <div className="weather-box">
              <div className="temp">{Math.round(temps[0])}°F</div>
              <div className="weather">{types[0]}</div>
            </div>
          </div>
        </div>
        <div>
          {/* slide 2 */}
          <div>
            <div className="location-box">
              <div className="location">
                {city}, {country}
              </div>
              <div className="date">{times[1]}</div>
            </div>

            <div className="weather-box">
              <div className="temp">{Math.round(temps[1])}°F</div>
              <div className="weather">{types[1]}</div>
            </div>
          </div>
        </div>
        {/* slide 3 */}
        <div>
          <div className="location-box">
            <div className="location">
              {city}, {country}
            </div>
            <div className="date">{times[2]}</div>
          </div>

          <div className="weather-box">
            <div className="temp">{Math.round(temps[2])}°F</div>
            <div className="weather">{types[2]}</div>
          </div>
        </div>
        {/* slide 4 */}
        <div>
          <div className="location-box">
            <div className="location">
              {city}, {country}
            </div>
            <div className="date">{times[3]}</div>
          </div>

          <div className="weather-box">
            <div className="temp">{Math.round(temps[3])}°F</div>
            <div className="weather">{types[3]}</div>
          </div>
        </div>
        {/* slide 5 */}
        <div>
          <div className="location-box">
            <div className="location">
              {city}, {country}
            </div>
            <div className="date">{times[4]}</div>
          </div>

          <div className="weather-box">
            <div className="temp">{Math.round(temps[4])}°F</div>
            <div className="weather">{types[4]}</div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
