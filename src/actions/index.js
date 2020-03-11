import * as actionTypes from "../constants/actionTypes";
import { getPersonData } from "../utils";

export const getDataAction = n => async dispatch => {
  try {
    dispatch(requestStart);
    const data = await getPersonData(n);
    await new Promise(resolve => setTimeout(resolve, 0));
    await dispatch(requestFinished(data));
  } catch (error) {
    throw error;
  }
};
const requestFinished = data => ({
  type: actionTypes.REQUEST_RECEIVED,
  payload: data
});

const requestStart = { type: actionTypes.REQUEST_REQUESTED };

export function sortData(sortType) {
  return {
    type: actionTypes.SORT_DATA,
    payload: sortType
  };
}
