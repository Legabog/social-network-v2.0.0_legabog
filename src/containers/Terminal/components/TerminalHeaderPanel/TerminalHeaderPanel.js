import React from "react";
import "./TerminalHeaderPanel.css";

import { TerminalHeaderPanelItem } from "containers/Terminal/components/TerminalHeaderPanelItem";

export const TerminalHeaderPanel = (props) => {
  return (
    <div className={"terminal-header-panel"}>
      <TerminalHeaderPanelItem
        link={"/"}
        color={"red"}
        helpTitle={"Close"}
        helpMarginTop={"65px"}
        helpMarginLeft={"-35px"}
      />
      <TerminalHeaderPanelItem
        color={"orange"}
        helpTitle={"Minimize"}
        helpMarginTop={"65px"}
        helpMarginLeft={"10px"}
        clickHandler={props.minimizeTerminal}
      />
      <TerminalHeaderPanelItem
        color={"green"}
        helpTitle={"Expand"}
        helpMarginTop={"65px"}
        helpMarginLeft={"50px"}
        clickHandler={props.expandTerminal}
      />
    </div>
  );
};
