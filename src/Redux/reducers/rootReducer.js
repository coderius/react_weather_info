import { combineReducers } from "redux";
import layoutReducer from "./layoutReducer";
import apiReduser from "./api/openweathermap/apiReduser";
import geoipReduser from "./api/geoip2/geoipReduser";

const rootReducer = combineReducers({
    layoutReducer,
    apiReduser,
    geoipReduser
   
      
});

export default rootReducer;
