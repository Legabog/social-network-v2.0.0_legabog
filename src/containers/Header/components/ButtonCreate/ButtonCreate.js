import React from "react";
import { ButtonCreateWrapper } from "../ButtonCreateWrapper";
import { ButtonCreateMenuWrapper } from "../ButtonCreateMenuWrapper";
import { useHelpMessage } from "hooks/useHelpMessage";
import { ButtonHelp } from "containers/Header/components/ButtonHelp";

export const ButtonCreate = (props) => {
  const [
    helpMessageOpacity,
    helpMessageVisibility,
    showHelpMessage,
    hideHelpMessage,
  ] = useHelpMessage();

  return (
    <>
      <ButtonCreateWrapper
        {...props}
        showHelpMessage={showHelpMessage}
        hideHelpMessage={hideHelpMessage}
      />
      
      <ButtonHelp
        title={"Create"}
        width={"70px"}
        marginLeft={"105px"}
        marginTop={"63px"}
        helpOpacity={helpMessageOpacity}
        helpCreateVisibility={helpMessageVisibility}
      />

      <ButtonCreateMenuWrapper {...props} />
    </>
  );
};
