import React from "react";
import "../styles/Header.css";
import PageviewIcon from "@material-ui/icons/Pageview";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="./1200px-Amazon_logo.svg.png"
          alt=""
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <PageviewIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              {user ? `Hello ${user.email}` : "Hello Quest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">returns</span>
          <span className="header__optionLineTwo">orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">tour</span>
          <span className="header__optionLineTwo">smart</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <SportsBasketballIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

