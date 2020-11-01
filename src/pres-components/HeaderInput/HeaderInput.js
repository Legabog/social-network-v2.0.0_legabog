import React from "react";
import "./HeaderInput.css";

import SearchIcon from "@material-ui/icons/Search";

export const HeaderInput = (props) => {
  return (
    <div
      className={props.isFocus ? "header__input_active" : "header__input"}
      onClick={props.toggleActiveInput}
    >
      {props.isFocus ? null : <SearchIcon onClick={props.toggleActiveInput} />}
      <input
        type="text"
        value={props.value}
        onChange={props.changeHandler}
        ref={props.inputref}
        placeholder="Search Social Network"
        onClick={props.toggleActiveInput}
        onBlur={props.toggleActiveInput}
      />
    </div>
  );
};
