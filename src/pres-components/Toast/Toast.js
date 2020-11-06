import React, { useEffect } from "react";
import "./Toast.css";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";

export const Toast = (props) => {
  useEffect(() => {
    props.effectAfterAddToast()
  });

  return (
    <div id={props.className} className={props.className} ref={props.toastRef}>
      {props.Icon ? <props.Icon /> : null}
      {props.description ? <span>{props.description}</span> : null}
      {props.button ? (
        <div
          className={"toast_offline__button"}
          onClick={props.closeAndDeleteHandler}
        >
          <span>{props.button}</span>
        </div>
      ) : null}
      <IconButton onClick={props.closeAndDeleteHandler}>
        <CloseOutlinedIcon />
      </IconButton>
    </div>
  );
};
