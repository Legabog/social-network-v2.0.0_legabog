import React from "react";
import { ButtonMessangerWrapper } from "../ButtonMessangerWrapper";
import { ButtonMessangerMenuWrapper } from "../ButtonMessangerMenuWrapper";
import { useHelpMessage } from "hooks/useHelpMessage";
import { ButtonHelp } from "containers/Header/components/ButtonHelp";

export const ButtonMessanger = (props) => {
  const [
    helpMessageOpacity,
    helpMessageVisibility,
    showHelpMessage,
    hideHelpMessage,
  ] = useHelpMessage();

  return (
    <>
      <ButtonMessangerWrapper
        {...props}
        showHelpMessage={showHelpMessage}
        hideHelpMessage={hideHelpMessage}
      />

      <ButtonHelp
        title={"Messanger"}
        width={"100px"}
        marginLeft={"140px"}
        marginTop={"63px"}
        helpOpacity={helpMessageOpacity}
        helpCreateVisibility={helpMessageVisibility}
      />

      <ButtonMessangerMenuWrapper {...props} />
    </>
  );
};
