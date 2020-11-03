import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./ToastContainer.css";

import _ from "lodash/core";

import WifiIcon from "@material-ui/icons/Wifi";
import WifiOffIcon from "@material-ui/icons/WifiOff";

import { Toast } from "pres-components/Toast";

export const ToastContainer = React.memo((props) => {

  const toasts = [
    {
      id: 1,
      className: "toast_online",
      Icon: WifiIcon,
      description: "Your internet connection was restored.",
    },
    {
      id: 2,
      className: "toast_offline",
      Icon: WifiOffIcon,
      description: "You are currently offline.",
      button: "Refresh",
    },
  ];

  const [list, setList] = useState([]);

  console.log(list);

  const toggleOnline = (id) => {
      if (list.findIndex((e) => e.id === id) !== -1 ) {

      }
  }

  const deleteFromList = (id) => {
      debugger
    const index = list.findIndex((e) => e.id === id);
    if (index !== -1) {
      setList( prevList =>
        [...prevList.slice(0, index)].concat([
          ...prevList.slice(index + 1, [...prevList].length),
        ])
      );
    }
  };

  const addOnlineToList = () => {
    setList([...list, toasts[0]]);
  };

  const addOfflineToList = () => {
    setList([...list, toasts[1]]);
  };

  window.addEventListener("online", addOnlineToList);
  window.addEventListener("offline", addOfflineToList);

  //   useEffect(() => {

  //   }, [condition]);

  return ReactDOM.createPortal(
    <div className={`toast_container ${props.position}`}>
      {list !== null
        ? list.map((e) => (
            <Toast
              id={e.id}
              key={_.uniqueId(e)}
              className={e.className}
              Icon={e.Icon}
              description={e.description}
              button={e.button}
              deleteFromList={deleteFromList}
            />
          ))
        : null}
    </div>,
    document.getElementById("toast-root")
  );
});
