///geoipAction.js
import {getCurrentIp} from "../../../../helpers/IpHelper";
import { 
    CALL_GEOIP_SUCCESS,
    CALL_GEOIP_STARTED,
    CALL_GEOIP_FAILURE 
    } from "../../types";

export const fetchIp = ( endpoint = false ) => {
    return (dispatch, getState) => {
  
        dispatch(callGeoIpStarted());
        console.log('current state:', getState()); //debug
        /**
         * @see https://dev.maxmind.com/geoip/geoip2/javascript/
         */
        getCurrentIp(endpoint)
            .then((res) => {
                dispatch(callGeoIpSuccess(res));
            }).catch((error) => {
                dispatch(callGeoIpFailure(error));
            });
      
    };
  };
  
  const callGeoIpSuccess = data => ({
      type: CALL_GEOIP_SUCCESS,
      payload: {
        ...data
      }
      // payload: data.data.children.map(child => child.data),
    });
    
    const callGeoIpStarted = () => ({
      type: CALL_GEOIP_STARTED
    });
    
    const callGeoIpFailure = error => ({
      type: CALL_GEOIP_FAILURE,
      payload: {
        error
      }
    });