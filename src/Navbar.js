import React, { useContext, useEffect, useRef, useState } from "react";
import "./css/Navbar.css";
import logo from "./images/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import Modal from "@material-ui/core/Modal";
import BlessTheBoy2 from "./BlessTheBoy2";
import { auth } from "./firebase";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  orangeBig: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  purpleBig: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  paper: {
    position: "absolute",
    width: 320,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function Navbar() {
  const classes = [useStyles().orange, useStyles().purple];
  const classesBig = [useStyles().orangeBig, useStyles().purpleBig];
  const paper = useStyles().paper;
  const [user, setUser] = useState(null);
  let showMenu = false;
  const hamBurger = useRef(null);
  const nav = useRef(null);
  const [open, setOpen] = useState(false);

  const signOut = () => {
    if (user) {
      auth.signOut();
    }
    setOpen(false);
    closeMenu();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (newuser) {
      if (newuser) {
        setUser(newuser);
      } else setUser(null);
    });
    return () => unsubscribe();
  }, []);

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

  const closeMenu = () => {
    hamBurger.current.classList.remove("open");
    nav.current.classList.remove("open");

    showMenu = false;
  };

  const handleClose = () => {
    //   handle close operation here
    setOpen(false);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <div style={getModalStyle()} className={paper}>
          <div className="modal-content">
            <Avatar className={classesBig[Math.floor(Math.random() * 2)]}>
              {user?.displayName[0]}
            </Avatar>
            <h3>{user?.displayName}</h3>
            <p>{user?.email}</p>
            <button onClick={() => signOut()}>Sign Out</button>
            <p className="modal-content__footnote">
              <span>Designed and built by </span>
              <BlessTheBoy2 />
            </p>
          </div>
        </div>
      </Modal>
      <header className="header">
        <Link to="/">
          <div className="header__logo" onClick={() => closeMenu()}>
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="avatarwrap">
          {user?.displayName && (
            <Avatar
              onClick={() => setOpen(!open)}
              className={classes[Math.floor(Math.random() * 2)]}>
              {user.displayName[0]}
            </Avatar>
          )}
          <div className="menu-btn" onClick={toggleMenu}>
            <span ref={hamBurger} className="menu-btn__burger"></span>
          </div>
        </div>
        <nav ref={nav} className="header__nav mobile">
          <ul className="nav__page">
            <li onClick={() => closeMenu()}>Features</li>
            <li onClick={() => closeMenu()}>Pricing</li>
            <li onClick={() => closeMenu()}>Resources</li>
          </ul>
          {user ? (
            <ul className="nav__login">
              {user?.displayName && (
                <p>
                  Hello <span>{user?.displayName}</span>
                </p>
              )}
              <li className="signUp" onClick={() => signOut()}>
                Sign Out
              </li>
              {user?.displayName && (
                <Avatar
                  onClick={() => setOpen(!open)}
                  className={classes[Math.floor(Math.random() * 2)]}>
                  {user.displayName[0]}
                </Avatar>
              )}
            </ul>
          ) : (
            <ul className="nav__login">
              <Link to="/signin">
                <li onClick={() => closeMenu()} className="router-link">
                  Login
                </li>
              </Link>
              <Link to="/signin">
                <li onClick={() => closeMenu()} className="signUp">
                  Sign Up
                </li>
              </Link>
            </ul>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
