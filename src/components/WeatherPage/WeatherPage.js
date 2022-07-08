import WeatherShow  from './WeatherShow/WeatherShow';
import WeatherRetrieve from './WeatherRetrieve/WeatherRetrieve';
import { useState } from 'react';


function WeatherPage() {
    const [data, setData] = useState();

    const callbackFunc = (childdata) => {
      setData(childdata);
    };
    return (
      <div>
        <WeatherRetrieve callbackFunc={callbackFunc}/>
        <br/>
        <WeatherShow DataToShow={data}/>
      </div>
    );
}

export default WeatherPage