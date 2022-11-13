import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import Logo from "../Logo";
import * as navBarStyle from "./NavBar.module.scss";

const NavBar = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className={`${navBarStyle.navContainer} navbar`}
      role="navigation"
      aria-label="main navigation">
      <div className="navbar-brand">
        <Link className={`${navBarStyle.link} navbar-item`} to="/home">
          <Logo />
        </Link>

        <a
          onClick={() => setIsActive(!isActive)}
          role="button"
          className={`navbar-burger ${navBarStyle.hamburger}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbar"
        className={`${isActive ? "is-active" : ""} ${
          navBarStyle.navbarMenu
        } navbar-menu`}>
        <div className="navbar-end">
          <Link className={`${navBarStyle.link} navbar-item`} to="/about">
            about
          </Link>
          <Link className={`${navBarStyle.link} navbar-item`} to="/contact">
            contact
          </Link>
          <hr className="navbar-divider" />
          <div className={navBarStyle.navIcons}>
            <a
              href="https:www.facebook.com/pete.wanca"
              target="_blank"
              className={`${navBarStyle.link} navbar-item`}>
              <FontAwesomeIcon size="xl" icon={faFacebook} />
            </a>
            <a
              href="https:www.instagram.com/petewanca/"
              target="_blank"
              className={`${navBarStyle.link} navbar-item`}>
              <FontAwesomeIcon size="xl" icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
