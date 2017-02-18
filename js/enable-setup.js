'use strict';

window.enableSetup = (function () {
  var url = 'https://intensive-javascript-server-myophkugvq.now.sh/code-and-magick/data';

  var setupIcon = document.querySelector('.setup-open-icon');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var submit = setup.querySelector('.setup-submit');

  var closeSetupHandler;
  var openSetup = function (elem, callback, callbackWizard) {
    setup.classList.remove('invisible');
    setupIcon.attributes['aria-pressed'].value = 'true';
    closeSetupHandler = closeSetupEvent.bind(closeSetupEvent, elem, callback);

    setupClose.addEventListener('keydown', closeSetupHandler);
    setupClose.addEventListener('click', closeSetupHandler);
    submit.addEventListener('keydown', closeSetupHandler);
    submit.addEventListener('click', closeSetupHandler);
    window.addEventListener('keydown', escGlobalClose);

    window.load(url, callbackWizard);
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

  var closeSetupEvent = function (elem, callback, evt) {
    if (window.utils.isActivationEvent(evt)) {
      evt.preventDefault();
      closeSetup();

      if (typeof callback === 'function' && elem) {
        callback(elem);
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
