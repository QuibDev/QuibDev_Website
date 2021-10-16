import React from "react";
import styled from "styled-components";
//import contactImg from "../images/Contact/contact_image.svg";
import introImg from "../images/HomePage/landing_image_1.svg";
import { Grid, Row, Col } from "react-bootstrap";

const ButtonPrimary = styled.button`
  background-color: #8ab0ff;
  font: 700 26px Ubuntu;
  color: white;
  padding: 15px 25px;
  margin: 10px;
  border-radius: 30px;
  border-width: 0px;
  outline-color: #77a0ff;
  text-transform: uppercase;
  box-shadow: 0px 4px 4px lightgray;
  cursor: pointer;
  flex: "1";
  &:hover {
    background-color: #77a0ff;
  }
`;

const Contact = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div class="container-fluid">
          <Row>
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                  <img
                    src={introImg}
                    className="img-fluid animated"
                    alt="CommonBlockRowRight img"
                  />
                </div>
                <div className="col-lg-6 order-2 order-lg-2 header-img justify-content-right">
                  <h1>Let's Get In Touch!</h1>
                  <div className="container contact_div">
                    <div className="row">
                      <div className="col-md-6 col-10 mx-auto">
                        <form>
                          <div class="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                            >
                              Name
                            </label>
                            <input
                              type="name"
                              class="form-control"
                              id="exampleFormControlInput1"
                              placeholder="John Doe"
                            />
                          </div>
                          <div class="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="exampleFormControlInput1"
                              placeholder="johnDoe@example.com"
                            />
                          </div>
                          <div class="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                            >
                              Organization
                            </label>
                            <input
                              type="oragnization"
                              class="form-control"
                              id="exampleFormControlInput1"
                              placeholder="John Doe Co. Ltd"
                            />
                          </div>
                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              class="form-label"
                            >
                              Your Message
                            </label>
                            <textarea
                              class="form-control"
                              id="exampleFormControlTextarea1"
                              placeholder="Enter your message..."
                              rows="3"
                            ></textarea>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: 10,
                            }}
                            class="col-12"
                          >
                            <ButtonPrimary type="submit">
                              Submit form
                            </ButtonPrimary>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Contact;
