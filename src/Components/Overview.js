import React from "react";
import { useSelector } from "react-redux";

import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  const currentDisplay = useSelector(selectDisplay);

  return (
    <div className="stack">
      Overview
      <h1>{currentDisplay.name.official}</h1>
      <h2>{currentDisplay.name.common}</h2>
      <table className="overview-table">
        <tr>
          <td>Capital: </td>
          <td>{currentDisplay.capital}</td>
        </tr>

        <tr>
          <td>Continents: </td>
          {currentDisplay.continents.map((e) => (
            <td>{e}</td>
          ))}
        </tr>

        <tr>
          <td>Population: </td>
          <td>{currentDisplay.population}</td>
        </tr>

        <tr>
          <td>Independent: </td>
          <td>{currentDisplay.independent ? "True" : "False"} </td>
        </tr>
        <tr>
          <td>LandLocked: </td>
          <td>{currentDisplay.landlocked ? "True" : "False"} </td>
        </tr>
        <tr>
          <td>Languages :</td>
          {Object.keys(currentDisplay.languages).map((e) => (
            <td key={`lang${e}`}>{currentDisplay.languages[e]}</td>
          ))}
        </tr>
      </table>
    </div>
  );
};

export default Overview;

//name.official
//name.common
//capitol
//continents - array
//population
//languages - array of objects
//independent - boolean
//landlocked - boolean
