'use strict';

(function () {

  function dialogControl() {
    var setupOpen = document.querySelector('.setup-open');

    var focusToElemet = function (elem) {
      elem.focus();
    };

    var openSetupDialogHadler = function (evt) {
      if (window.utils.isActivationEvent(evt)) {
        var cb = null;

        if (evt.keyCode) {
          cb = focusToElemet;
        }

        window.enableSetup(evt.target, cb);
      }
    };

    setupOpen.addEventListener('click', openSetupDialogHadler);
    setupOpen.addEventListener('keydown', openSetupDialogHadler);
  }

  function wizardEditor() {
    // обёртка для быстрого поиска
    var setupWizardForm = document.querySelector('.setup-wizard-form');

    // цвет куртки
    var wizardCoat = setupWizardForm.querySelector('#wizard-coat');
    var wizardCoatColors = [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ];
    window.colorizeElement(wizardCoat, wizardCoatColors, 'fill');

    // цвет глаз
    var wizardEyes = setupWizardForm.querySelector('#wizard-eyes');
    var wizardEyesColors = [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ];
    window.colorizeElement(wizardEyes, wizardEyesColors, 'fill');

    // цвет фаерболла
    var wizardFireball = setupWizardForm.querySelector('.setup-fireball-wrap');
    var wizardFireballColors = [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ];
    window.colorizeElement(wizardFireball, wizardFireballColors, 'backgroundColor');
  }

  dialogControl();
  wizardEditor();
})();
