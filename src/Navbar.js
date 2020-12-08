import React, { useContext, useRef, useState } from "react";
import "./css/Navbar.css";
import logo from "./images/logo.svg";
import { userContext } from "./App.js";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import Modal from "@material-ui/core/Modal";

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
  const paper = useStyles().paper;
  const user = useContext(userContext);
  let showMenu = false;
  const hamBurger = useRef(null);
  const nav = useRef(null);
  const [open, setOpen] = useState(false);

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
          <h1>This is a modal</h1>
          <div className="modal-content">
            <Avatar className={classes[Math.floor(Math.random() * 2)]}>
              {user.displayName[0]}
            </Avatar>
            <h3>{user.displayName}</h3>
            <p>{user.email}</p>
            <button>Sign Out</button>
            <p className="modal-content__footnote"></p>
          </div>
        </div>
      </Modal>
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
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
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          {user ? (
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
