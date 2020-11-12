import React from "react";
import preloader from "../../../assests/img/preloader.gif";
import classes from "./Preloader.module.css";
const Preloader = () => <img className={classes.preloader} src={preloader} />;

export default Preloader;
