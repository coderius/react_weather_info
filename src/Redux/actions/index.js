import {
  TOGGLE_LAYOUT_THEME_ACTION,
  REQUEST_GROUP_CITIES,
} from "./types";

/// Query to api like http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&APPID=your_app_ad
export const requestGroupSities = (subreddit) => ({
  type: REQUEST_GROUP_CITIES,
  subreddit,
});

///UI Actions
export const toggleLayoutThemeAction = () => {
  return {
    type: TOGGLE_LAYOUT_THEME_ACTION,
  };
};

// export const setLayoutThemeAction = (payload) => {
//   return {
//     type: TOGGLE_LAYOUT_THEME_ACTION,
//     payload,
//   };
// };