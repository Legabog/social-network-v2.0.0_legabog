import { ProfileAddHobbiesBodyHobbie } from "containers/ProfileAddHobbies/components/ProfileAddHobbiesBodyHobbie";
import React from "react";
import "./ProfileAddHobbiesBodySelectedHobbies.css";

import _ from "lodash/core";

export const ProfileAddHobbiesBodySelectedHobbies = (props) => {
  return (
    <div className={"profile-add-hobbies-body-selected-hobbies"}>
      <div className={"profile-add-hobbies-body-selected-hobbies-title"}>
        <span>SELECTED HOBBIES</span>
      </div>

      <div className={"profile-add-hobbies-body-selected-hobbies-form-wrap"}>
        <div className={"profile-add-hobbies-body-selected-hobbies-form"}>
          {props.tempHobbies.map((e, index) => {
            return (
              <ProfileAddHobbiesBodyHobbie
                key={_.uniqueId(e)}
                description={e.hobbie}
                Icon={e.icon}
                tempHobbies={props.tempHobbies}
                toggleTempHobbies={props.toggleTempHobbies}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
