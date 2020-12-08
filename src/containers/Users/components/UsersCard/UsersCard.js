import React from "react";
import "./UsersCard.css";

export const UsersCard = (props) => {
  return (
    <div className={"users-card"}>
      <div className={"users-card-header"}>
        <div className={"users-card__background-image"}>
          {props.backgroundImage === "" ? (
            <img
              style={{
                backgroundColor:
                  "linear-gradient(0deg, rgba(36,0,0,1) 0%, rgba(240,242,245,1) 100%)",
              }}
              alt="description"
            />
          ) : (
            <img src={props.backgroundImage} alt="description" />
          )}
        </div>
        <div className={"users-card__avatar"}>
          {props.avatar === "" ? (
            <img
              style={{
                backgroundColor:
                  "linear-gradient(0deg, rgba(36,0,0,1) 0%, rgba(240,242,245,1) 100%)",
              }}
              alt="description"
            />
          ) : (
            <img src={props.avatar} alt="description" />
          )}
        </div>
      </div>
      <div className={"users-card-body"}>
        <h3>{props.name + " " + props.surname}</h3>
      </div>
    </div>
  );
};
