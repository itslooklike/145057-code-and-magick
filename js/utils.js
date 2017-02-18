'use strict';

window.utils = (function () {
  var KEY_CODES = {
    escape: 27,
    enter: 13
  };

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return {
    isDeactivationEvent: function (evt) {
      return evt.keyCode === KEY_CODES.escape;
    },

    isActivationEvent: function (evt) {
      return evt.keyCode === KEY_CODES.enter || evt.type === 'click';
    },

    getRandomElement: getRandomElement,

    getRandomElementExcept: function (arr, item) {
      var currentValue = null;

      do {
        currentValue = getRandomElement(arr);
      } while (currentValue === item);

      return currentValue;
    },

    idToClassNameTreeReplacer: function (elem) {
      if (elem.id) {
        elem.classList.add(elem.id);
        elem.removeAttribute('id');
      }

      if (elem.childNodes) {
        elem.childNodes.forEach(function (item) {
          if (item.nodeName !== '#text') {
            window.utils.idToClassNameTreeReplacer(item);
          }
        });
      }
    },

    getRandomElementsInArray: function (arr, num) {
      var newArr = [];

      while (newArr.length < num) {
        var element = getRandomElement(arr);

        var flag = newArr.some(function (value) {
          return value === element;
        });

        if (!flag) {
          newArr.push(element);
        }
      }

      return newArr;
    }
  };
})();
