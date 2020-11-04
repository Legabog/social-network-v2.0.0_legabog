import React, { useRef } from "react";
import "./Toast.css";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";

export const Toast = (props) => {
  console.log("Render Toast");
  const ref = useRef();
  const clickHandler = () => {
    ref.current.style.animation = "hideToast 0.3s ease-out forwards";
  };

  return (
    <div id={props.className} className={props.className} ref={ref}>
      {props.Icon ? <props.Icon /> : null}
      {props.description ? <span>{props.description}</span> : null}
      {props.button ? (
        <div className={"toast_offline__button"} onClick={clickHandler}>
          <span>{props.button}</span>
        </div>
      ) : null}
      <IconButton onClick={clickHandler}>
        <CloseOutlinedIcon />
      </IconButton>
    </div>
  );
};
