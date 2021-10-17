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
  const navLinkInactive = {
    fontSize: 26,
    fontFamily: "Ubuntu",
    color: "#65617d",
    hoverColor: "#383549",
  };
  const navLinkActive = {
    fontSize: 26,
    fontFamily: "Ubuntu",
    color: "#383549",
  };

  const navbtnText = {
    fontSize: 26,
    fontFamily: "Ubuntu",
    fontWeight: "bold",
    color: "white",
  };

  return (
    <>
      <Nav>
        <Bars />
        <NavLink style={{ flex: 1 }} exact to="/">
          <h1
            style={{
              fontSize: 36,
              fontWeight: "bold",
              fontStyle: "oblique",
              color: "#817e94",
              marginRight: 5,
            }}
          >
            //
          </h1>
          <h1
            style={{
              fontSize: 36,
              fontWeight: "bold",
              fontStyle: "oblique",
              color: "#65617d",
            }}
          >
            Quib
          </h1>
          <h1
            style={{
              fontSize: 36,
              fontWeight: "bold",
              fontStyle: "oblique",
              color: "#8ab0ff",
            }}
          >
            dev
          </h1>
        </NavLink>
        <NavMenu>
          <NavLink to="/About" activeStyle>
            <h1 style={navLinkInactive} activeStyle={navLinkActive}>
              About
            </h1>
          </NavLink>
          <NavLink to="/Certificates" activeStyle>
            <h1 style={navLinkInactive} activeStyle={navLinkActive}>
              Certificates
            </h1>
          </NavLink>
          <NavLink to="/Work" activeStyle>
            <h1 style={navLinkInactive} activeStyle={navLinkActive}>
              Work
            </h1>
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/contact">
              <h1 style={navbtnText}>Contact</h1>
            </NavBtnLink>
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
