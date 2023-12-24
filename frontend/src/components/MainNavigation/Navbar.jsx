import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <NavLink to="/">The Dining Room 2</NavLink>
      <ul className={classes.navList}>
        <li className={classes.navItem}>
          <NavLink
            to="/restaurants"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Restaurants
          </NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink
            to="/all-restaurants"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            All Restaurants
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
