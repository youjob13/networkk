import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./DialogItem.module.css";

const DialogItem = ({ name, id }) => (
  <div className={`${classes.dialog}`}>
    <img
      className={classes.avatar}
      src="https://sun9-72.userapi.com/Pjoi093axkm5GGG92E2DasVDuWwJn78PTucvtQ/_BNtIcGcou8.jpg"
      alt=""
    />
    <NavLink className={classes.dialogItem} to={`/dialogs/${id}`}>
      {name}
    </NavLink>
  </div>
);
export default DialogItem;
