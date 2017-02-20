'use strict';

window.enableSetup = (function () {
  var setupIcon = document.querySelector('.setup-open-icon');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var submit = setup.querySelector('.setup-submit');

  var closeSetupHandler;
  var openSetup = function (callback) {
    setup.classList.remove('invisible');
    setupIcon.attributes['aria-pressed'].value = 'true';
    closeSetupHandler = closeSetupEvent.bind(closeSetupEvent, callback);

    setupClose.addEventListener('keydown', closeSetupHandler);
    setupClose.addEventListener('click', closeSetupHandler);
    submit.addEventListener('keydown', closeSetupHandler);
    submit.addEventListener('click', closeSetupHandler);
    window.addEventListener('keydown', escGlobalClose);
  };

  var closeSetup = function () {
    setup.classList.add('invisible');
    setupIcon.attributes['aria-pressed'].value = 'false';

    setupClose.removeEventListener('keydown', closeSetupHandler);
    setupClose.removeEventListener('click', closeSetupHandler);
    submit.removeEventListener('keydown', closeSetupHandler);
    submit.removeEventListener('click', closeSetupHandler);
    window.removeEventListener('keydown', escGlobalClose);
  };

  var closeSetupEvent = function (callback, evt) {
    if (window.utils.isActivationEvent(evt)) {
      evt.preventDefault();
      closeSetup();

      if (typeof callback === 'function') {
        callback();
      }
    }
  };

  var escGlobalClose = function (evt) {
    if (window.utils.isDeactivationEvent(evt)) {
      closeSetup();
    }
  };

  return openSetup;
})();
