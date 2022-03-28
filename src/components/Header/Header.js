import classes from "./Header.module.css";
import marvelLogo from "../../assets/Marvel_Logo.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const cartComicAmount = useSelector((state) => state.cart.cartAmount);
  const [doBump, setDoBump] = useState(false);
  const [stickyNav, setStikyNav] = useState(false);

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

  const headerSticky = (window) => {
    let windowHeight = window.target.scrollingElement.scrollTop;
    //console.log(windowHeight);
    setStikyNav(windowHeight > 80);
  };

  window.addEventListener("scroll", headerSticky);

  return (
    <header
      className={[`${classes.header} ${stickyNav ? `${classes.sticky}` : ""}`]}
    >
      <img className={classes.logo} alt="Marvel logo" src={marvelLogo} />
      <nav>
        <ul className={classes.nav_list}>
          <li>
            <NavLink to="/comics" className={classes.nav_link}>
              Comics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={[
                `${classes.nav_link} ${classes.nav_cart} ${
                  doBump && classes.bump
                }`,
              ]}
            >
              <div className={classes.nav_link_cart}>
                <div className={classes.img_box}>
                  <ion-icon
                    name="cart-outline"
                    className={classes.cart_icon}
                  ></ion-icon>
                  <p>{cartComicAmount}</p>
                </div>
                <p>Cart</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
