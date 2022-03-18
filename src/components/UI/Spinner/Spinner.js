import React from "react";
import shieldJPG from "../../../assets/shield2.png";

import classes from "./Spinner.module.css";

const Spinner = (props) => {
  return (
    <div className={classes.spinner}>
      <img src={shieldJPG} alt="Captain America Shield" />
    </div>
  );
};

export default Spinner;
