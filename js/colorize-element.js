'use strict';

window.colorizeElement = function (element, colors, callback, callbackWizard) {
  var currentColor = colors[0];

  function colorizeHandler(evt) {
    if (window.utils.isActivationEvent(evt)) {
      currentColor = window.utils.getRandomElementExcept(colors, currentColor);

      if (typeof callback === 'function') {
        callback(element, currentColor);
      }

      if (typeof callbackWizard === 'function') {
        setTimeout(callbackWizard, 100);
      }
    }
  }

  element.addEventListener('click', colorizeHandler);
  element.addEventListener('keydown', colorizeHandler);
};
