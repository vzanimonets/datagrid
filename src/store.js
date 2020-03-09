import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const logger = createLogger();
const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(logger, thunk)
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
