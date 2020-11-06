import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./ToastContainer.css";

import {
  addAndDeleteToastAsync,
  effectAfterAddToast,
  closeAndDeleteHandler

} from "redux/online-status-toast-reducer";

import { Toast } from "pres-components/Toast";


export const toastRef = React.createRef()

const ToastContainer_ = (props) => {
  window.addEventListener("online", () => props.addAndDeleteToastAsync(0));
  window.addEventListener("offline", () => props.addAndDeleteToastAsync(1));
  
  return ReactDOM.createPortal(
    <div className={`toast_container ${props.position}`}>
      {props.list !== null ?
      <Toast
        id={props.list.id}
        toastRef={toastRef}
        className={props.list.className}
        Icon={props.list.Icon}
        description={props.list.description}
        button={props.list.button}
        effectAfterAddToast={props.effectAfterAddToast}
        closeAndDeleteHandler={props.closeAndDeleteHandler}
      />
      : null}
    </div>,
    document.getElementById("toast-root")
  );
};

const mapStateToProps = (state) => ({
  list: state.onlineStatusToastReducer.list,
});

export const ToastContainer = compose(
  withRouter,
  connect(mapStateToProps, {
    addAndDeleteToastAsync,
    effectAfterAddToast,
    closeAndDeleteHandler
  })
)(ToastContainer_);
