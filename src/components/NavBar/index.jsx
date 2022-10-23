import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import Logo from "../Logo";
import * as navBarStyle from "./NavBar.module.scss";

const NavBar = (props) => {
  return (
    <nav className={navBarStyle.container}>
      <div className={navBarStyle.logoContainer}>
        <Link className={navBarStyle.link} to="/home">
          <Logo />
        </Link>
      </div>
      <div className={navBarStyle.navContainer}>
        <Link className={navBarStyle.link} to="/about">
          about
        </Link>
        <Link className={navBarStyle.link} to="/contact">
          contact
        </Link>
      </div>
      <div className={navBarStyle.navIcons}>
        <a href="https://www.facebook.com/pete.wanca" target="_blank">
          <FontAwesomeIcon className={navBarStyle.link} size="xl" icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/petewanca/" target="_blank">
          <FontAwesomeIcon className={navBarStyle.link} size="xl" icon={faInstagram} />
        </a>
      </div>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
