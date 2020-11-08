import React from "react";
import EventIcon from "@material-ui/icons/Event";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import PostAddIcon from "@material-ui/icons/PostAdd";
import FlagIcon from "@material-ui/icons/Flag";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import "./ButtonCreateMenuWrapper.css";
import { ButtonCreateMenuSection } from "../ButtonCreateMenuSection";
import { useTranslation } from "react-i18next";

export const ButtonCreateMenuWrapper = (props) => {
  const { t } = useTranslation();
  return (
    <div
      className={"button-create-menu__wrapper"}
      style={
        props.activeButton === 0
          ? { opacity: 1, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
    >
      <div className="button-create-menu__header">
        <h2>{t("authorized.header.header-right.button-create.menu.h2")}</h2>
      </div>
      <div className="button-create-menu__body">
        <ButtonCreateMenuSection
          toggleActiveButton={props.toggleActiveButton}
          Icon={PostAddIcon}
          category={t(
            "authorized.header.header-right.button-create.menu.section-1.category"
          )}
          help={t(
            "authorized.header.header-right.button-create.menu.section-1.help"
          )}
        />

        <ButtonCreateMenuSection
          toggleActiveButton={props.toggleActiveButton}
          Icon={PhotoAlbumIcon}
          category={t(
            "authorized.header.header-right.button-create.menu.section-2.category"
          )}
          help={t(
            "authorized.header.header-right.button-create.menu.section-2.help"
          )}
        />

        <ButtonCreateMenuSection
          toggleActiveButton={props.toggleActiveButton}
          Icon={EventIcon}
          category={t(
            "authorized.header.header-right.button-create.menu.section-3.category"
          )}
          help={t(
            "authorized.header.header-right.button-create.menu.section-3.help"
          )}
        />

        <hr />

        <ButtonCreateMenuSection
          toggleActiveButton={props.toggleActiveButton}
          Icon={FlagIcon}
          category={t(
            "authorized.header.header-right.button-create.menu.section-4.category"
          )}
          help={t(
            "authorized.header.header-right.button-create.menu.section-4.help"
          )}
        />

        <ButtonCreateMenuSection
          toggleActiveButton={props.toggleActiveButton}
          Icon={SupervisedUserCircleIcon}
          category={t(
            "authorized.header.header-right.button-create.menu.section-5.category"
          )}
          help={t(
            "authorized.header.header-right.button-create.menu.section-5.help"
          )}
        />

        <ButtonCreateMenuSection
          toggleActiveButton={props.toggleActiveButton}
          Icon={EventAvailableIcon}
          category={t(
            "authorized.header.header-right.button-create.menu.section-6.category"
          )}
          help={t(
            "authorized.header.header-right.button-create.menu.section-6.help"
          )}
        />
      </div>
    </div>
  );
};
