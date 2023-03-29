import { configureStore } from "@reduxjs/toolkit";

import potentialCountriesReducer from "./slices/potentialCountriesSlice";
import displayCountryReducer from "./slices/displayCountrySlice";

const store = configureStore({
  reducer: {
    potentialCountries: potentialCountriesReducer,
    displayedCountry: displayCountryReducer,
  },
});

export default store;
