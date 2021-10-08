import React from "react";
import { NavLink } from "react-router-dom";
import { UserPhoto } from "../common/UserPhoto/UserPhoto";
import classes from "./Header.module.css";
import logo from "../../assests/img/logo.png";

const Header = ({ isAuth, login, photo, logoutThunkCreator }: any) => (
  <header className={classes.header}>
    <NavLink to="/news">
      <img className={classes.logo} src={logo} alt="" />
    </NavLink>
    <div className={classes.loginBlock}>
      {isAuth ? (
        <>
          <NavLink to="/profile" className={`${classes.item}`}>
            <span>{login}</span>
            <UserPhoto photo={photo} />
          </NavLink>
          <button
            type="button"
            className={`${classes.item} ${classes.logout}`}
            onClick={logoutThunkCreator}
          >
            Logout
          </button>
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </div>
  </header>
);

export default Header;
