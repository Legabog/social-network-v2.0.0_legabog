import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./Terminal.css";

import { minimizeTerminal, expandTerminal } from "redux/terminal-reducer";

import { TerminalBody, TerminalHeader } from "containers/Terminal/components";

const Terminal_ = (props) => {
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
        {!props.minimizeState ? <TerminalBody {...props} /> : null}
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
});

export const Terminal = compose(
  withRouter,
  connect(mapStateToProps, {
    minimizeTerminal,
    expandTerminal,
  })
)(Terminal_);
