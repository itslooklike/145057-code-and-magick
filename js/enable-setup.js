'use strict';

window.enableSetup = (function () {

  var setupIcon = document.querySelector('.setup-open-icon');

  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var submit = setup.querySelector('.setup-submit');

  var openSetup = function () {
    setup.classList.remove('invisible');
    setupIcon.attributes['aria-pressed'].value = 'true';
  };

  var closeSetup = function () {
    setup.classList.add('invisible');
    setupIcon.attributes['aria-pressed'].value = 'false';

    setupClose.removeEventListener('keydown', onKeyDown);
    setupClose.removeEventListener('click', onKeyDown);
    window.removeEventListener('keydown', escGlobalClose);
  };

  var onKeyDown = function (evt) {
    if (window.utils.isActivationEvent(evt)) {
      evt.preventDefault();
      closeSetup();
    }
  };

  var escGlobalClose = function (evt) {
    if (window.utils.isDeactivationEvent(evt)) {
      closeSetup();
    }
  };

  return function () {
    openSetup();

    // поместить листнеры в openSetup?
    setupClose.addEventListener('keydown', onKeyDown);
    setupClose.addEventListener('click', onKeyDown);
    submit.addEventListener('keydown', onKeyDown);
    submit.addEventListener('click', onKeyDown);
    window.addEventListener('keydown', escGlobalClose);
  };
})();
