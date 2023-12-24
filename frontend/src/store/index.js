import { configureStore } from "@reduxjs/toolkit";

import restaurantSliceReducer from "./slices/restaurant-slice";
import locationSliceReducer from "./slices/location-slice";
import uiSliceReducer from "./slices/ui-slice";

const store = configureStore({
  reducer: {
    restaurant: restaurantSliceReducer,
    location: locationSliceReducer,
    ui: uiSliceReducer,
  },
});

export default store;
