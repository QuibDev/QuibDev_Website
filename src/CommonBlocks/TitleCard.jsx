import React from "react";
import { NavLink } from "react-router-dom";
import Colors from "../Constants/Colors";
import styled from "styled-components";

const TitleCard = (props) => {
  const cardTitle = {
    FontFamily: "Ubuntu",
    color: Colors.secondary,
    fontWeight: "Bold",
    textAlign: "center",
    marginBottom: 20,
  };

  const ButtonPrimary = styled.button`
    background-color: #8ab0ff;
    font: 700 17px Ubuntu;
    align-self: center;
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

  const cardBox = {
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 60,
  };

  const cardSubtitle = {
    FontFamily: "Ubuntu",
    color: Colors.secondary,
    textAlign: "center",
  };

  const cardButton = {};

  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card" style={cardBox}>
          <img
            class="card-img-top"
            style={{ maxHeight: 350, maxWidth: 350 }}
            src={props.imgsrc}
          />
          <div class="card-body">
            <h5 class="card-title" style={cardTitle}>
              {props.title}
            </h5>
            <p class="card-text" style={cardSubtitle}>
              {props.subtitle}
            </p>
            <NavLink exact to={props.btVisit}>
              <ButtonPrimary>{props.btName}</ButtonPrimary>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleCard;
