///geoipReduser.js
import { 
    CALL_GEOIP_SUCCESS,
    CALL_GEOIP_STARTED,
    CALL_GEOIP_FAILURE
    } from "../../../actions/types";

  const initialState = {
        isLoaded: false,
        data: [],
        error: null
    }
  
  const geoipReduser = (state = initialState, action) => {
      switch (action.type) {
        case CALL_GEOIP_STARTED:
            return {
                ...state,
                isLoaded: false
            };
            
        case CALL_GEOIP_SUCCESS:
            return {
                ...state,
                isLoaded: true,
                error: null,
                data: action.payload
            };
            
        case CALL_GEOIP_FAILURE:
            return {
                ...state,
                isLoaded: false,
                error: action.payload.error
            };
        default:
          return state;
      }
    };

  
    export default  geoipReduser;