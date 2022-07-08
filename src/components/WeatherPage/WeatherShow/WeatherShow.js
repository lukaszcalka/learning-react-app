import React, { useEffect } from "react";
import { useState } from "react";
import "../../App/App.css";

function WeatherShow (props) {
    let [displayValues, setDisplay] = useState( { CityName: "", Title: "", Desc: "", cur_temp: "" });

    useEffect(() => {
        if (typeof(props.DataToShow) !=='undefined'){
            setDisplay({
                CityName: props.DataToShow.CityName,
                Title: props.DataToShow.Title,
                Desc: props.DataToShow.Desc,
                cur_temp: props.DataToShow.cur_temp,
                });
        }
    },[props]);

    if (displayValues.CityName === "") {
      return <div></div>;
    } else {
      return (
        <div class="container centered">
          <div class="card w-25 p-3 h-10  " id="Weather-card">
            <h1>{displayValues.CityName}</h1>
            <br />
            <h2>Current weather in this city is {displayValues.Desc}</h2>
            Current temperature: {displayValues.cur_temp} Degrees Celcius
          </div>
        </div>
      );
    }
}

export default WeatherShow;
