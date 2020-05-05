import { combineReducers } from "redux";
import layoutReducer from "./layoutReducer";
import {apiReduser, apiCurWeatherOneCityReduser, apiFindCitiesCurWeatherReduser} from "./api/openweathermap/apiReduser";
import geoipReduser from "./api/geoip2/geoipReduser";

const rootReducer = combineReducers({
    layoutReducer,
    apiReduser,
    geoipReduser,
    apiCurWeatherOneCityReduser,
    apiFindCitiesCurWeatherReduser
   
      
});

export default rootReducer;
