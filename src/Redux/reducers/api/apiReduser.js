/// apiReduser.js
import { 
    CALL_SEVERAL_CITY_IDS_STARTED,
    CALL_SEVERAL_CITY_IDS_SUCCESS,
    CALL_SEVERAL_CITY_IDS_FAILURE 
    } from "../../actions/types";

  const initialState = {
        isLoaded: false,
        data: [],
        error: null
    }
  
  const apiReduser = (state = initialState, action) => {
      switch (action.type) {
        case CALL_SEVERAL_CITY_IDS_STARTED:
            return {
                ...state,
                isLoaded: false
            };
            
        case CALL_SEVERAL_CITY_IDS_SUCCESS:
            return {
                ...state,
                isLoaded: true,
                error: null,
                data: action.payload
            };
            // console.log('df',state);
            // return Object.assign({}, state, {
            //     isLoaded: false,
            //     error: null,
            //     data: action.payload
            //   });

        case CALL_SEVERAL_CITY_IDS_FAILURE:
            return {
                ...state,
                isLoaded: false,
                error: action.payload.error
            };
        default:
          return state;
      }
    };

  
    export default  apiReduser;