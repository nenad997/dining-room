import React from "react";

import classes from "./MenuItem.module.css";

const MenuItem = ({ title, mealType }) => {
  return (
    <div className={classes.item}>
      <h1>{title}</h1>
      <div className={classes.details}>
        {mealType.map((item) => (
          <div key={item._id} className={classes.meal}>
            <p>
              {item.name} ${item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
