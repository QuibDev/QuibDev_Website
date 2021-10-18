import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Grid, Row, Col } from "react-bootstrap";

const MailSentBlock = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div class="container-fluid">
          <Row>
            <div className="col-10 mx-auto">
              <div
                className="row"
                style={{
                  alignItems: "center",
                }}
              >
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="MailSentBlock img"
                    style={{ maxHeight: 350, maxWidth: 350, marginLeft: 100 }}
                  />
                </div>
                <div className="col-lg-6 order-2 order-lg-2 header-img justify-content-left">
                  <h1
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      marginBottom: 20,
                    }}
                  >
                    {props.title}
                  </h1>
                  <h2
                    className="my-3"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      marginBottom: 20,
                    }}
                  >
                    {props.subtitle}
                  </h2>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
};

export default MailSentBlock;
