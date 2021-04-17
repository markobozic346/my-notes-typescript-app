import { createStore } from "redux";
import combineReducers from "../reducers/rootReducer";

export const store = createStore(
  combineReducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
