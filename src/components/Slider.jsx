import React from "react";
import { Carousel } from "react-responsive-carousel";

function Slider(props) {
  let weather = props.weatherData;
  let city = props.city;
  let country = props.country;

  //loop through weather object and create new array with temperatures pulled
  //from list.main.temp
  const temps = weather.list.map(function(weatherTemp) {
    return weatherTemp.main.temp;
  });

  //loop through weather object and create new array with weather types pulled
  //from list.weather[0].main
  const types = weather.list.map(function(weatherType) {
    return weatherType.weather[0].main;
  });

  //loop through weather object and create new array with weather types pulled
  //from list.weather[0].main
  const times = weather.list.map(function(weatherTimes) {
    return weatherTimes.dt_txt;
  });


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
<<<<<<< HEAD
              <div className="date">{times[0]}</div>
=======
              <div className="date">{props.date}</div>
>>>>>>> master
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
<<<<<<< HEAD
              <div className="date">{times[1]}</div>
=======
              <div className="date">{props.date}</div>
>>>>>>> master
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
<<<<<<< HEAD
            <div className="date">{times[2]}</div>
=======
            <div className="date">{props.date}</div>
>>>>>>> master
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
<<<<<<< HEAD
            <div className="date">{times[3]}</div>
=======
            <div className="date">{props.date}</div>
>>>>>>> master
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
<<<<<<< HEAD
            <div className="date">{times[4]}</div>
=======
            <div className="date">{props.date}</div>
>>>>>>> master
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
