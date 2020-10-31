import { ButtonHelp } from "containers/Header/components/ButtonHelp";
import { useHelpMessage } from "hooks/useHelpMessage";
import React from "react";
import { ButtonAccountMenuWrapper } from "../ButtonAccountMenuWrapper";
import { ButtonAccountWrapper } from "../ButtonAccountWrapper";

export const ButtonAccount = (props) => {
  const [
    helpMessageOpacity,
    helpMessageVisibility,
    showHelpMessage,
    hideHelpMessage,
  ] = useHelpMessage();

  return (
    <>
      <ButtonAccountWrapper
        {...props}
        showHelpMessage={showHelpMessage}
        hideHelpMessage={hideHelpMessage}
      />

      <ButtonHelp
        title={"Account"}
        width={"70px"}
        marginLeft={"230px"}
        marginTop={"63px"}
        helpOpacity={helpMessageOpacity}
        helpCreateVisibility={helpMessageVisibility}
      />

      <ButtonAccountMenuWrapper {...props} />
    </>
  );
};
