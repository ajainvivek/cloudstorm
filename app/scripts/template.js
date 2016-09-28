import $ from 'jquery';
import { getRoundedNumber, getDateTime } from './helper';
import { getIcon } from './icon';

/***
* Get the weather detail display view
*
* @method getDisplayView
* @param {Object} - data - weather data
* @return {String} - displayview - the filled displayview
***/
export function getDisplayView(data) {
  let temp = getRoundedNumber(data.list[0].main.temp, 1);
  let getToday = getDateTime(data.list[0].dt_txt);
  let windDetails = data.form.wind ? 'Wind | Speed - ' + data.list[0].wind.speed + ' | Degree -' +  data.list[0].wind.deg : '';
  let icon = getIcon(data.list[0].weather[0].icon);


  return `
    <div class='cloudstorm-display'>
      <div class="block">
        <div id="iconwrapper">
          ${icon}
        </div>
        <div class="top">
          <h4>${data.form.title}</h4>
          <div class="background-city-img"></div>
        </div>
        <svg version="1.1" id="weather card" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 210.6 281.2" style="enable-background:new 0 0 210.6 281.2;" xml:space="preserve">
          <style type="text/css">
            .st2{fill:#FFFFFF;}
          </style>
          <g id="illustration">
            <path class="st2" d="M45.5,230.8c0,0,6.3-5.7,14.3-4.3c0,0,7.3-14.3,28.7-14.3s31,22.3,31,22.3s9.7-8,20-5.7c0,0-1.3-9.3,6-13.3
              s13-1.7,13-1.7s12.3-13.7,28-9.3s29.7,24.7,22,42.3s-28.7,27-47.3,14c0,0-6,19.3-20.7,19.3s-24-7.1-26-10.7
              c0,0-12.3,12.4-27.3,12.4s-30.3-13.7-33.3-24.3c0,0-2.7,2-10,0.7c-7.3-1.3-7.3-4.3-7.3-4.3s-7.3,2.3-14,2.3s-18.7-6.7-18.7-17.7
              S30.8,218.2,45.5,230.8z"/>
          </g>
        </svg>
        <div class="city">
          <h1>${data.city.name}</h1>
        </div>
        <div class="date">
          <span class="day">${getToday.day}</span> | ${getToday.month} ${getToday.date} | ${data.list[0].weather[0].description}<br>
          <span class="wind">${windDetails}</span>
        </div>
        <div class="temp">
          ${temp}
          <span class="diglets">
          </span>
        </div>
      </div>
    </div>
  `;
}

/***
* Get the form view
*
* @method getFormView
* @return {String} - formview - the dom for formview
***/
export function getFormView() {
  return `
    <div class='cloudstorm-form'>
      <div class="block">
        <div class="row">
          <h1 class="header">User Settings</h1>
        </div>
        <div class="row">
          <input type="text" name="title" id="title"/>
          <label for="title">Title</label>
        </div>
        <div class="row">
          <h4>Show Wind: <span id="cs-wind-value">false</span></h4>
        </div>
        <div class="row single">
          <input type="checkbox" name="cs-checkbox" id="cs-checkbox"/>
          <label for="cs-checkbox">Checkbox</label>
        </div>
        <div class="row">
          <h4>Choose unit: <span id="cs-unit-value">metric</span></h4>
        </div>
        <div class="row single">
          <input type="radio" name="cs-radio" id="cs-radio-1" value="metric" checked=checked/>
          <label for="cs-radio-1">Radio</label>
          <input type="radio" name="cs-radio" value="imperial" id="cs-radio-2"/>
          <label for="cs-radio-2">Radio</label>
        </div>
        <div class="row">
          <button id="cs-btn" type="submit" tabindex="0">Submit</button>
        </div>
      </div>
    </div>
  `;
}


/***
* Get the intermediate progress state
*
* @method getLoadingView
* @return {String} - getLoadingView - progress indicator view
***/
export function getLoadingView() {
  return `
  <div class="cloudstorm-loading">
    <div class="block">
      <div class="icon sun-shower">
          <div class="cloud"></div>
          <div class="sun">
              <div class="rays"></div>
          </div>
          <div class="rain"></div>
      </div>
      <p>Taking a peek outside<span class="period one">.</span><span class="period two">.</span><span class="period three">.</span></p>
    </div>
  </div>
  `;
}
