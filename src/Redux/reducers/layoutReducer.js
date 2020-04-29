import {
  TOGGLE_LAYOUT_THEME_ACTION,
} from "../actions/types";

const initialState = {
    layoutTheme: "light",
  }

const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_LAYOUT_THEME_ACTION:
        return {
          ...state,
          layoutTheme: state.layoutTheme === "light" ? "dark" : "light",
        };

      default:
        return state;
    }
  };

  
// const layoutReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case TOGGLE_LAYOUT_THEME_ACTION:
//         return {
//           ...state,
//           layoutTheme: action.payload
//         };

//       default:
//         return state;
//     }
//   };  

  export default  layoutReducer;