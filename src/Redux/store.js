import { combineReducers, compose, createStore } from "redux";
import { InputReducer } from "./ShowData/reducer";

const rootReducer = combineReducers({
  InputData: InputReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
