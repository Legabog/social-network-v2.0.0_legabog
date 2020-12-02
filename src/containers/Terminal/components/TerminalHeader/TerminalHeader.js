import React from "react";
import "./TerminalHeader.css";

import { TerminalHeaderPanel } from "containers/Terminal/components/TerminalHeaderPanel";

export const TerminalHeader = (props) => {
  return (
    <div className={"terminal-header"}>
      <TerminalHeaderPanel {...props} />
      <div className={"terminal-header__title"}>
        <span>Terminal •{props.userTerminalVersion}•</span>
      </div>
    </div>
  );
};
