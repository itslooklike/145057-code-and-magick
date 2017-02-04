'use strict';

window.utils = {
  getRandomElement: function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  getRandomElementExcept: function (arr, item) {
    var currentValue = null;
    do {
      currentValue = this.getRandomElement(arr);
    } while (!currentValue || currentValue === item);
    return currentValue;
  }
};
