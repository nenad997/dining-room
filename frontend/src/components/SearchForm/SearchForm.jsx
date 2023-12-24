import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchLocationsAction,
  changeCityAction,
  changeCountryAction,
} from "../../store/actions/location-actions";
import { fetchRestaurantsAction } from "../../store/actions/restaurant-action";
import classes from "./SearchForm.module.css";

const SearchForm = () => {
  const dispatch = useDispatch();
  const { locations, currentCity, currentCountry, hasCountryChanged } =
    useSelector((state) => state.location);

  const countryChangeHandler = (event) => {
    const newCountry = event.target.value;
    dispatch(changeCountryAction(newCountry, currentCity));
    dispatch(
      changeCityAction(
        newCountry,
        locations.find((loc) => loc.country === newCountry)?.cities[0] || ""
      )
    );
  };

  const cityChangeHandler = (event) => {
    dispatch(changeCountryAction(currentCountry, event.target.value));
    dispatch(changeCityAction(currentCountry, event.target.value));
  };

  useEffect(() => {
    dispatch(fetchLocationsAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchRestaurantsAction(currentCity));
  }, [dispatch, currentCity, currentCountry, hasCountryChanged]);

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="country">Country:</label>
        <select
          name="country"
          id="country"
          onChange={countryChangeHandler}
          value={currentCountry}
        >
          {locations.map((d) => (
            <option key={d._id} value={d.country}>
              {d.country}
            </option>
          ))}
        </select>
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City:</label>
        <select
          name="city"
          id="city"
          onChange={cityChangeHandler}
          value={currentCity}
        >
          {locations
            .filter((f) => f.country === currentCountry)
            .map((filteredData) => (
              <React.Fragment key={filteredData.country}>
                {filteredData.cities && filteredData.cities.length > 0 ? (
                  filteredData.cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))
                ) : (
                  <option value="">No cities available</option>
                )}
              </React.Fragment>
            ))}
        </select>
      </div>
    </form>
  );
};

export default SearchForm;
