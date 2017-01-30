'use strict';

function initApplicationSettingsDialog() {

  function setupWindow() {
    var setup = document.querySelector('.setup');
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = document.querySelector('.setup-close');

    setupOpen.addEventListener('click', function openSetup() {
      setup.classList.toggle('invisible');
    });

    setupClose.addEventListener('click', function closeSetup() {
      setup.classList.add('invisible');
    });
  }

  function wizardEditor() {
    var wizardCoatColors = [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ];

    var wizardEyesColors = [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ];

    var wizardFireballColors = [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ];

    function wizardColorsGenerator(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    var setupWizardForm = document.querySelector('.setup-wizard-form');
    var wizardCoat = setupWizardForm.querySelector('#wizard-coat');
    var wizardEyes = setupWizardForm.querySelector('#wizard-eyes');
    var wizardFireball = setupWizardForm.querySelector('.setup-fireball-wrap');

    wizardCoat.addEventListener('click', function wizardCoatColorChange() {
      wizardCoat.style.fill = wizardColorsGenerator(wizardCoatColors);
    });

    wizardEyes.addEventListener('click', function wizardEyesColorChange() {
      wizardEyes.style.fill = wizardColorsGenerator(wizardEyesColors);
    });

    wizardFireball.addEventListener('click', function wizardFireballColorChange() {
      wizardFireball.style.backgroundColor = wizardColorsGenerator(wizardFireballColors);
    });
  }

  setupWindow();
  wizardEditor();
}

initApplicationSettingsDialog();
