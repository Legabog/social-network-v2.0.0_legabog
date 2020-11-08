import React from "react";
import "./ProfileEditDetailsBody.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";

import { ProfileEditDetailsBodySection } from "../ProfileEditDetailsBodySection";
import { useTranslation } from "react-i18next";

export const ProfileEditDetailsBody = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"profile-edit-details-body"}>
      <div className={"profile-edit-details-body__description"}>
        <div className={"profile-edit-details-body__description-main"}>
          <span>{t("authorized.profile.edit-details.body.main")}</span>
        </div>
        <div className={"profile-edit-details-body__description-secondary"}>
          <span>{t("authorized.profile.edit-details.body.secondary")}</span>
        </div>
      </div>
      <ProfileEditDetailsBodySection
        componentArguments={
          props.fullUserInfoAbout === null
            ? null
            : props.fullUserInfoAbout.WorkAndEducation.WorkPlace
        }
        navLink={"/profile/about_work_and_education"}
        titleBold={t(
          "authorized.profile.edit-details.body.section-1.title-bold"
        )}
        title={t("authorized.profile.edit-details.body.section-1.title")}
        Icon={WorkIcon}
        {...props}
      />

      <hr />

      <ProfileEditDetailsBodySection
        componentArguments={
          props.fullUserInfoAbout === null
            ? null
            : props.fullUserInfoAbout.WorkAndEducation.College
        }
        navLink={"/profile/about_work_and_education"}
        titleBold={t(
          "authorized.profile.edit-details.body.section-2.title-bold"
        )}
        title={t("authorized.profile.edit-details.body.section-2.title")}
        Icon={SchoolIcon}
        {...props}
      />

      <hr />

      <ProfileEditDetailsBodySection
        componentArguments={
          props.fullUserInfoAbout === null
            ? null
            : props.fullUserInfoAbout.PlacesLived.CurrentCity
        }
        navLink={"/profile/about_places"}
        titleBold={t(
          "authorized.profile.edit-details.body.section-3.title-bold"
        )}
        title={t("authorized.profile.edit-details.body.section-3.title")}
        Icon={LocationCityIcon}
        {...props}
      />

      <hr />

      <ProfileEditDetailsBodySection
        componentArguments={
          props.fullUserInfoAbout === null
            ? null
            : props.fullUserInfoAbout.PlacesLived.HomeTown
        }
        navLink={"/profile/about_places"}
        titleBold={t(
          "authorized.profile.edit-details.body.section-4.title-bold"
        )}
        title={t("authorized.profile.edit-details.body.section-4.title")}
        Icon={HomeRoundedIcon}
        {...props}
      />

      <hr />

      <ProfileEditDetailsBodySection
        componentArguments={
          props.fullUserInfoAbout === null
            ? null
            : props.fullUserInfoAbout.FamilyAndRelationships.Relationship
        }
        navLink={"/profile/about_family_and_relationships"}
        titleBold={t(
          "authorized.profile.edit-details.body.section-5.title-bold"
        )}
        title={t("authorized.profile.edit-details.body.section-5.title")}
        Icon={FavoriteRoundedIcon}
        {...props}
      />
    </div>
  );
};
