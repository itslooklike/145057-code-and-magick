'use strict';

window.colorizeElement = function (element, colors, callback) {
  var currentColor = colors[0];

  function colorizeHandler(evt) {
    if (window.utils.isActivationEvent(evt)) {
      currentColor = window.utils.getRandomElementExcept(colors, currentColor);

      if (typeof callback === 'function') {
        callback(element, currentColor);
      }
    }
  }

  element.addEventListener('click', colorizeHandler);
  element.addEventListener('keydown', colorizeHandler);
};
