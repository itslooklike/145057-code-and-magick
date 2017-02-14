'use strict';

window.colorizeElement = (function () {
  var currentColor = null;

  return function (element, colors, property, cb) {
    currentColor = colors[0];

    function colorizeHandler(evt) {
      if (window.utils.isActivationEvent(evt)) {
        currentColor = window.utils.getRandomElementExcept(colors, currentColor);

        if (typeof cb === 'function') {
          cb(element, property, currentColor);
        }
      }
    }

    element.addEventListener('click', colorizeHandler);
    element.addEventListener('keydown', colorizeHandler);
  };
})();
