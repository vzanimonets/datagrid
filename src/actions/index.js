import * as actionTypes from "../constants/actionTypes";
import { getPersonData } from "../utils/index";

export const getDataAction = (count = 10) => async dispatch => {
  try {
    dispatch(requestStart);
    let data = [];
    for (let i = 0; i <= count; i++) {
      const person = getPersonData();
      data.push(person);
    }
    await new Promise(resolve => setTimeout(resolve, 5000));
    dispatch(requestFinished(data));
  } catch (error) {
    throw error;
  }
};
const requestFinished = data => ({
  type: actionTypes.REQUEST_RECEIVED,
  payload: data
});

const requestStart = { type: actionTypes.REQUEST_REQUESTED };
export default {};
