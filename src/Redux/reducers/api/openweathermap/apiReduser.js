/// apiReduser.js
import { 
    CALL_SEVERAL_CITY_IDS_STARTED,
    CALL_SEVERAL_CITY_IDS_SUCCESS,
    CALL_SEVERAL_CITY_IDS_FAILURE,
    CALL_ONE_CITY_STARTED,
    CALL_ONE_CITY_SUCCESS,
    CALL_ONE_CITY_FAILURE,
    FIND_CITIES_CUR_WEATHER_STARTED,
    FIND_CITIES_CUR_WEATHER_SUCCESS,
    FIND_CITIES_CUR_WEATHER_FAILURE,
    FIND_CITIES_CUR_WEATHER_RESET
    } from "../../../actions/types";

  const initialState = {
        isLoaded: false,
        loading: false,
        data: [],
        error: null
    }
    const initialStateT = {
        isLoaded: false,
        loading: false,
        data: [],
        error: null
    }
  
  export const apiReduser = (state = initialState, action) => {
      switch (action.type) {
        case CALL_SEVERAL_CITY_IDS_STARTED:
            return {
                ...state,
                loading: true,
                isLoaded: false
            };
            
        case CALL_SEVERAL_CITY_IDS_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoaded: true,
                error: null,
                data: action.payload
            };
            // console.log('df',state);
            // return Object.assign({}, state, {
            //     loading: false,
            //     error: null,
            //     data: action.payload
            //   });

        case CALL_SEVERAL_CITY_IDS_FAILURE:
            return {
                ...state,
                loading: false,
                isLoaded: false,
                error: action.payload.error
            };
        default:
          return state;
      }
    };

  /**
   * Hendler current weather for one location
   * @see https://openweathermap.org/current#severalid
   * 
   * 
   * @param {*} state 
   * @param {*} action 
   */
    export const apiCurWeatherOneCityReduser = (state = initialStateT, action) => {
        switch (action.type) {
          case CALL_ONE_CITY_STARTED:
              return {
                  ...state,
                  loading: true,
                  isLoaded: false
              };
              
          case CALL_ONE_CITY_SUCCESS:
              return {
                  ...state,
                  loading: false,
                  isLoaded: true,
                  error: null,
                  data: action.payload
              };
             
          case CALL_ONE_CITY_FAILURE:
              return {
                  ...state,
                  loading: false,
                  isLoaded: false,
                  error: action.payload.error
              };
          default:
            return state;
        }
      };  

  /**
   * Hendler finded many cities and current weather
   * @see https://openweathermap.org/current#data
   * 
   * @param {*} state 
   * @param {*} action 
   */
  export const apiFindCitiesCurWeatherReduser = (state = initialState, action) => {
    switch (action.type) {
      case FIND_CITIES_CUR_WEATHER_STARTED:
          return {
              ...state,
              loading: true,
              isLoaded: false
          };
          
      case FIND_CITIES_CUR_WEATHER_SUCCESS:
          return {
              ...state,
              loading: false,
              isLoaded: true,
              error: null,
              data: action.payload
          };
         
      case FIND_CITIES_CUR_WEATHER_FAILURE:
          return {
              ...state,
              loading: false,
              isLoaded: false,
              error: action.payload.error
          };

       case FIND_CITIES_CUR_WEATHER_RESET:
          return {
              ...state,
              loading: false,
              isLoaded: false,
              data: [],
          };   
      default:
        return state;
    }
  };  