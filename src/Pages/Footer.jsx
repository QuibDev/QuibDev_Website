import React from "react";
//import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { Nav, NavLink, footerRow2 } from "../Components/FooterElements";
import Colors from "../Constants/Colors";

const Footer = () => {
  const socialIcons = {
    fontSize: 24,
    color: Colors.primary,
    hoverColor: Colors.secondary,
  };

  const footerText = {
    fontSize: 17,
    fontFamily: "Ubuntu",
    color: Colors.primary,
    hoverColor: Colors.secondary,
    marginBottom: 15,
  };

  return (
    <>
      <Nav>
        <NavLink to="https://github.com/quibdev" activeStyle>
          <FaGithub style={socialIcons} href="https://github.com/quibdev/" />
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/akash-patel-24897121a/"
          activeStyle
        >
          <FaLinkedin style={socialIcons} />
        </NavLink>
        <NavLink to="https://twitter.com/quibdev" activeStyle>
          <FaTwitter style={socialIcons} />
        </NavLink>
      </Nav>
      <Nav>
        <NavLink to="#" activeStyle>
          <h1 style={footerText}>© 2021 Akash Raj Patel</h1>
        </NavLink>
      </Nav>
    </>
  );
};

export default Footer;
