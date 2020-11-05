import _ from "lodash";

import WifiIcon from "@material-ui/icons/Wifi";
import WifiOffIcon from "@material-ui/icons/WifiOff";

const ADD_TO_TOAST_CONTAINER = "ADD_TO_TOAST_CONTAINER";
const DELETE_FROM_TOAST_CONTAINER = "DELETE_FROM_TOAST_CONTAINER";

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
  list: [],
};

const onlineStatusToastReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_TOAST_CONTAINER:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DELETE_FROM_TOAST_CONTAINER:
      return {
        ...state,
        list: [...state.list.slice(0, action.index)].concat([
          ...state.list.slice(action.index + 1, [...state.list].length),
        ]),
      };
    default:
      return state;
  }
};

export const addToToastContainer = (payload) => {
  return {
    type: ADD_TO_TOAST_CONTAINER,
    payload,
  };
};

export const deleteFromToastContainer = (index) => {
  return {
    type: DELETE_FROM_TOAST_CONTAINER,
    index,
  };
};

export const addAndDeleteToastAsync = (index) => {
  return async (dispatch, getState) => {
    const updatedState = getState().onlineStatusToastReducer;

    if (_.some(updatedState.list, updatedState.toasts[index === 0 ? 1 : 0])) {
      const findedIndex = updatedState.list.findIndex(
        (e) => e.id === (index === 0 ? 2 : 1)
      );
      if (findedIndex !== -1) {
        await dispatch(deleteFromToastContainer(findedIndex));
      }
    }

    if (!_.some(updatedState.list, updatedState.toasts[index])) {
      dispatch(addToToastContainer(updatedState.toasts[index]));
    }
  };
};

export default onlineStatusToastReducer;
