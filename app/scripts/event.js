/***
* Bind Events in the widget
***/

import $ from 'jquery';

/***
* Bind the form events like slide, cs-checkbox
*
* @method bindFormEvents
* @param {Object} - containerView - the container dom ele
* @return {none}
***/
let bindFormEvents = function (containerView) {
  $(containerView).find('#cs-checkbox').on('change', function (event) {
    $(containerView).find('#cs-wind-value').text(event.target.checked);
  });

  $(containerView).find('input[type=radio][name=cs-radio]').on('change', function (event) {
    $(containerView).find('#cs-unit-value').text(this.value);
  });
};

export {
  bindFormEvents
};
