import React, { useRef } from "react";
import "./css/Navbar.css";
import logo from "./images/logo.svg";

function Navbar() {
  let showMenu = false;
  const hamBurger = useRef(null);
  const nav = useRef(null);

  const toggleMenu = () => {
    if (!showMenu) {
      hamBurger.current.classList.add("open");
      nav.current.classList.add("open");

      showMenu = true;
    } else {
      hamBurger.current.classList.remove("open");
      nav.current.classList.remove("open");

      showMenu = false;
    }
  };
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu-btn" onClick={toggleMenu}>
          <span ref={hamBurger} className="menu-btn__burger"></span>
        </div>
        <nav ref={nav} className="header__nav mobile">
          <ul className="nav__page">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          {true ? (
            <ul className="nav__login">
              <li className="signUp">Sign Out</li>
            </ul>
          ) : (
            <ul className="nav__login">
              <li>Login</li>
              <li className="signUp">Sign Up</li>
            </ul>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
