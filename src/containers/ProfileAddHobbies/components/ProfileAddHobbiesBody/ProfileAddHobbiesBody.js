import React, { useState } from "react";
import "./ProfileAddHobbiesBody.css";

import _ from "lodash/core";

import SearchIcon from "@material-ui/icons/Search";

import { ProfileAddHobbiesBodyItem } from "../ProfileAddHobbiesBodyItem";
import { ProfileAddHobbieBodyHobbie } from "containers/ProfileAddHobbies/components/ProfileAddHobbieBodyHobbie";

export const ProfileAddHobbiesBody = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const changeSearchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  switch (props.profileAddHobbiesStateComponent) {
    case 0:
      return (
        <div className={"profile-add-hobbies-body"}>
          <div className={"profile-add-hobbies-body__title"}>
            <span>RECOMMENDED HOBBIES</span>
          </div>
          <div className={"profile-add-hobbies-body__hobbie-container"}>
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
              className={"profile-add-hobbies-body__search-wrapper"}
              onClick={() => props.toggleProfileAddHobbiesStateComponent(1)}
            >
              <div className={"profile-add-hobbies-body__search"}>
                <div className={"profile-add-hobbies-body__search__icon"}>
                  <SearchIcon />
                </div>

                <div
                  className={"profile-add-hobbies-body__search__description"}
                >
                  <span>Search for others</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className={"profile-add-hobbies-body"}>
          <div className={"profile-add-hobbies-body__search-input-wrapper"}>
            <div className={"profile-add-hobbies-body__search-input"}>
              <SearchIcon onClick={() => {}} />
              <input
                type={"text"}
                value={searchInput}
                onChange={changeSearchInputHandler}
                id={"profile-add-hobbies-body__search-input"}
                placeholder={"What do you do for fun?"}
              />
            </div>
          </div>

          {searchInput ? (
            <div
              className={"profile-add-hobbies-body__search-results-description"}
            >
              <span>RESULTS FOR "{searchInput}"</span>
            </div>
          ) : null}

          <div className={"profile-add-hobbies-body__search-results"}>
            {props.profileAddHobbiesRecommendedHobbies.map((e, index) => {
              if (searchInput) {
                if (
                  e.hobbie.toLowerCase().includes(searchInput.toLowerCase())
                ) {
                  return (
                    <ProfileAddHobbieBodyHobbie
                      key={_.uniqueId(e)}
                      description={e.hobbie}
                      Icon={e.icon}
                    />
                  );
                }
              }
              return null;
            })}

          </div>
        </div>
      );

    default:
      return null;
  }
};
