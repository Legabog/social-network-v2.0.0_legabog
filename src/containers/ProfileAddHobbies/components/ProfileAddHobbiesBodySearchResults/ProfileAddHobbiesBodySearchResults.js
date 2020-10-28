import React from "react";
import "./ProfileAddHobbiesBodySearchResults.css";

import _ from "lodash";

import { ProfileAddHobbiesBodyHobbieNotFound } from "containers/ProfileAddHobbies/components/ProfileAddHobbiesBodyHobbiesNotFound";
import { ProfileAddHobbiesBodyHobbie } from "containers/ProfileAddHobbies/components/ProfileAddHobbiesBodyHobbie";

export const ProfileAddHobbiesBodySearchResults = (props) => {
  return (
    <div className={"profile-add-hobbies-body-search-results"}>
      {props.searchInput ? (
        <div className={"profile-add-hobbies-body-search-results__description"}>
          <span>RESULTS FOR "{props.searchInput}"</span>
        </div>
      ) : null}

      <div
        className={"profile-add-hobbies-body-search-results__search-results"}
      >
        {props.resultAddHobbies === 0 && props.searchInput !== "" ? (
          <ProfileAddHobbiesBodyHobbieNotFound />
        ) : null}

        {props.profileAddHobbiesRecommendedHobbies.map((e, index) => {
          if (props.searchInput) {
            if (
              e.hobbie
                .toLowerCase()
                .includes(props.searchInput.toLowerCase()) &&
              !_.some(props.tempHobbies, {
                hobbie: e.hobbie,
                icon: e.icon,
              })
            ) {
              return (
                <ProfileAddHobbiesBodyHobbie
                  key={_.uniqueId(e)}
                  description={e.hobbie}
                  Icon={e.icon}
                  tempHobbies={props.tempHobbies}
                  toggleTempHobbies={props.toggleTempHobbies}
                />
              );
            }
          }
          return null;
        })}
      </div>
    </div>
  );
};
