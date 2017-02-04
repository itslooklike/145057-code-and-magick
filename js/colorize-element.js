'use strict';

window.colorizeElement = function (element, colors, property) {

  function colorizeHandler(evt) {
    if (evt.type === 'click' || evt.keyCode === window.KEY_CODES.enter) {
      element.style[property] = window.utils.getRandomElementExcept(colors, element.style[property]);
    }
  }

  element.addEventListener('click', colorizeHandler);
  element.addEventListener('keydown', colorizeHandler);
};
