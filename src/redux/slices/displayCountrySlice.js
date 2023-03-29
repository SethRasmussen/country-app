import { createSlice } from "@reduxjs/toolkit";
import initialCountry from "../../assets/initialCountry";

const initialState = { value: initialCountry };

export const displayCountrySlice = createSlice({
  name: "displayCountry",
  initialState,
  reducers: {
    setDisplayCountry(state, action) {
      state.value = action.payload;
    },
    deleteDisplayCountry(state) {
      state.value = null;
    },
  },
});

export const { setDisplayCountry, deleteDisplayCountry } =
  displayCountrySlice.actions;

export default displayCountrySlice.reducer;

export const selectDisplay = (state) => state.displayedCountry.value;
