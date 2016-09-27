import $ from 'jquery';
import { bindFormEvents } from './event';
import { getDisplayView, getFormView, getLoadingView } from './template';
import { getWeather, getFormData } from './service';

class CloudStorm {

  constructor() {
    let formView = getFormView();
    let loadingView = getLoadingView();

    this.containerView = $('#cloudstorm');
    this.containerView.html(formView);
    bindFormEvents(this.containerView);

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

  displayWeatherWidget(data) {
    let displayView = getDisplayView(data);
    this.containerView.html(displayView);
  }
}

window.CloudStorm = CloudStorm;

//Testing
let cs = new CloudStorm();
