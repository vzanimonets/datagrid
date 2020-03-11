import * as actionTypes from "../../constants/actionTypes";
const initialState = {
  data: [],
  status: "",
  sort: { sortKey: "name", dir: "asc" }
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: action.payload
      };
    case actionTypes.REQUEST_REQUESTED:
      return { ...state, status: "waiting" };
    case actionTypes.REQUEST_RECEIVED:
      return { ...state, data: [...action.payload], status: "received" };
    case actionTypes.SORT_DATA:
      return {
        ...state,
        sort: action.payload
      };
    default:
      return state;
  }
};
