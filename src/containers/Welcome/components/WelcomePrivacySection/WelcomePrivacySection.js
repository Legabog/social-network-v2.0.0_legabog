import React from "react";
import { useTranslation } from "react-i18next";
import "./WelcomePrivacySection.css";

export const WelcomePrivacySection = (props) => {
  const { t } = useTranslation()
  return (
    <div className={"welcome-privacy-section__wrapper"}>
      <div className={"welcome-privacy-section"}>
        <div className={"welcome-privacy-section__description-main"}>
          <span>{t("authorized.welcome.privacy-section.main")}</span>
        </div>
        <div className={"welcome-privacy-section__description-secondary"}>
          <span>
          {t("authorized.welcome.privacy-section.secondary")}
          </span>
        </div>
        <div
          className={"welcome-privacy-section__button"}
          onClick={() => {
            props.togglePrivacyGuide(true);
          }}
        >
          <span>{t("authorized.welcome.privacy-section.button")}</span>
        </div>
      </div>
    </div>
  );
};

