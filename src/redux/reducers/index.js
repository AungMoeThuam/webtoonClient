import { combineReducers } from "redux";
import storyReducer from "./storyReducer";

const reducer = combineReducers({
  storyReducer,
});
export default reducer;
