import React from "react";
import { useHelpMessage } from "hooks/useHelpMessage";
import { ButtonNotificationsMenuWrapper } from "../ButtonNotificationsMenuWrapper";
import { ButtonNotificationsWrapper } from "../ButtonNotificationsWrapper";
import { ButtonHelp } from "containers/Header/components/ButtonHelp";

export const ButtonNotifications = (props) => {
  const [
    helpMessageOpacity,
    helpMessageVisibility,
    showHelpMessage,
    hideHelpMessage,
  ] = useHelpMessage();

  return (
    <>
      <ButtonNotificationsWrapper
        {...props}
        showHelpMessage={showHelpMessage}
        hideHelpMessage={hideHelpMessage}
      />

      <ButtonHelp
        title={"Notifications"}
        width={"100px"}
        marginLeft={"190px"}
        marginTop={"63px"}
        helpOpacity={helpMessageOpacity}
        helpCreateVisibility={helpMessageVisibility}
      />

      <ButtonNotificationsMenuWrapper {...props} />
    </>
  );
};
