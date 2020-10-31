import React from "react";
import "./ButtonHelp.css";

export const ButtonHelp = (props) => {
  return (
    <div
      className="button-help"
      style={{
        width: props.width,
        marginLeft: props.marginLeft,
        marginTop: props.marginTop,
        opacity: props.helpOpacity,
        visibility: props.helpVisibility,
      }}
    >
      <span>{props.title}</span>
    </div>
  );
};