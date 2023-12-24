import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Restaurant from "../Restaurant/Restaurant";
import { loadMoreRestaurantsAction } from "../../store/actions/restaurant-action";
import classes from "./RestaurantsWrapper.module.css";

const RestaurantsWrapper = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { restaurants, currentPage, menu } = useSelector(
    (state) => state.restaurant
  );

  const loadMoreRestaurantsHandler = () => {
    dispatch(loadMoreRestaurantsAction(currentPage));
  };

  return (
    <>
      <section className={classes.wrapper}>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant._id}
            restaurantId={restaurant._id}
            name={restaurant.name}
            rating={restaurant.rating}
            description={restaurant.description}
            city={restaurant.city}
            cuisine={restaurant.cuisine}
            days={restaurant.days}
            price={restaurant.price}
            menu={menu}
          />
        ))}
      </section>
      {pathname === "/all-restaurants" && (
        <div className={classes.btn}>
          <button
            className={classes.loadButton}
            onClick={loadMoreRestaurantsHandler}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default RestaurantsWrapper;
