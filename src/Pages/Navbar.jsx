import React from "react";
//import { NavLink } from "react-router-dom";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  navHeader,
  NavBtn,
  NavBtnLink,
} from "../../src/Components/NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavLink class="navHeader" exact to="/">
          QuibDev
        </NavLink>
        <NavMenu>
          <NavLink to="/About" activeStyle>
            About
          </NavLink>
          <NavLink to="/Certificates" activeStyle>
            certificates
          </NavLink>
          <NavLink to="/Work" activeStyle>
            Work
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/contact">Contact</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

/*
const Navbar = () => {
  const navLinkInactive = {
    fontFamily: "Ubuntu",
    Color: "#65617d",
  };

  const navLinkActive = {
    fontFamily: "Ubuntu",
    fontWeight: "bold",
    Color: "#65617d",
  };

  const WebsiteHeader = {
    fontFamily: "Ubuntu",
    fontWeight: "bold",
    Color: "#8ab0ff",
  };

  return (
    <>
      <div class="container-fluid nav_bg">
        <div class="row">
          <div className="col-10 mx-auto">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink class="navbar-brand" exact to="/" style={WebsiteHeader}>
                QuibDev
              </NavLink>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li>
                    <NavLink
                      class="nav-link"
                      exact
                      to="/"
                      style={navLinkInactive}
                      activeStyle={navLinkActive}
                    >
                      Home <span class="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      aria-current="page"
                      class="nav-link"
                      exact
                      to="/certificates"
                      style={navLinkInactive}
                      activeStyle={navLinkActive}
                    >
                      Certificates
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      class="nav-link"
                      exact
                      to="/about"
                      style={navLinkInactive}
                      activeStyle={navLinkActive}
                    >
                      About
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      class="nav-link"
                      exact
                      to="/contact"
                      style={navLinkInactive}
                      activeStyle={navLinkActive}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

*/

export default Navbar;
