'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

setupOpen.addEventListener('click', function openSetup() {
  setup.classList.toggle('invisible');
});

setupClose.addEventListener('click', function closeSetup() {
  setup.classList.add('invisible');
});

var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

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

wizardCoat.addEventListener('click', function wizardCoatColorChange() {
  wizardCoat.style.fill = wizardColorsGenerator(wizardCoatColors);
});

wizardEyes.addEventListener('click', function wizardEyesColorChange() {
  wizardEyes.style.fill = wizardColorsGenerator(wizardEyesColors);
});

wizardFireball.addEventListener('click', function wizardFireballColorChange() {
  wizardFireball.style.backgroundColor = wizardColorsGenerator(wizardFireballColors);
});
