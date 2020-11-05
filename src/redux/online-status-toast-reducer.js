import { toastRef } from "containers/ToastContainer"

import WifiIcon from "@material-ui/icons/Wifi";
import WifiOffIcon from "@material-ui/icons/WifiOff";

const ADD_TO_TOAST_CONTAINER = "ADD_TO_TOAST_CONTAINER";
const CLEAR_TOAST_LIST = "CLEAR_TOAST_LIST";

let initialState = {
  toasts: [
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
  ],
  list: null,
};

const onlineStatusToastReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_TOAST_CONTAINER:
      return {
        ...state,
        list: action.toast,
      };
    case CLEAR_TOAST_LIST:
      return {
        ...state,
        list: null,
      };
    default:
      return state;
  }
};

export const addToToastContainer = (toast) => {
  return {
    type: ADD_TO_TOAST_CONTAINER,
    toast,
  };
};

export const clearList = () => {
  return {
    type: CLEAR_TOAST_LIST,
  };
};

export const addAndDeleteToastAsync = (index) => {
  return async (dispatch, getState) => {
    const updatedState = getState().onlineStatusToastReducer;
      if (updatedState.list !== null) {
        console.log("Closing toast...")
        toastRef.current.className += " close"
        setTimeout(() => {
          console.log("Clearing list...")
          dispatch(clearList())
        }, 1000)
        setTimeout(() => {
          console.log(`Adding ${index === 0 ? "online" : "offline"} toast... `);
          dispatch(addToToastContainer(updatedState.toasts[index]));
        }, 1500)
      } else {
        console.log(`Adding ${index === 0 ? "online" : "offline"} toast... `);
        dispatch(addToToastContainer(updatedState.toasts[index]));
      }
  };
};

export default onlineStatusToastReducer;
