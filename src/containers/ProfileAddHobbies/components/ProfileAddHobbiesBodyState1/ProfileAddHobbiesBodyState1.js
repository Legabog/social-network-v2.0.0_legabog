import React from "react";
import "./ProfileAddHobbiesBodyState1.css";

import _ from "lodash/core";

import SearchIcon from "@material-ui/icons/Search";

import { ProfileAddHobbiesBodyItem } from "containers/ProfileAddHobbies/components/ProfileAddHobbiesBodyItem";

export const ProfileAddHobbiesBodyState1 = (props) => {
  return (
    <div className={"profile-add-hobbies-body_state-1"}>
      <div className={"profile-add-hobbies-body_state-1__title"}>
        <span>RECOMMENDED HOBBIES</span>
      </div>
      <div className={"profile-add-hobbies-body_state-1__hobbie-container"}>
        {props.profileAddHobbiesRecommendedHobbies.map((e, index) => {
          if (index <= 9) {
            return (
              <ProfileAddHobbiesBodyItem
                key={_.uniqueId(e)}
                Icon={e.icon}
                description={e.hobbie}
                {...props}
              />
            );
          }
          return null;
        })}

        <div
          className={"profile-add-hobbies-body_state-1__search-wrapper"}
          onClick={() => props.toggleProfileAddHobbiesStateComponent(1)}
        >
          <div className={"profile-add-hobbies-body_state-1__search"}>
            <div className={"profile-add-hobbies-body_state-1__search-icon"}>
              <SearchIcon />
            </div>

            <div
              className={"profile-add-hobbies-body_state-1__search-description"}
            >
              <span>Search for others</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
