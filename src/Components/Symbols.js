import React from "react";

import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbols = () => {
  const currentDisplay = useSelector(selectDisplay);

  console.log(currentDisplay.coatOfArms);
  return (
    <div className="symbols">
      Symbols
      <div className="stack">
        <img src={currentDisplay.flags.png} alt="flag" />
      </div>
      <div className="stack">
        <img src={currentDisplay.coatOfArms.png} alt="Coat Of Arms" />
      </div>
    </div>
  );
};

export default Symbols;
