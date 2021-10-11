import React from "react";
import web from "../images/HomePage/landing_image_1.svg";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div class="container-fluid nav_bg">
          <div class="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Hi, I’m <strong className="brand-name"> Akash</strong>. And
                    I Like Programming
                  </h1>
                  <h2 className="my-3">
                    This website is a digital catalog of my work
                  </h2>
                  <div className="mt3-3">
                    <a href="" classname="btn-get-started">
                      Get Started
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="home img"
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

export default Home;
