'use strict';

(function () {
  var allWizards = null;

  var colorizeProperty = function (property, element, color) {
    element.style[property] = color;
  };

  function smallWizardsRender() {
    var wrapper = document.querySelector('.setup-similar');
    var randomWizards = window.utils.getRandomElementsInArray(allWizards, 5);

    var fragment = document.createDocumentFragment();
    randomWizards.forEach(function (item) {
      var clone = document.querySelector('.setup-wizard').cloneNode(true);

      window.utils.idToClassNameTreeReplacer(clone);
      clone.setAttribute('name', item.name);
      colorizeProperty('fill', clone.querySelector('.wizard-coat'), item.colorCoat);
      colorizeProperty('fill', clone.querySelector('.wizard-eyes'), item.colorEyes);
      fragment.appendChild(clone);
    });
    wrapper.innerHTML = '';
    wrapper.appendChild(fragment);
  }

  function getAllWizards(resp) {
    allWizards = JSON.parse(resp);
    smallWizardsRender();
  }

  function dialogControl() {
    var setupOpen = document.querySelector('.setup-open');

    var focusToElement = function (elem) {
      elem.focus();
    };

    var openSetupDialogHandler = function (evt) {
      if (window.utils.isActivationEvent(evt)) {
        var callback = null;

        if (evt.keyCode) {
          callback = focusToElement;
        }

        window.enableSetup(evt.target, callback, getAllWizards);
      }
    };

    setupOpen.addEventListener('click', openSetupDialogHandler);
    setupOpen.addEventListener('keydown', openSetupDialogHandler);
  }

  function wizardEditor() {
    var setupWizardForm = document.querySelector('.setup-wizard-form');

    var wizardCoat = setupWizardForm.querySelector('#wizard-coat');
    var wizardCoatColors = [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ];
    window.colorizeElement(wizardCoat, wizardCoatColors, colorizeProperty.bind(colorizeProperty, 'fill'), smallWizardsRender);

    var wizardEyes = setupWizardForm.querySelector('#wizard-eyes');
    var wizardEyesColors = [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ];
    window.colorizeElement(wizardEyes, wizardEyesColors, colorizeProperty.bind(colorizeProperty, 'fill'), smallWizardsRender);

    var wizardFireball = setupWizardForm.querySelector('.setup-fireball-wrap');
    var wizardFireballColors = [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ];
    window.colorizeElement(wizardFireball, wizardFireballColors, colorizeProperty.bind(colorizeProperty, 'backgroundColor'), smallWizardsRender);
  }

  dialogControl();
  wizardEditor();
})();
