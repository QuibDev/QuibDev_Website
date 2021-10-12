import React from "react";
import { NavLink } from "react-router-dom";

const TitleCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          <img class="card-img-top" src={props.imgsrc} />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.subtitle}</p>
            <NavLink exact to={props.buttonLink} class="btn btn-primary">
              {props.buttonText}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleCard;
