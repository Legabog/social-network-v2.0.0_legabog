import React, { useState, useEffect, useRef } from "react";
import "./Toast.css";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";

export const Toast = (props) => {
  console.log(props);

  const clickHandler = () => {
    props.deleteFromList(props.id);
  };

  return (
    <div className={props.className}>
      {props.Icon ? <props.Icon /> : null}
      {props.description ? <span>{props.description}</span> : null}
      {props.button ? (
        <div className={"toast_offline__button"}>
          <span>{props.button}</span>
        </div>
      ) : null}
      <IconButton onClick={clickHandler}>
        <CloseOutlinedIcon />
      </IconButton>
    </div>
  );

  // </div>
  // return ReactDOM.createPortal(
  //   <div className={"toast_offline"} ref={toastRef}>
  //     <WifiOffIcon />
  //     <span>You are currently offline.</span>
  //     <div className={"toast_offline__button"} onClick={pageRelaod}>
  //       <span>Refresh</span>
  //     </div>
  //     <IconButton onClick={closeToast}>
  //       <CloseOutlinedIcon />
  //     </IconButton>
  //   </div>,
  //   document.getElementById("toast-root")
  // );
};
