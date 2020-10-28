import React, { useState } from "react";
import _ from "lodash";
import "./ProfileAddHobbies.css";

import { BackDrop } from "pres-components/BackDrop";
import { ProfileAddHobbiesHeader } from "./components/ProfileAddHobbiesHeader";
import { ProfileAddHobbiesBody } from "./components/ProfileAddHobbiesBody";
import { ProfileAddHobbiesFooter } from "./components/ProfileAddHobbiesFooter";

export const ProfileAddHobbies = (props) => {
  const [tempHobbies, setTempHobbies] = useState(
    props.fullUserInfoAbout !== null &&
      props.fullUserInfoAbout.Hobbies.length !== 0
      ? props.fullUserInfoAbout.Hobbies
      : []
  );

  const toggleTempHobbies = (hobbie, icon, index) => {
    console.log(tempHobbies);
    !_.some(tempHobbies, { hobbie, icon })
      ? setTempHobbies([...tempHobbies, { hobbie, icon }])
      : setTempHobbies(
          tempHobbies.slice(0, index).concat(tempHobbies.slice(index + 1))
        );
  };

  const cancelClick = () => {
    if (
      props.profileAddHobbiesStateComponent === 1 &&
      props.fullUserInfoAbout.Hobbies.length === 0
    ) {
      props.toggleProfileAddHobbies(
        props.profileAddHobbiesVisibility,
        props.profileAddHobbiesOpacity
      );
      setTempHobbies([]);
      setTimeout(() => {
        props.toggleProfileAddHobbiesStateComponent(0);
      }, 200);
    } else {
      if (props.fullUserInfoAbout.Hobbies.length !== 0) {
        props.toggleProfileAddHobbies(
          props.profileAddHobbiesVisibility,
          props.profileAddHobbiesOpacity
        );
      } else {
        setTempHobbies([]);
        props.toggleProfileAddHobbies(
          props.profileAddHobbiesVisibility,
          props.profileAddHobbiesOpacity
        );
      }
    }
  };

  const saveClick = () => {
    props.toggleProfileAddHobbies(
      props.profileAddHobbiesVisibility,
      props.profileAddHobbiesOpacity
    );

    props.addFromTempHobbies(props.tempHobbies);
  };

  return (
    <div
      className={"profile-add-hobbies__wrapper"}
      style={{
        visibility: props.profileAddHobbiesVisibility,
        opacity: props.profileAddHobbiesOpacity,
      }}
    >
      <div className={"profile-add-hobbies"}>
        <ProfileAddHobbiesHeader
          setTempHobbies={setTempHobbies}
          cancelClick={cancelClick}
          {...props}
        />

        <ProfileAddHobbiesBody
          tempHobbies={tempHobbies}
          toggleTempHobbies={toggleTempHobbies}
          {...props}
        />
        <ProfileAddHobbiesFooter
          tempHobbies={tempHobbies}
          setTempHobbies={setTempHobbies}
          cancelClick={cancelClick}
          saveClick={saveClick}
          {...props}
        />
      </div>
      <BackDrop onClick={cancelClick} />
    </div>
  );
};
