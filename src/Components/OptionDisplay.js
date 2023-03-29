import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {
  const currentPotentials = useSelector(selectPotentials);
  //console.log(currentPotentials);
  const dispatch = useDispatch();

  return (
    <div className="stack">
      {currentPotentials.map((country, i) => {
        return (
          <h2
            key={country.name.official}
            onClick={() => dispatch(setDisplayCountry(currentPotentials[i]))}
          >
            {country.name.common}
          </h2>
        );
      })}
    </div>
  );
};

export default OptionDisplay;
