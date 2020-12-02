import React, { useEffect, useState } from "react";
import "./TerminalBody.css";

import _ from "lodash/core";
import { useInput } from "hooks/useInput";

export const TerminalBody = (props) => {
  const [value, ref, changeHandler, , focusHandler, , setValue] = useInput("");
  const [terminalOutputContainer, setTerminalOutputContainer] = useState([]);

  const terminalEnterInputHandler = (e) => {
    switch (e.key) {
      case "Enter":
        setTerminalOutputContainer([...terminalOutputContainer, value]);
        setValue("");
        break;
      default:
        return null;
    }
  };

  useEffect(() => {
    focusHandler();
  }, [focusHandler]);

  return (
    <div
      className={"terminal-body"}
      style={{ maxHeight: !props.expandState ? "600px" : "89vh" }}
    >
      <div className={"terminal-body-output-container"}>
        <pre>
          Welcome user! It is {props.userTerminalVersion}. Type "help" for a
          list of all available commands.
        </pre>

        {terminalOutputContainer.map((e, index) => (
          <pre key={_.uniqueId(e)}>
            {props.userTerminalVersion === "Bash" ? "$" : ">"}&nbsp;{e}
          </pre>
        ))}
      </div>

      <div className={"terminal-body-input"}>
        <span>{props.userTerminalVersion === "Bash" ? "$" : ">"}&nbsp;</span>
        <input
          value={value}
          ref={ref}
          onChange={changeHandler}
          onKeyUp={terminalEnterInputHandler}
        />
      </div>
    </div>
  );
};
