import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    locations: [],
    currentCountry: "England",
    currentCity: "London",
    hasCountryChanged: false,
  },
  reducers: {
    replaceState: function (state, action) {
      state.locations = action.payload;
    },
    changeCountry: function (state, action) {
      state.hasCountryChanged = true;
      state.currentCountry = action.payload.ctr;
      state.currentCity = action.payload.city;
    },
    changeCity: function (state, action) {
      state.hasCountryChanged = false;
      state.currentCountry = action.payload.ctr;
      state.currentCity = action.payload.city;
    },
  },
});

export default locationSlice.reducer;

export const { replaceState, changeCity, changeCountry } =
  locationSlice.actions;
