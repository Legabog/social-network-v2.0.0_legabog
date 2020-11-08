import React from "react";
import "./ProfileHeaderConfirmRemoveBackgroundHeader.css";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export const ProfileHeaderConfirmRemoveBackgroundHeader = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"profileHeaderConfirmRemoveBackground__header"}>
      <div className={"profileHeaderConfirmRemoveBackground__header__title"}>
        <span>
          {t(
            "authorized.profile.header.confirm-remove-background.header.title"
          )}
        </span>
      </div>
      <div
        className={"profileHeaderConfirmRemoveBackground__header__closeIcon"}
      >
        <IconButton
          onClick={() => {
            props.toggleConfirmRemove(false);
          }}
        >
          <CloseOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};
