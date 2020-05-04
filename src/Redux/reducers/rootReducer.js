import { combineReducers } from "redux";
import layoutReducer from "./layoutReducer";
import {apiReduser, apiCurWeatherOneCityReduser} from "./api/openweathermap/apiReduser";
import geoipReduser from "./api/geoip2/geoipReduser";

const rootReducer = combineReducers({
    layoutReducer,
    apiReduser,
    geoipReduser,
    apiCurWeatherOneCityReduser
   
      
});

export default rootReducer;
