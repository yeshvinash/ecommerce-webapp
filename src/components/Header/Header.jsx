import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo/logo.png";
import Button from "react-bootstrap/esm/Button";
import "./Header.css";
import { SVGIcons } from "../Data/SVGIcons";

export default function Header({ cartCount }) {
  const [userState, setUserState] = useState(false);
  const [path, setPath] = useState();
  let urlPath = useLocation();

  useEffect(() => {
    const updateHeaderHeight = () => {
      var headerElement = document.getElementById("header");
      var spaceTop = document.querySelector(".header-space");
      spaceTop.style.paddingTop = headerElement.offsetHeight.toString() + "px";
    };

    updateHeaderHeight();

    function handleResize() {
      updateHeaderHeight();
    }
    window.addEventListener("resize", handleResize);
    setPath(urlPath.pathname);
  });

  const toggleMenu = () => {
    const body = document.querySelector("html");
    setUserState(!userState);
    body.classList.toggle("show-menu");
  };

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="header-navbar">
            <div className="header-logo">
              <NavLink to="/" className="d-block">
                <img src={Logo} alt="logo" />
              </NavLink>
            </div>
            <div className="header-navigation ms-auto" id="navigation">
              <ul className="header-navitem d-flex  mb-0" id="myDIV">
                <li>
                  <NavLink
                    onClick={toggleMenu}
                    to="/"
                    className="header-nav  header-nav-links"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={toggleMenu}
                    to="/signup"
                    className="header-nav header-nav-links"
                  >
                    Signup
                  </NavLink>
                </li>
                <li>
                  <button type="button" className="btn cart-btn">
                    {SVGIcons.ShoppingCart}
                    <span className="text-white"> {cartCount}</span>
                  </button>
                </li>
              </ul>
            </div>
            <div
              className="hamburger toggle-btn"
              id="hamburger"
              onClick={toggleMenu}
            >
              <span className="line"></span>
            </div>
          </div>
        </div>
      </header>
      <div className="header-space"></div>
    </>
  );
}
