'use strict';

window.utils = {
  KEY_CODES: {
    'escape': 27,
    'enter': 13
  },
  getRandomElement: function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  getRandomElementExcept: function (arr, item) {
    var currentValue = null;
    do {
      currentValue = this.getRandomElement(arr);
    } while (currentValue === item);
    return currentValue;
  }
};
