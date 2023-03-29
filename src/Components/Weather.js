import axios from "axios";
import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
  const [weather, setWeather] = useState();
  const display = useSelector(selectDisplay);

  const latitude = display.capitalInfo.latlng[0];
  const longitude = display.capitalInfo.latlng[1];

  // ------------------------------------
  useEffect(() => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${latitude},${longitude}` },
      headers: {
        "X-RapidAPI-Key": "7932470b9dmsh2c5d10b2775f77ap1d7de7jsn5fc16642320a",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setWeather(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [longitude, latitude]);
  // ------------------------------------

  return (
    <div>
      <table className="overview-table">
        <tr>
          <td>Conditions: </td>
          <td>{weather?.current?.condition?.text}</td>
        </tr>
        <tr>
          <td>Temperature: </td>
          <td>{weather?.current?.temp_f}(F)</td>
          <td>{weather?.current?.temp_c}(C)</td>
        </tr>
        <tr>
          <td>Feels Like: </td>
          <td>{weather?.current?.feelslike_f}(F)</td>
          <td>{weather?.current?.feelslike_c}(C)</td>
        </tr>
        <tr>
          <td>Humidity: </td>
          <td>{weather?.current?.humidity}%</td>
        </tr>
        <tr>
          <td>Wind Speed: </td>
          <td>{weather?.current?.wind_mph}mph</td>
          <td>{weather?.current?.wind_kph}kph</td>
        </tr>
      </table>
    </div>
  );
};

export default Weather;
