import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div class="container-fluid nav_bg">
        <div class="row">
          <div className="col-10 mx-auto">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink class="navbar-brand" exact to="/">
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
                  <li class="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      class="nav-link"
                      exact
                      to="/"
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

export default Navbar;
