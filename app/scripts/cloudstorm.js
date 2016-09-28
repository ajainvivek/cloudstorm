import $ from 'jquery';
import { bindFormEvents } from './event';
import { getDisplayView, getFormView, getLoadingView } from './template';
import { getWeather, getFormData } from './service';


/***
* CloudStorm weather widget initialize
*
* @class CloudStorm
* @return {none}
***/
class CloudStorm {

  constructor() {
    let formView = getFormView();
    let loadingView = getLoadingView();

    this.containerView = $('#cloudstorm');
    this.containerView.html(formView);
    bindFormEvents(this.containerView);

    //Bind event submit user settings data @TODO - Move to events module
    $(this.containerView).find('#cs-btn').on('click', event => {
      let self = this;
      let formData = getFormData(this.containerView);
      this.containerView.html(loadingView);
      getWeather(formData).then(function (data) {
        data.form = formData;
        self.displayWeatherWidget(data);
      }, function (data) {
        alert('Something went wrong!!!');
      });
    });
  }

  //Display the weather detail view
  displayWeatherWidget(data) {
    let displayView = getDisplayView(data);
    this.containerView.html(displayView);
  }
}

//Globally expose to consume the plugin
window.CloudStorm = CloudStorm;
