import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import Logo from "../Logo";
import * as navBarStyle from "./NavBar.module.scss";

const NavBar = (props) => {
  return (
    <nav>
      <div>
        <Link className={navBarStyle.link} to="/home">
          <Logo />
        </Link>
      </div>
      <div>
        <Link className={navBarStyle.link} to="/about"></Link>
        <Link className={navBarStyle.link} to="/contact"></Link>
      </div>
      <div>
        <a href="" alt="" target="_blank">
          <FontAwesomeIcon className={navBarStyle.link} size="3x" icon={faFacebook} />
          <FontAwesomeIcon className={navBarStyle.link} size="3x" icon={faInstagram} />
        </a>
        <a href="" alt="" target="_blank"></a>
      </div>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
