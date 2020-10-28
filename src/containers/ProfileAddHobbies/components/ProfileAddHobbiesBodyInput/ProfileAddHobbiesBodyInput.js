import React from "react";
import "./ProfileAddHobbiesBodyInput.css";

import SearchIcon from "@material-ui/icons/Search";

export const ProfileAddHobbiesBodyInput = (props) => {
  return (
    <div className={"profile-add-hobbies-body-search-input-wrapper"}>
      <div className={"profile-add-hobbies-body-search-input"}>
        <SearchIcon onClick={() => {}} />
        <input
          type={"text"}
          value={props.searchInput}
          onChange={props.changeSearchInputHandler}
          id={"profile-add-hobbies-body-search-input"}
          placeholder={"What do you do for fun?"}
        />
      </div>
    </div>
  );
};
