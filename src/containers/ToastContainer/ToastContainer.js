import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./ToastContainer.css";

import { addAndDeleteToastAsync } from "redux/online-status-toast-reducer";

import { Toast } from "pres-components/Toast";

import _ from "lodash/core";

const ToastContainer_ = (props) => {
  window.addEventListener("online", () => props.addAndDeleteToastAsync(0));
  window.addEventListener("offline", () => props.addAndDeleteToastAsync(1));

  return ReactDOM.createPortal(
    <div className={`toast_container ${props.position}`}>
      {props.list.map((e) => (
        <Toast
          id={e.id}
          key={_.uniqueId(e.id)}
          className={e.className}
          Icon={e.Icon}
          description={e.description}
          button={e.button}
        />
      ))}
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
  })
)(ToastContainer_);
