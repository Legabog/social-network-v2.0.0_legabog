const TERMINAL_MINIMIZE = "TERMINAL_MINIMIZE";
const TERMINAL_EXPAND = "TERMINAL_EXPAND";

let initialState = {
  //
  userTerminalVersion: navigator.userAgent.indexOf("Windows") ? "Command line (CMD)" : "Bash",
  minimizeState: false,
  expandState: false,
  terminalWidth: "100%",
  terminalMaxWidth: "600px",
  terminalHeight: "630px",
  terminalMaxHeight: "95vh",
  terminalMarginTop: "30px",
  // 
  terminalInput: "",
  terminalOutputContainer: []
};

const terminalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TERMINAL_MINIMIZE:
      return {
        ...state,
        minimizeState: !state.minimizeState ? true : false ,
        terminalHeight: state.terminalHeight !== "5vh" 
          ? "5vh" 
          : !state.expandState 
            ? "630px" 
            : "95vh",
      };

    case TERMINAL_EXPAND:
      return {
        ...state,
        expandState: !state.expandState ? true : false,
        terminalMaxWidth: state.terminalMaxWidth !== "100%" 
          ? "100%" 
          : "600px",
        terminalHeight: state.terminalHeight === "5vh" 
          ? "5vh" 
          : state.terminalHeight === "630px" 
            ? "95vh"
            : "630px",
        terminalMarginTop: state.terminalMarginTop === "30px" ? "0px" : "30px",
      }; 
    default:
      return state;
  }
};

export const minimizeTerminal = () => {
  return {
    type: TERMINAL_MINIMIZE,
  };
};

export const expandTerminal = () => {
  return {
    type: TERMINAL_EXPAND
  }
}

export default terminalReducer;
