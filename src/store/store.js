import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import RootReducer from "../reducers/rootReducer";

export default () => {
  return createStore(RootReducer, compose(applyMiddleware(thunk)));
};
