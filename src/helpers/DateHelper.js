///DateHelper.js
import moment from 'moment';

/**
 * 
 * @param {int} value - time_stamp from need calculate to now
 */
export const transformFromDate = (value) => {
    var time = moment(value*1000).utc();
    return moment(time, "YYYYMMDD").fromNow();
}

/**
 * 
 * @param {int} value - time_stamp 
 */
export const transformDate = (value, formatStr = "HH:mm") => {
    return moment.unix(value).format(formatStr);
}


/**
 * 
 * @param {int} offset - seconds
 * @param {string}  formatStr
 */
export const currentOffsetDate = (offset, formatStr = "HH:mm") => {
    let utcNow = Date.now();
    let withOffset = (utcNow+(offset*1000));
    // console.log("offset",utcNow,offset,utcNow+offset, moment.utc(utcNow).format(formatStr),moment.utc(withOffset).format(formatStr));
    // console.log("offset", offset, moment.utc(withOffset).format(formatStr));
    // console.log("now", utcNow, moment(utcNow).format(formatStr));
    return moment.utc(withOffset).format(formatStr);
}