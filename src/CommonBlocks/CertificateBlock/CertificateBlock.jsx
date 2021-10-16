import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
//import certificate1 from "../../images/Certificates/text-mining-coursera-certificate.jpg";

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
  transition: ease background-color 300ms;
  &:hover {
    background-color: #77a0ff;
  }
`;

const ButtonSecondary = styled.button`
  background-color: #65617d;
  font: 700 26px Ubuntu;
  color: white;
  padding: 15px 25px;
  border-radius: 30px;
  border-width: 0px;
  outline-color: #77a0ff;
  text-transform: uppercase;
  box-shadow: 0px 4px 4px lightgray;
  cursor: pointer;
  transition: ease background-color 300ms;
  &:hover {
    background-color: #5c5873;
  }
`;

//style={{
//  backgroundColor: "#dae5ff",
//  paddingTop: 150,
//  paddingBottom: 150,
//}}

const CertificateBlock = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div class="container-fluid">
          <Row>
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="CertificateBlock img"
                  />
                </div>
                <div
                  style={{
                    paddingLeft: 50,
                    paddingTop: 130,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="col-lg-6 order-2 order-lg-2 header-img justify-content-left"
                >
                  <h1
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {props.title}
                  </h1>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ButtonPrimary>{props.btName1}</ButtonPrimary>
                    <ButtonSecondary>{props.btName2}</ButtonSecondary>
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

export default CertificateBlock;
