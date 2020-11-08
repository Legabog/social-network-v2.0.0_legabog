import { ButtonHelp } from "containers/Header/components/ButtonHelp";
import { useHelpMessage } from "hooks/useHelpMessage";
import React from "react";
import { useTranslation } from "react-i18next";
import { ButtonAccountMenuWrapper } from "../ButtonAccountMenuWrapper";
import { ButtonAccountWrapper } from "../ButtonAccountWrapper";

export const ButtonAccount = (props) => {
  const { t } = useTranslation()
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
        title={t("authorized.header.header-right.button-account.help")}
        marginLeft={"230px"}
        marginTop={"63px"}
        helpOpacity={helpMessageOpacity}
        helpCreateVisibility={helpMessageVisibility}
      />

      <ButtonAccountMenuWrapper {...props} />
    </>
  );
};
