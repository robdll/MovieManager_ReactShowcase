import { combineReducers } from "redux";
import counter from "./counter";
import about from "../components/About/about-module";

const rootReducer = combineReducers({
  counter,
  about
});

export default rootReducer;
