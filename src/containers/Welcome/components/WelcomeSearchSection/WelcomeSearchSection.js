import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useInput } from "hooks/useInput";
import "./WelcomeSearchSection.css";

export const WelcomeSearchSection = (props) => {
  const [value, ref, changeHandler, , focusHandler, blurHandler] = useInput("");

  return (
    <div className={"welcome-search-section__wrapper"}>
      <div className={"welcome-search-section"}>
        <div className={"welcome-search-section__description-main"}>
          <span>Find People You Know</span>
        </div>
        <div className={"welcome-search-section__description-secondary"}>
          <span>Search by name or look for email.</span>
        </div>
        <div className={"welcome-search-section__input"}>
          <SearchIcon onClick={focusHandler} />
          <input
            type="text"
            ref={ref}
            value={value}
            onChange={changeHandler}
            onFocus={focusHandler}
            onBlur={blurHandler}
            id="welcome-component-input"
            placeholder="Search by name or email"
          />
        </div>
      </div>
    </div>
  );
};
