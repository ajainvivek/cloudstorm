import $ from 'jquery';

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
