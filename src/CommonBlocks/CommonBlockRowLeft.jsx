import React from "react";
import { NavLink } from "react-router-dom";

const CommonBlockRowLeft = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div class="container-fluid">
          <div class="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{props.title}</h1>
                  <h2 className="my-3">{props.subtitle}</h2>
                  <div className="mt3-3">
                    <NavLink to={props.visit} classname="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="CommonBlockRowLeft img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonBlockRowLeft;
