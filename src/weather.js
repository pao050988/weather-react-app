import axios from "axios";
import React, { useState } from "react";

export default function Weather() {
  let [city, setCity] = useState("");
  let [returned, setReturned] = useState(false);
  let [Weather, setWeather] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `45c635f6554467de219d60506c6e3432`;
    let units = `metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setReturned(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a City." onChange={updateCity} />
      <button type="submit">Search</button>
    </form>
  );

  if (returned) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Weather.temperature}°C</li>
          <li>Description: {Weather.description}</li>
          <li>Humidity: {Weather.humidity}%</li>
          <li>Wind: {Weather.wind} km/h</li>
          <li>
            <img src={Weather.icon} alt={Weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
