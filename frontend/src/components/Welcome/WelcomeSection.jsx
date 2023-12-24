import React from "react";
import { Link } from "react-router-dom";

import classes from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <section className={classes.section}>
      <div className={classes.desc}>
        <h1>Welcome</h1>
        <p>Visit our restaurants</p>
        <Link to="/restaurants">Restaurants</Link>
      </div>
    </section>
  );
};

export default WelcomeSection;
