import React from "react";
import classes from "./Container.module.css";

const Container: React.FC<{ children: React.ReactNode }> = props => {
  return <div className={classes.container}>{props.children}</div>;
};

export default Container;
