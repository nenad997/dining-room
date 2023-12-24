import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurants: [],
    currentPage: 1,
    menu: [],
  },
  reducers: {
    replaceState: function (state, action) {
      state.restaurants = action.payload;
      state.currentPage++;
    },
    loadMore: function (state, action) {
      state.restaurants = [...state.restaurants, ...action.payload];
      state.currentPage++;
    },
    loadMenu: function (state, action) {
      state.menu = action.payload;
    },
  },
});

export default restaurantSlice.reducer;

export const { replaceState, loadMore, loadMenu } = restaurantSlice.actions;
