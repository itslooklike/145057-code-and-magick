'use strict';

function initApplicationSettingsDialog() {

  function dialogControl() {
    var setup = document.querySelector('.setup');
    var setupIcon = document.querySelector('.setup-open-icon');
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = document.querySelector('.setup-close');
    var submit = document.querySelector('.setup-submit');

    var openDialog = function () {
      setup.classList.remove('invisible');
      setupIcon.attributes['aria-pressed'].value = 'true';
      document.addEventListener('keydown', escGlobalClose);
    };

    var closeDialog = function () {
      setup.classList.add('invisible');
      setupIcon.attributes['aria-pressed'].value = 'false';
      document.removeEventListener('keydown', escGlobalClose);
    };

    var escGlobalClose = function (evt) {
      if (evt.keyCode === window.KEY_CODES.escape) {
        closeDialog();
      }
    };

    var openSetupDialogHadler = function (evt) {
      if (evt.keyCode === window.KEY_CODES.enter || evt.type === 'click') {
        openDialog();
      }
    };

    var closeSetupDialogHadler = function (evt) {
      if (evt.keyCode === window.KEY_CODES.enter || evt.type === 'click') {
        closeDialog();
      }
    };

    setupOpen.addEventListener('click', openSetupDialogHadler);
    setupOpen.addEventListener('keydown', openSetupDialogHadler);

    setupClose.addEventListener('click', closeSetupDialogHadler);
    setupClose.addEventListener('keydown', closeSetupDialogHadler);

    submit.addEventListener('click', closeSetupDialogHadler);
    submit.addEventListener('keydown', closeSetupDialogHadler);
  }

  function wizardEditor() {
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
}

initApplicationSettingsDialog();
