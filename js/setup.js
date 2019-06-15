'use strict';

var DATA_WIZARDS = {
  COUNT: 4,
  NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES: ['black', 'red', 'blue', 'yellow', 'green']
};
// Находим шаблон, который мы будем копировать #similar-wizard-template и найдем элемент,
//   куда вставим похожих миагов .setup-similar-list и общий блок .setup-similar hidden
var userDialog = document.querySelector('.setup');
var setupSimilarWizards = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content;

// Отрисовываем шаблон волшебника Клонируем шаблон волшебника  - создаем DOM-элемент на основе JS-объекта

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.names + '\n ' + wizard.surnames;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyes;
  return wizardElement;
};

// Функция, возвращающая случайный элемемент массива
var randomElement = function (arr) {
  var x = Math.random() * arr.length;
  var y = Math.floor(x);
  return arr[y];

};


// Функция, для генерации случайных магов
var generateWizards = function () {
  var wizards = [];
  for (var i = 0; i < DATA_WIZARDS.COUNT; i++) {
    var wizard = {
      names: randomElement(DATA_WIZARDS.NAMES),
      surnames: randomElement(DATA_WIZARDS.SURNAMES),
      eyes: randomElement(DATA_WIZARDS.EYES),
      coat: randomElement(DATA_WIZARDS.COAT)
    };
    wizards.push(wizard);

  }

  return wizards;
};

// Функция получает волшебников и отрисывовывает в документе
var renderWizards = function () {
  var similarWizards = generateWizards();
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < similarWizards.length; i++) {
    var wi = similarWizards[i];
    var we = renderWizard(wi);
    fragment.appendChild(we);
  }
  similarListElement.appendChild(fragment);
};
renderWizards();


// Функция, открывающая окно с похожими волшебниками
var openPopup = function () {
  userDialog.classList.remove('hidden');
  setupSimilarWizards.classList.remove('hidden');
};

openPopup();
