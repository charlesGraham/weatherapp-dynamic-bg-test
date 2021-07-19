import React, { useState } from "react";
import "../styles.css"
import Slider from "./Slider";

const apiKey = {
  key: "94d69f61c8b6a5d9b0e6a25481d73cab",
  url: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  // states that will change based on the search
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  // when the Enter key is pressed, the search function executes based on the text
  // pulled from the search box
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(
        `${apiKey.url}forecast?q=${query}&units=imperial&APPID=${apiKey.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  // configure the date output
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date} ${year}`;
  };

  return (

    <div
      className={
        typeof weather.city !== "undefined"
          ? weather.list[0].weather[0].main === "Clouds"
            ? "app clouds" 
              : weather.list[0].weather[0].main === "Rain"
                ? "app rain"
                  : weather.list[0].weather[0].main === "Clear"
                    ? "app sunny"
                      : "app"
        : "app"
      }
    >
      <main>

        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for a city..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />

          {/* if the type of city is defined, render the slider */}
          {typeof weather.city !== "undefined" ? (
            <div>
              <Slider
                weatherData={weather}
                date={dateBuilder(new Date())}
                temp={Math.round(weather.list[0].main.temp)}
                type={weather.list[0].weather[0].main}
                city={weather.city.name}
                country={weather.city.country}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        
      </main>
    </div>
  );
}

export default App;
