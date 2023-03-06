import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { cartOutline } from "ionicons/icons";

import { StoreState } from "../../store";

import marvelLogo from "../../assets/Marvel_Logo.png";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const cartComicAmount = useSelector<StoreState, number>(
    state => state.cart.cartAmount
  );
  const [doBump, setDoBump] = useState(false);

  useEffect(() => {
    if (cartComicAmount === 0) {
      return;
    }
    setDoBump(true);

    const timer = setTimeout(() => {
      setDoBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartComicAmount]);

  return (
    <header className={`${classes.header}`}>
      <img className={classes.logo} alt="Marvel logo" src={marvelLogo} />
      <nav className={classes["main-nav"]}>
        <ul className={classes["main-nav-list"]}>
          <li>
            <NavLink
              to="/Marvel_Comic_Shop/comics"
              className={({ isActive }) =>
                isActive
                  ? `${classes["main-nav-link"]} ${classes["main-nav-link-active"]}`
                  : classes["main-nav-link"]
              }
            >
              Comics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Marvel_Comic_Shop/cart"
              className={({ isActive }) =>
                `${classes["cart-nav-btn"]} ${doBump ? classes.bump : ""} ${
                  isActive ? classes["cart-nav-btn-active"] : ""
                }`
              }
            >
              <IonIcon
                icon={cartOutline}
                className={classes["cart-btn-icon"]}
              />
              <p className={classes["cart-btn-amount"]}>{cartComicAmount}</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

// const [stickyNav, setStikyNav] = useState(false);
// const headerSticky = window => {
//   let windowHeight = window.target.scrollingElement.scrollTop;
//   //console.log(windowHeight);
//   setStikyNav(windowHeight > 80);
// };
// window.addEventListener("scroll", headerSticky);

// ICONS
// <ion-icon
// name="cart-outline"
// className={classes.cart_icon}
// ></ion-icon>
