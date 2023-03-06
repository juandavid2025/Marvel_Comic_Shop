import React from "react";
import shieldJPG from "../../../assets/shield2.png";

import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={classes["spinner-container"]}>
      <img
        src={shieldJPG}
        alt="Captain America Shield"
        className={classes["spinner-img"]}
      />
    </div>
  );
};

export default Spinner;
