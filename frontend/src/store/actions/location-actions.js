import {
  replaceState,
  changeCity,
  changeCountry,
} from "../slices/location-slice";

export const fetchLocationsAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:8080/locations");
      if (!response.ok) {
        throw new Error("Failed to fetch locations!");
      }
      const responseData = await response.json();
      dispatch(replaceState(responseData.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeCityAction = (newCountry, newCity) => {
  return (dispatch) => {
    dispatch(changeCity({ ctr: newCountry, city: newCity }));
  };
};

export const changeCountryAction = (newCountry, newCity) => {
  return (dispatch) => {
    dispatch(changeCountry({ ctr: newCountry, city: newCity }));
  };
};
