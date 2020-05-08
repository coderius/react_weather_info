///WeatherHelper.js

/**
 * @see https://www.canada.ca/en/environment-climate-change/services/general-marine-weather-information/understanding-forecasts/beaufort-wind-scale-table.html
 * 
 * Array structure:
 * Force | Wind Speed Km/h | Descriptive Term
 */
const windSpeedClass = {
  "0": ["<1", "Calm"],
  "1": ["1-5", "Light air"],
  "2": ["6-11", "Light breeze"],
  "3": ["12-19", "Gentle breeze"],
  "4": ["20-28", "Moderate breeze"],
  "5": ["29-38", "Fresh breeze"],
  "6": ["39-49", "Strong breeze"],
  "7": ["50-61", "Near gale"],
  "8": ["62-74", "Gale"],
  "9": ["75-88", "Strong gale"],
  "10": ["89-102", "Storm"],
  "11": ["103-117", "Violent storm"],
  "12": ["118 - 133", "Hurricane"],
};

//Speed number to string
export const camputeBreeze = (speedNumber, returnFormat="term") => {
  let s = Math.round(speedNumber);
  let find = windSpeedClass[s];
    switch(returnFormat){
        case "speed":
            return find[0];
        case "term":
            return find[1];
        dafault:
            return s;
    }

};
