import React, { useEffect } from "react";
import "./Toast.css";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";

export const Toast = (props) => {
  console.log("Render Toast");
  useEffect(() => {
    if (props.className === "toast_online") {
      props.toastRef.current.className += " open";
      setTimeout(() => {
        if (props.toastRef.current !== null) {  
          props.toastRef.current.className += " close";
        }
      }, 5000);
      setTimeout(() => {
        props.clearList();
      }, 5500);
    } else {
      props.toastRef.current.className += " open";
    }
  });

  const clickHandler = () => {
    props.toastRef.current.className += " close";
    setTimeout(() => {
      props.clearList();
    }, 1000);
  };

  return (
    <div id={props.className} className={props.className} ref={props.toastRef}>
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
