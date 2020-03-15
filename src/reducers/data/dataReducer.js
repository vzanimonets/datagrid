import _ from "lodash";
import * as actionTypes from "../../constants/actionTypes";
const initialState = {
  data: [],
  initData: [],
  status: "",
  sort: [{ sortKey: "id", dir: "asc" }]
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_REQUESTED:
      return { ...state, status: "waiting" };
    case actionTypes.REQUEST_RECEIVED:
      return {
        ...state,
        data: [...action.payload],
        initData: [...action.payload],
        status: "received"
      };
    case actionTypes.SORT_DATA:
      console.log(action.payload);
      return {
        ...state,
        sort: [...action.payload],
        data: dataSort(state.data, action.payload)
      };
    case actionTypes.FILTER_DATA:
      return {
        ...state,
        data: dataFilter(state.initData, action.payload)
      };
    default:
      return state;
  }
};
// selectors
function dataFilter(data, value) {
  return _.filter(data, item => {
    return (
      item.id === Number(value) ||
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.email.toLowerCase().includes(value.toLowerCase()) ||
      item.phone.toLowerCase().includes(value.toLowerCase()) ||
      item.age === Number(value) ||
      item.date.toLocaleDateString().includes(value.toLowerCase())
    );
  });
}
function dataSort(data, sortKey) {
  const [sort] = sortKey;
  const field = sort.sortKey;
  const dir = sort.dir;
  return _.orderBy(data, [item => typeCheck(item[field]), field], dir);
}
const typeCheck = value => {
  switch (typeof value) {
    case "string":
      console.log(typeof value);
      return value.toLowerCase();
    case "number":
      console.log(typeof value);
      return Number(value);
    default:
      return value;
  }
  //  item[field].toLowerCase()
};
