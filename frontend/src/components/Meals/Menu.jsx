import React from "react";

import MenuItem from "./MenuItem";

const Menu = ({ appetizers, mainDishes, desserts }) => {
  return (
    <>
      <MenuItem title="Appetizers" mealType={mainDishes} />
      <MenuItem title="Main Dishes" mealType={appetizers} />
      <MenuItem title="Desserts" mealType={desserts} />
    </>
  );
};

export default Menu;
