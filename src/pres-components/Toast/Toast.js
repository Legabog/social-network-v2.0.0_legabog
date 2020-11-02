import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Toast.css";

import WifiIcon from "@material-ui/icons/Wifi";
import WifiOffIcon from "@material-ui/icons/WifiOff";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";

export const Toast = (props) => {
  const [online, setState] = useState();

  const onlineStatus = () => {
    navigator.onLine ? setState(true) : setState(false);
  };

  const pageRelaod = () => {
    window.location.reload();
  };

  window.addEventListener("online", onlineStatus);
  window.addEventListener("offline", onlineStatus);

  useEffect(() => {
    onlineStatus();
  });

  switch (online) {
    case true:
      return ReactDOM.createPortal(
        <div className={"toast_online"}>
          <WifiIcon />
          <span>Your internet connection was restored.</span>
          <IconButton>
            <CloseOutlinedIcon />
          </IconButton>
        </div>,
        document.getElementById("toast-root")
      );
    case false:
      return ReactDOM.createPortal(
        <div className={"toast_offline"}>
          <WifiOffIcon />
          <span>You are currently offline.</span>
          <div className={"toast_offline__button"} onClick={pageRelaod}>
            <span>Refresh</span>
          </div>
          <IconButton>
            <CloseOutlinedIcon />
          </IconButton>
        </div>,
        document.getElementById("toast-root")
      );
    default:
      return null;
  }
};
