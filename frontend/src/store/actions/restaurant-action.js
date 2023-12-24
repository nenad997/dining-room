import { replaceState, loadMore, loadMenu } from "../slices/restaurant-slice";
import { showLoadingSpinner, hideLoadingSpinner } from "../slices/ui-slice";

export const fetchRestaurantsAction = (city) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:8080/restaurants?page=1${city ? `&city=${city}` : ""}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data!");
      }
      const responseData = await response.json();

      const transformedData = responseData.data.filter((restaurant) => {
        return restaurant.city === city;
      });

      dispatch(showLoadingSpinner());
      dispatch(replaceState(transformedData));
      dispatch(hideLoadingSpinner());
    } catch (error) {
      console.log(error);
    }
  };
};

export const loadMoreRestaurantsAction = (page) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:8080/restaurants?page=${page}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data!");
      }
      const responseData = await response.json();

      dispatch(loadMore(responseData.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const loadMenuAction = (restaurantId) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost:8080/restaurants/${restaurantId}/menus`
    );
    if(!response.ok) {
      throw new Error("Failed to fetch menu!");
    }
    const responseData = await response.json();
    dispatch(loadMenu(responseData.data.items));
  };
};
