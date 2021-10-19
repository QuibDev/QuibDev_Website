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
        <NavLink to="#" activeStyle>
          <a href="https://github.com/quibdev" target="_blank">
            <FaGithub style={socialIcons} href="https://github.com/quibdev/" />
          </a>
        </NavLink>
        <NavLink to="#" activeStyle>
          <a
            href="https://www.linkedin.com/in/akash-patel-24897121a/"
            target="_blank"
          >
            <FaLinkedin style={socialIcons} />
          </a>
        </NavLink>
        <NavLink to="#" activeStyle>
          <a href="https://twitter.com/quibdev" target="_blank">
            <FaTwitter style={socialIcons} />
          </a>
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
