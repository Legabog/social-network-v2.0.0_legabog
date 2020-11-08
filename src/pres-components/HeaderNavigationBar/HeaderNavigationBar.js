import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderNavigationBar.css";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

import { HeaderNavigationBarHelp } from "pres-components/HeaderNavigationBarHelp";
import { HeaderNavigationBarItem } from "pres-components/HeaderNavigationBarItem";
import { useHelpMessage } from "hooks/useHelpMessage";
import { useTranslation } from "react-i18next";

export const HeaderNavigationBar = (props) => {
  const { t } = useTranslation();
  const [
    helpHomeMessageOpacity,
    helpHomeMessageVisibility,
    showHomeHelpMessage,
    hideHomeHelpMessage,
  ] = useHelpMessage();

  const [
    helpFriendsMessageOpacity,
    helpFriendsMessageVisibility,
    showFriendsHelpMessage,
    hideFriendsHelpMessage,
  ] = useHelpMessage();

  const [
    helpGroupsMessageOpacity,
    helpGroupsMessageVisibility,
    showGroupsHelpMessage,
    hideGroupsHelpMessage,
  ] = useHelpMessage();

  //-----------Active link focus

  const [activeLink, setActiveLink] = useState();

  const toggleActiveLink = (link) => {
    setActiveLink(link);
  };

  const toggleActiveLinkAfterRender = () => {
    if (props.location.pathname === "/") {
      toggleActiveLink("/");
    } else {
      if (props.location.pathname === "/friends") {
        toggleActiveLink("/friends");
      } else {
        if (props.location.pathname === "/groups") {
          toggleActiveLink("/groups");
        } else {
          toggleActiveLink(props.location.pathname);
        }
      }
    }
  };

  //

  useEffect(() => {
    toggleActiveLinkAfterRender();
  });

  return (
    <div className="header-navigation-bar">
      <NavLink to={"/"}>
        <HeaderNavigationBarItem
          link={"/"}
          activeLink={activeLink}
          activeIcon={HomeIcon}
          Icon={HomeOutlinedIcon}
          toggleActiveLink={toggleActiveLink}
          showHelp={showHomeHelpMessage}
          hideHelp={hideHomeHelpMessage}
        />
      </NavLink>

      <HeaderNavigationBarHelp
        title={t(
          "authorized.header.header-center.header-navigation-bar.help-1"
        )}
        helpOpacity={helpHomeMessageOpacity}
        helpVisibility={helpHomeMessageVisibility}
        helpMarginLeft={"-260px"}
      />

      <NavLink to={"/friends"}>
        <HeaderNavigationBarItem
          link={"/friends"}
          activeLink={activeLink}
          activeIcon={SupervisorAccountIcon}
          Icon={SupervisorAccountIcon}
          toggleActiveLink={toggleActiveLink}
          showHelp={showFriendsHelpMessage}
          hideHelp={hideFriendsHelpMessage}
        />
      </NavLink>

      <HeaderNavigationBarHelp
        title={t(
          "authorized.header.header-center.header-navigation-bar.help-2"
        )}
        helpOpacity={helpFriendsMessageOpacity}
        helpVisibility={helpFriendsMessageVisibility}
        helpMarginLeft={"-10px"}
      />

      <NavLink to={"/groups"}>
        <HeaderNavigationBarItem
          link={"/groups"}
          activeLink={activeLink}
          activeIcon={SupervisedUserCircleIcon}
          Icon={SupervisedUserCircleIcon}
          toggleActiveLink={toggleActiveLink}
          showHelp={showGroupsHelpMessage}
          hideHelp={hideGroupsHelpMessage}
        />
      </NavLink>

      <HeaderNavigationBarHelp
        title={t(
          "authorized.header.header-center.header-navigation-bar.help-3"
        )}
        helpOpacity={helpGroupsMessageOpacity}
        helpVisibility={helpGroupsMessageVisibility}
        helpMarginLeft={"240px"}
      />
    </div>
  );
};
