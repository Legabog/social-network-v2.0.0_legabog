import React from "react";
import "./RegistrationBlockHeader.css";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export const RegistrationBlockHeader = (props) => {
  const { t } = useTranslation();

  return (
    <div className="registration-block__header">
      <div className="registration-block__header__description">
        {t("unauthorized.registration-block.header.description-1")}
      </div>
      <div className="registration-block__header__sub-description">
        {t("unauthorized.registration-block.header.description-2")}
      </div>
      <div className="registration-block__header__close-icon">
        <IconButton
          onClick={() => {
            props.displayRegistrationBlockFalse();
            props.setDefaultInputsValues();
          }}
        >
          <CloseOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};
