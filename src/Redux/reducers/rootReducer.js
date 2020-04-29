import { combineReducers } from "redux";
import layoutReducer from "./layoutReducer";
import apiReduser from "./api/apiReduser";

const rootReducer = combineReducers({
    layoutReducer,
    apiReduser
   
      
});

export default rootReducer;
