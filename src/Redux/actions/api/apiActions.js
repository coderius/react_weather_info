import { 
    CALL_SEVERAL_CITY_IDS_STARTED,
    CALL_SEVERAL_CITY_IDS_SUCCESS,
    CALL_SEVERAL_CITY_IDS_FAILURE 
    } from "../types";

// import axios from "axios";
import { axiosInstance } from './axiosInstance';
import { openWeatherMapSecretKey } from './apiSecretKey';

///////////////////////////////////////////////
// Call current weather data for several cities
///////////////////////////////////////////////
/**
 * Example request http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=be0f362c7e089a7de5487bbc1a31520f'
 * 
 * @param {string} cityIds . Some as 524901,703448,2643743
 * @return {Promise}
 * @see https://openweathermap.org/current#severalid
 */
export const fetch_data = ( cityIds ) => {
  return (dispatch, getState) => {

    if(!cityIds) throw new Error('ID IS REQUIRED!');

    const params = {
        id: cityIds,
        units: 'metric',
        appid: openWeatherMapSecretKey,

    };

    dispatch(callSeveralCityIdsStarted());

    console.log('current state:', getState()); //debug

    axiosInstance
      .get('/data/2.5/group?', {params: params})
      .then((res) => {
      // setTimeout(() => {
        dispatch(callSeveralCityIdsSuccess(res.data));
      // }, 2500);
      })
      .catch((err) => {
        dispatch(callSeveralCityIdsFailure(err.message));
      });
  };
};

const callSeveralCityIdsSuccess = data => ({
    type: CALL_SEVERAL_CITY_IDS_SUCCESS,
    payload: {
      ...data
    }
    // payload: data.data.children.map(child => child.data),
  });
  
  const callSeveralCityIdsStarted = () => ({
    type: CALL_SEVERAL_CITY_IDS_STARTED
  });
  
  const callSeveralCityIdsFailure = error => ({
    type: CALL_SEVERAL_CITY_IDS_FAILURE,
    payload: {
      error
    }
  });
////////////////////////////////////////////////
/// Call current weather data for several cities
////////////////////////////////////////////////