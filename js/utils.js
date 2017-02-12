'use strict';

window.utils = (function () {
  var KEY_CODES = {
    escape: 27,
    enter: 13
  };

  var isKeyboardEvent = function (evt) {
    return typeof evt.keyCode !== 'undefined';
  };

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return {
    isDeactivationEvent: function (evt) {
      return isKeyboardEvent(evt) && evt.keyCode === KEY_CODES.escape;
    },

    isActivationEvent: function (evt) {
      return isKeyboardEvent(evt) && evt.keyCode === KEY_CODES.enter || evt.type === 'click';
    },

    getRandomElement: getRandomElement,

    getRandomElementExcept: function (arr, item) {
      var currentValue = null;

      do {
        currentValue = getRandomElement(arr);
      } while (currentValue === item);

      return currentValue;
    }
  };
})();
