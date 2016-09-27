import $ from 'jquery';

let getWeather = function (request) {
  const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  const apiKey = '94cef7632d2dad3775d9e44e4d5453bb';

  return new Promise(function (resolve, reject) {
    getCurrentLatLong().then(function (coords) {
      let query = `?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&units=${request.unit}`;
      $.ajax({
        url: baseUrl + query,
      }).done(function(data) {
        resolve(data);
      }).fail(function(data) {
        reject(data);
      });
    }, function (message) {
      console.error(message);
    });
  });

}

let getCurrentLatLong = function () {
  const locationUrl = 'http://ip-api.com/json'; //fallback if user denies permission
  return new Promise(function (resolve, reject) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        resolve(position.coords);
      }, function () {
        $.getJSON(locationUrl, function(data) {
            resolve({
              latitude : data.lat,
              longitude : data.lon
            });
        });
      });
    } else {
      reject('No browser support!!');
    }
  });
}

let getFormData = function (containerView) {
  let title = $(containerView).find('#title').val();
  let unit = $(containerView).find('input[type=radio][name=cs-radio]:checked').val();
  let wind = $(containerView).find('#cs-checkbox').is(':checked');
  return {
    title,
    unit,
    wind
  };
}

export {
  getWeather,
  getCurrentLatLong,
  getFormData
};
