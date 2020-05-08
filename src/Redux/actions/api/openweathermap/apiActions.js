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
    FIND_CITIES_CUR_WEATHER_RESET,
    CALL_ONE_LOCATION_FORECAST_STARTED,
    CALL_ONE_LOCATION_FORECAST_SUCCESS,
    CALL_ONE_LOCATION_FORECAST_FAILURE,
    } from "../../types";

// import axios from "axios";
import { AxiosConf, axiosInstance } from './axiosInstance';
import { openWeatherMapSecretKey, openWeatherMapForSearchSecretKey } from './apiSecretKey';

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

///////////////////////////////////////////////
// Call current weather data for one location
///////////////////////////////////////////////
/**
 * Example request http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}'
 * Example request http://api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}'
 * Example request http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}'
 * 
 * @param {string} city name || city id || coords
 * @return {Promise}
 * @see https://openweathermap.org/current#one
 */


export const fetchCurWeatherOneLocation = ( query ) => {
  return (dispatch, getState) => {

    if(!query) throw new Error('Query IS REQUIRED!');

    const params = {
      ...query,//merge object params
      appid: openWeatherMapSecretKey,

  };

    dispatch(callOneCityStarted());

    console.log('current state:', getState()); //debug

    axiosInstance
      .get('/data/2.5/weather', {params: params})
      .then((res) => {
      // setTimeout(() => {
        dispatch(callOneCitySuccess(res.data));
      // }, 2500);
      })
      .catch((err) => {
        dispatch(callOneCityFailure(err.message));
      });
  };
};

const callOneCitySuccess = data => ({
    type: CALL_ONE_CITY_SUCCESS,
    payload: {
      ...data
    }
    // payload: data.data.children.map(child => child.data),
  });
  
  const callOneCityStarted = () => ({
    type: CALL_ONE_CITY_STARTED
  });
  
  const callOneCityFailure = error => ({
    type: CALL_ONE_CITY_FAILURE,
    payload: {
      error
    }
  });
////////////////////////////////////////////////
/// Call current weather data for one location
////////////////////////////////////////////////



///////////////////////////////////////////////
// Find many cities and current weather
///////////////////////////////////////////////
/**
 * https://openweathermap.org/data/2.5/find?q=london&type=like&sort=population&cnt=30&appid={your api key}
 * 
 * @param {string} city name || city id || coords
 * @return {Promise}
 * @see https://openweathermap.org/current#one
 */


export const findAllPlacesCurWeather = ( query ) => {
  return (dispatch, getState) => {

    if(!query) throw new Error('QUERY IS REQUIRED!');

    //q=London&units=metric&type=like&sort=population&cnt=30
    const params = {
      q: query,
      units: 'metric',
      type: 'like',
      sort: 'population',
      cnt: 30,
      appid: openWeatherMapSecretKey,

  };

    dispatch(findCitiesCurWeatherStarted());

    console.log('current state:', getState()); //debug

    // axiosInstance.defaults.baseURL = 'https://api.openweathermap.org';

    axiosInstance
      .get('/data/2.5/find?', {params: params})
      .then((res) => {
      // setTimeout(() => {
        dispatch(findCitiesCurWeatherSuccess(res.data));
      // }, 2500);
      })
      .catch((err) => {
        dispatch(findCitiesCurWeatherFailure(err.message));
      });
  };
};

const findCitiesCurWeatherSuccess = data => ({
    type: FIND_CITIES_CUR_WEATHER_SUCCESS,
    payload: {
      ...data
    }
    // payload: data.data.children.map(child => child.data),
  });
  
  const findCitiesCurWeatherStarted = () => ({
    type: FIND_CITIES_CUR_WEATHER_STARTED
  });
  
  const findCitiesCurWeatherFailure = error => ({
    type: FIND_CITIES_CUR_WEATHER_FAILURE,
    payload: {
      error
    }
  });

  export const findCitiesCurWeatherReset = () => ({
    type: FIND_CITIES_CUR_WEATHER_RESET
  });
////////////////////////////////////////////////
///  Find many cities and current weather
////////////////////////////////////////////////


///////////////////////////////////////////////
// Call forecast weather for one location
///////////////////////////////////////////////
/**
 * Example request http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={your api key}'
 * 
 * @param {string} city name || city id || coords
 * @return {Promise}
 * @see https://openweathermap.org/forecast5#cityid5
 */


export const fetchForecastOneLocation = ( query ) => {
  return (dispatch, getState) => {

    if(!query) throw new Error('Query IS REQUIRED!');

    const params = {
      ...query,//merge object params
      appid: openWeatherMapSecretKey,

  };

    dispatch(callOneLocationForecastStarted());

    console.log('current state:', getState()); //debug

    axiosInstance
      .get('/data/2.5/forecast', {params: params})
      .then((res) => {
      // setTimeout(() => {
        dispatch(callOneLocationForecastSuccess(res.data));
      // }, 2500);
      })
      .catch((err) => {
        dispatch(callOneLocationForecastFailure(err.message));
      });
  };
};

const callOneLocationForecastSuccess = data => ({
    type: CALL_ONE_LOCATION_FORECAST_SUCCESS,
    payload: {
      ...data
    }
    // payload: data.data.children.map(child => child.data),
  });
  
  const callOneLocationForecastStarted = () => ({
    type: CALL_ONE_LOCATION_FORECAST_STARTED
  });
  
  const callOneLocationForecastFailure = error => ({
    type: CALL_ONE_LOCATION_FORECAST_FAILURE,
    payload: {
      error
    }
  });
////////////////////////////////////////////////
/// Call forecast weather for one location
////////////////////////////////////////////////