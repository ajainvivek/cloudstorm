let getRoundedNumber =  function (number, precision) {
  var factor = Math.pow(10, precision);
  var tempNumber = number * factor;
  var roundedTempNumber = Math.round(tempNumber);
  return roundedTempNumber / factor;
}

let getDateTime = function (timestamp) {
  let date = new Date(timestamp);
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var hour = date.getHours();
  var minute = date.getMinutes();
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
