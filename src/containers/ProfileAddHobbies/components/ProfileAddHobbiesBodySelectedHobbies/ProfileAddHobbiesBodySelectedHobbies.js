import { ProfileAddHobbiesBodyHobbie } from "containers/ProfileAddHobbies/components/ProfileAddHobbiesBodyHobbie";
import React from "react";
import "./ProfileAddHobbiesBodySelectedHobbies.css";

import _ from "lodash/core";
import { useTranslation } from "react-i18next";

export const ProfileAddHobbiesBodySelectedHobbies = (props) => {
  const { t } = useTranslation()
  return (
    <div className={"profile-add-hobbies-body-selected-hobbies"}>
      <div className={"profile-add-hobbies-body-selected-hobbies-title"}>
        <span>{t("authorized.profile.add-hobbies.body.state-2.selected-hobbies")}</span>
      </div>

      <div className={"profile-add-hobbies-body-selected-hobbies-form-wrap"}>
        <div className={"profile-add-hobbies-body-selected-hobbies-form"}>
          {props.tempHobbies.map((e, index) => {
            return (
              <ProfileAddHobbiesBodyHobbie
                key={_.uniqueId(e)}
                description={e.hobbie}
                Icon={e.icon}
                tempHobbies={props.tempHobbies}
                toggleTempHobbies={props.toggleTempHobbies}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
