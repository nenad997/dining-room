import React, { useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";

import { loadMenuAction } from "../../store/actions/restaurant-action";
import { filterData } from "../../util/helper";
import Menu from "../Meals/Menu";
import classes from "./Restaurant.module.css";

function reducerFn(state, action) {
  switch (action.type) {
    case "toggleDesc": {
      return {
        ...state,
        isDescVisible: !state.isDescVisible,
      };
    }
    case "toggleMenu": {
      return {
        ...state,
        isMenuActive: action.payload,
      };
    }
    default: {
      throw new Error("Invalid TYPE provided");
    }
  }
}

const Restaurant = ({
  name,
  rating,
  description,
  city,
  cuisine,
  days,
  restaurantId,
  price,
  menu,
}) => {
  const [state, dispatchReducerFn] = useReducer(reducerFn, {
    isDescVisible: false,
    isMenuActive: false,
  });
  const dispatch = useDispatch();

  const appetizers = filterData(menu, "appetizer");
  const mainDishes = filterData(menu, "main dish");
  const desserts = filterData(menu, "dessert");

  useEffect(() => {
    dispatch(loadMenuAction(restaurantId));
  }, [dispatch]);

  let content = (
    <div className={classes.menu}>
      <Menu
        appetizers={appetizers}
        mainDishes={mainDishes}
        desserts={desserts}
      />
    </div>
  );

  if (!state.isMenuActive) {
    content = (
      <div>
        <ul className={classes.list}>
          {days.map((day) => (
            <li key={day._id}>
              {day.day}: {day.opens} - {day.closes}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <article
        className={classes.restaurant}
        onClick={() => dispatchReducerFn({ type: "toggleDesc" })}
      >
        <div className={classes.heading}>
          <h4>{name}</h4>
          <div style={{ display: "flex", gap: "10px" }}>
            <div>
              <span>⭐</span>
              {rating}
            </div>
            <div>
              <span>💵</span>
              {price}
            </div>
          </div>
        </div>
      </article>
      {state.isDescVisible && (
        <>
          <div className={classes.desc}>
            <div className={classes.left}>
              <p>{description}</p>
              <p>City: {city}</p>
              <p>Primary cuisine: {cuisine}</p>
            </div>
            <div className={classes.right}>
              <div className={classes.buttons}>
                <button
                  className={state.isMenuActive ? classes.active : undefined}
                  onClick={() =>
                    dispatchReducerFn({ type: "toggleMenu", payload: true })
                  }
                >
                  Menu
                </button>
                <button
                  className={!state.isMenuActive ? classes.active : undefined}
                  onClick={() =>
                    dispatchReducerFn({ type: "toggleMenu", payload: false })
                  }
                >
                  Working Hours
                </button>
              </div>
              {content}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Restaurant;
