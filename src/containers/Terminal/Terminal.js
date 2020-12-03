import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./Terminal.css";

import { useInput } from "hooks/useInput";

import {
  minimizeTerminal,
  expandTerminal,
  changeTextColorTerminal,
  changeBackgroundColorTerminal,
  setDefaultColorTerminal,
} from "redux/terminal-reducer";

import { TerminalBody, TerminalHeader } from "containers/Terminal/components";
import { useTranslation } from "react-i18next";

const Terminal_ = (props) => {
  const { t } = useTranslation()
  const [value, ref, changeHandler, , focusHandler, , setValue] = useInput("");
  const [terminalOutputContainer, setTerminalOutputContainer] = useState([
    t("authorized.terminal.welcome-message"),
  ]);

  const terminalEnterInputHandler = (e) => {
    switch (e.key) {
      case "Enter":
        setTerminalOutputContainer((prev) => [
          ...prev,
          `${props.userTerminalVersion === "Bash" ? "$" : ">"} ${value}`,
        ]);

        if (value.toLowerCase().trim() === "help") {
          setTerminalOutputContainer((prev) => [...prev, `List of commands: `]);
          props.cmdCommands.map((e) =>
            setTerminalOutputContainer((prev) => [
              ...prev,
              `${e.command} - ${e.action}`,
            ])
          );
          setValue("");
        }

        if (value.toLowerCase().trim() === "cls") {
          setTerminalOutputContainer([]);
          setValue("");
        }

        if (value.toLowerCase().trim().slice(0, 6) === "color ") {
          props.changeTextColorTerminal(value.toLowerCase().trim().slice(6));
          setValue("");
        }

        if (value.toLowerCase().trim().slice(0, 17) === "background-color ") {
          props.changeBackgroundColorTerminal(
            value.toLowerCase().trim().slice(17)
          );
          setValue("");
        }

        if (value.toLowerCase().trim() === "default-color") {
          props.setDefaultColorTerminal();
          setValue("");
        }

        if (value.toLowerCase().trim() === "date") {
          const date = new Date();
          setTerminalOutputContainer((prev) => [
            ...prev,
            `The current date: ${
              date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
            }.${
              date.getMonth() + 1 < 10
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1
            }.${date.getFullYear()}`,
          ]);
          setValue("");
        }

        if (value.toLowerCase().trim().slice(0, 5) === "echo ") {
          setTerminalOutputContainer((prev) => [
            ...prev,
            `${value.trim().slice(4)}`,
          ]);
          setValue("");
        }

        if (value.toLowerCase().trim() === "doc") {
          window.open(
            "https://github.com/Legabog/social-network-v2.0.0_legabog/blob/master/README.md"
          );
          setValue("");
        }

        if (value.toLowerCase().trim() === "github") {
          window.open("https://github.com/Legabog/");
          setValue("");
        }

        if (value.toLowerCase().trim() === "pause") {
          setTerminalOutputContainer((prev) => [
            ...prev,
            `Press any key to continue...`,
          ]);
          setValue("");
        }

        if (value.toLowerCase().trim() === "exit") {
          props.history.push("/");
          setValue("");
        }

        // Invalid command
        let invalidCommand = 0;
        props.cmdCommands.map((e) => {
          if (value.toLowerCase().trim() === e.command) {
            invalidCommand++;

            return null
          }

          return null
        });
        if (invalidCommand === 0) {
          setTerminalOutputContainer((prev) => [
            ...prev,
            `"${value
              .toLowerCase()
              .trim()}" is not a command. Invalid command. `,
          ]);
        }
        //

        setValue("");
        break;

      // case "ArrowUp":
      //   console.log(num)
      //   if (terminalOutputContainer[terminalOutputContainer.length - num].slice(0, 1) === "> ") {
      //     setValue(terminalOutputContainer[terminalOutputContainer.length - num].slice(2))
      //     setNum(prev => prev + 1)
      //   } else {
      //     setNum(prev => prev + 1)
      //   }
      //   break;

      default:
        return null;
    }
  };

  return (
    <div className={"terminal-wrapper"}>
      <div
        className={"terminal"}
        style={{
          width: `${props.terminalWidth}`,
          maxWidth: `${props.terminalMaxWidth}`,
          height: `${props.terminalHeight}`,
          maxHeight: `${props.terminalMaxHeight}`,
          marginTop: `${props.terminalMarginTop}`,
        }}
      >
        <TerminalHeader {...props} />
        {!props.minimizeState ? (
          <TerminalBody
            value={value}
            inputRef={ref}
            changeHandler={changeHandler}
            focusHandler={focusHandler}
            terminalEnterInputHandler={terminalEnterInputHandler}
            terminalOutputContainer={terminalOutputContainer}
            {...props}
          />
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userTerminalVersion: state.terminalReducer.userTerminalVersion,
  minimizeState: state.terminalReducer.minimizeState,
  expandState: state.terminalReducer.expandState,
  terminalWidth: state.terminalReducer.terminalWidth,
  terminalMaxWidth: state.terminalReducer.terminalMaxWidth,
  terminalHeight: state.terminalReducer.terminalHeight,
  terminalMaxHeight: state.terminalReducer.terminalMaxHeight,
  terminalMarginTop: state.terminalReducer.terminalMarginTop,
  terminalTextColor: state.terminalReducer.terminalTextColor,
  terminalBackgroundColor: state.terminalReducer.terminalBackgroundColor,
  cmdCommands: state.terminalReducer.cmdCommands,
});

export const Terminal = compose(
  withRouter,
  connect(mapStateToProps, {
    minimizeTerminal,
    expandTerminal,
    changeTextColorTerminal,
    changeBackgroundColorTerminal,
    setDefaultColorTerminal,
  })
)(Terminal_);
