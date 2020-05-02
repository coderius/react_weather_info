import { loadScript } from "./HtmlHelper";

/**
 * @see https://dev.maxmind.com/geoip/geoip2/javascript/
 * 
 * usage:
 * ------
    getCurrentIp("country")
        .then((res) => {
            console.log(res);
        }).catch((error) => {
        console.error(error);
    });
 */

export const getCurrentIp = (endpoint) => {
  return loadScript("http://geoip-js.com/js/apis/geoip2/v2.1/geoip2.js")
    .then(() => {
        return new Promise(function(resolve, reject) {
            const geoip2 = window.geoip2;

            const onError = (e) => {
                reject(e);
            };

            const onSuccess = (location) => {
                resolve(location);
            };

            switch (endpoint) {
                case "city":
                    geoip2.city(onSuccess, onError);
                  break;
                case "country":
                  geoip2.country(onSuccess, onError);
                  break;
                case "insights":
                  geoip2.insights(onSuccess, onError);
                  break;
                default:
                  geoip2.city(onSuccess, onError);
                  break;
            }
            
        });

    })
    .catch((error) => {
      console.error(error); // Error
    });
};
