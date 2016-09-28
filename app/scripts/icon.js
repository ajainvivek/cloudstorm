/***
* Get the animated icon for displaying
*
* @method getIcon
* @param {String} - id - the id mapped to open weather map api
* @return {String} - the icon dom string to insert
***/
export function getIcon (id) {
  let icons = {
    "01d": "<div class='icon sunny'><div class='sun'><div class='rays'></div></div></div>",
    "01n": "<div class='icon sunny'><div class='sun'><div class='rays'></div></div></div>",
    "10d": "<div class='icon rainy'><div class='cloud'></div><div class='rain'></div></div>",
    "10n": "<div class='icon rainy'><div class='cloud'></div><div class='rain'></div></div>",
    "09d": "<div class='icon rainy'><div class='cloud'></div><div class='rain'></div></div>",
    "09n": "<div class='icon rainy'><div class='cloud'></div><div class='rain'></div></div>",
    "13d": "<div class='icon flurries'><div class='cloud'></div><div class='snow'><div class='flake'></div><div class='flake'></div></div></div>",
    "13n": "<div class='icon flurries'><div class='cloud'></div><div class='snow'><div class='flake'></div><div class='flake'></div></div></div>",
    "50d": "<div class='icon cloudy'><div class='cloud'></div><div class='cloud'></div></div>",
    "50n": "<div class='icon cloudy'><div class='cloud'></div><div class='cloud'></div></div>",
    "03d": "<div class='icon cloudy'><div class='cloud'></div><div class='cloud'></div></div>",
    "03n": "<div class='icon cloudy'><div class='cloud'></div><div class='cloud'></div></div>",
    "04d": "<div class='icon cloudy'><div class='cloud'></div><div class='cloud'></div></div>",
    "04n": "<div class='icon cloudy'><div class='cloud'></div><div class='cloud'></div></div>",
    "02d": "<div class='icon cloudy'><div class='cloud'></div><div class='cloud'></div></div>",
    "02n": "<div class='icon cloudy'><div class='cloud'></div><div class='cloud'></div></div>"
  };

  return icons[id];
}
