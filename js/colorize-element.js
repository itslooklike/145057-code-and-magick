'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = colors[0];

  function colorizeHandler(evt) {
    if (evt.type === 'click' || evt.keyCode === window.utils.KEY_CODES.enter) {
      var newColor = null;

      while (!newColor || newColor === currentColor) {
        newColor = window.utils.getRandomElementExcept(colors, currentColor);
      }

      element.style[property] = currentColor = newColor;
    }
  }

  element.addEventListener('click', colorizeHandler);
  element.addEventListener('keydown', colorizeHandler);
};
