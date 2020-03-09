import * as actionTypes from "../../constants/actionTypes";
const initialState = { data: [], status: "" };
export default (state = initialState, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: action.payload
      };
    case actionTypes.REQUEST_REQUESTED:
      return { ...state, status: "waiting" };
    case actionTypes.REQUEST_RECEIVED:
      return { data: [...action.payload], status: "received" };
    default:
      return state;
  }
};
