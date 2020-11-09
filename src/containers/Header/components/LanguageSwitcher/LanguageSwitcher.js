import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

import ruflag from "assets/flags/rus.png";
import enflag from "assets/flags/eng.png";

export const LanguageSwitcher = (props) => {
  const { i18n } = useTranslation();

  const toggleSwitcher = () => {
    if (localStorage.getItem("_app-language") === "ru") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ru");
    }
  };

  const changeHandler = () => {

  }

  return (
    <div className="language-switcher">
      <div className={"language-switcher__ru"}>
        <img src={ruflag} alt={""} />
        <span
          className={
            localStorage.getItem("_app-language") === "ru"
              ? "active"
              : "not-active"
          }
        >
          Ru
        </span>
      </div>

      <label className="language-switcher__switcher">
        <input
          id="LanguageSwitcher"
          type="checkbox"
          checked={
            localStorage.getItem("_app-language") === "ru" ? false : true
          }
          onChange={changeHandler}
        />
        <span
          className="language-switcher__slider-round"
          onClick={toggleSwitcher}
        ></span>
      </label>
      <div className={"language-switcher__en"}>
        <img src={enflag} alt={""} />
        <span
          className={
            localStorage.getItem("_app-language") === "en"
              ? "active"
              : "not-active"
          }
        >
          En
        </span>
      </div>
    </div>
  );
};
