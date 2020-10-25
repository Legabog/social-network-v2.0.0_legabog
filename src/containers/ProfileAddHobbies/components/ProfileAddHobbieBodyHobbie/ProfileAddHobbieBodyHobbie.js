import React from "react";
import "./ProfileAddHobbieBodyHobbie.css";

export const ProfileAddHobbieBodyHobbie = (props) => {
  return (
    <div className={"profile-add-hobbies-body-hobbie"}>
      <div className={"profile-add-hobbies-body-hobbie__icon"}>
        <props.Icon />
      </div>
      <div className={"profile-add-hobbies-body-hobbie__description"}>
        <span>{props.description}</span>
      </div>
    </div>
  );
};
