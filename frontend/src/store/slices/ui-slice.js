import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLoading: false,
  },
  reducers: {
    showLoadingSpinner: function (state, action) {
      state.isLoading = true;
    },
    hideLoadingSpinner: function (state, action) {
      state.isLoading = false;
    },
  },
});

export default uiSlice.reducer;

export const { showLoadingSpinner, hideLoadingSpinner } = uiSlice.actions;
