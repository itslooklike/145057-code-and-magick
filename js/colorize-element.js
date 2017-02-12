'use strict';

window.colorizeElement = (function () {
  return function (element, colors, property) {
    var currentColor = colors[0];

    function colorizeHandler(evt) {
      if (window.utils.isActivationEvent(evt)) {
        var newColor = window.utils.getRandomElementExcept(colors, currentColor);
        element.style[property] = currentColor = newColor;
      }
    }

    element.addEventListener('click', colorizeHandler);
    element.addEventListener('keydown', colorizeHandler);
  };
})();
