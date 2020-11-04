import React from "react";
import "./ProfileAddHobbiesBodyHobbie.css";

import _ from "lodash";

export const ProfileAddHobbiesBodyHobbie = (props) => {
  return (
    <div
      className={`profile-add-hobbies-body-hobbie${
        _.some(props.tempHobbies, {
          hobbie: props.description,
          icon: props.Icon,
        })
          ? "_active"
          : ""
      }`}
      onClick={() => {
        props.toggleTempHobbies(
          props.description,
          props.Icon,
          _.findIndex(props.tempHobbies, {
            hobbie: props.description,
            icon: props.Icon,
          })
        );
      }}
    >
      <div
        className={`profile-add-hobbies-body-hobbie__icon${
          _.some(props.tempHobbies, {
            hobbie: props.description,
            icon: props.Icon,
          })
            ? "_active"
            : ""
        }`}
      >
        <props.Icon />
      </div>

      <div
        className={`profile-add-hobbies-body-hobbie__description${
          _.some(props.tempHobbies, {
            hobbie: props.description,
            icon: props.Icon,
          })
            ? "_active"
            : ""
        }`}
      >
        <span>{props.description}</span>
      </div>
    </div>
  );
};
