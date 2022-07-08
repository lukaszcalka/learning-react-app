import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { fetchJSON } from "../../helpers/helpers";

function WeatherRetrieve (props) {
    let [cityName, setCityName] = useState("");
    // we need to provide an openweathermap api key for the app to work
    const apiKey = "";
    const geoApiURI = "http://api.openweathermap.org/geo/1.0/direct?q=";
    const apiURI = "http://api.openweathermap.org/data/2.5/weather?units=metric&lang=en&appid=" + apiKey;
  
  function onChange(e) {
    setCityName(e.target.value);
  }

  
  async function OnSubmit(e) {
    e.preventDefault();
    var uri =
        geoApiURI + cityName + "&limit=1&appid=" + apiKey;
    var cityData = await fetchJSON(uri);
    var lat = cityData[0].lat;
    var lon = cityData[0].lon;
    var dataUri = apiURI + "&lon=" + lon + "&lat=" + lat;
    var weatherData = await fetchJSON(dataUri);
    props.callbackFunc({
      CityName: weatherData.name,
      Title: weatherData.weather[0].main,
      Desc: weatherData.weather[0].description,
      cur_temp: weatherData.main.temp,
    });
  }

    return (
      <div>
        <br />
        <div class="container" id="Page-title">
          <h1>What city do you want to check?</h1>
        </div>
        <br />
        <form onSubmit={OnSubmit}>
          <input
            type="text"
            onChange={onChange}
            className="form-inline"
            id="cityNameInput"
            placeholder="Enter the name"
          />
          <br />
          <br />
          <Button type="submit" variant="outline-success" size="lg">
            Check the weather
          </Button>
        </form>
      </div>
    );
  
    }

export default WeatherRetrieve;
