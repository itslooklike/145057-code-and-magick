'use strict';

(function () {
  var url = 'https://intensive-javascript-server-myophkugvq.now.sh/code-and-magick/data';
  var allWizards = null;
  var smallWizardsShowTimeout = null;

  var onChangeColorAction = function(property, element, color) {
    colorizeProperty(property, element, color);
    clearTimeout(smallWizardsShowTimeout);
    smallWizardsShowTimeout = setTimeout(smallWizardsRender, 500);
  }

  var colorizeProperty = function (property, element, color) {
    element.style[property] = color;
  };

  function smallWizardsRender() {
    var wrapper = document.querySelector('.setup-similar');
    var randomWizards = window.utils.getRandomElementsInArray(allWizards, 5);

    var fragment = document.createDocumentFragment();
    randomWizards.forEach(function (item) {
      var clone = document.querySelector('.setup-wizard-wrap').cloneNode(true);

      window.utils.idToClassNameTreeReplacer(clone);
      clone.setAttribute('title', item.name);
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
          callback = focusToElement.bind(focusToElement, evt.target);
        }

        window.enableSetup(callback);
        window.load(url, getAllWizards);
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
    window.colorizeElement(wizardCoat, wizardCoatColors, onChangeColorAction.bind(null, 'fill'));

    var wizardEyes = setupWizardForm.querySelector('#wizard-eyes');
    var wizardEyesColors = [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ];
    window.colorizeElement(wizardEyes, wizardEyesColors, onChangeColorAction.bind(null, 'fill'));

    var wizardFireball = setupWizardForm.querySelector('.setup-fireball-wrap');
    var wizardFireballColors = [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ];
    window.colorizeElement(wizardFireball, wizardFireballColors, onChangeColorAction.bind(null, 'backgroundColor'));
  }

  dialogControl();
  wizardEditor();
})();
