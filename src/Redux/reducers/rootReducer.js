import { combineReducers } from "redux";
import layoutReducer from "./layoutReducer";

const rootReducer = combineReducers({
    layoutReducer,
});

export default rootReducer;
