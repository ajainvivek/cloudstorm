/***
* Helper
***/

/***
* Get rounded number with decimal point precision
*
* @method getRoundedNumber
* @param {Number} - number - the number to be input
* @param {Number} - precision - the decimal point to be rounded off
* @return {Number} - the rounded number
***/
let getRoundedNumber =  function (number, precision) {
  let factor = Math.pow(10, precision);
  let tempNumber = number * factor;
  let roundedTempNumber = Math.round(tempNumber);
  return roundedTempNumber / factor;
}

/***
* Formatted date time data
*
* @method getDateTime
* @param {Number} - timestamp - the date value to be input
* @return {Object} - the Formatted date
***/
let getDateTime = function (timestamp) {
  let date = new Date(timestamp);
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  let hour = date.getHours();
  let minute = date.getMinutes();
  return {
    day : days[date.getDay()],
    month : months[date.getMonth()],
    time : `${hour}:${minute}`,
    date : date.getDate()
  };
}

export {
  getRoundedNumber,
  getDateTime
}
