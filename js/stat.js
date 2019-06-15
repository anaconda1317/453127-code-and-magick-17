'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var FONT_GAP = 15;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;
var INDENT = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Пишем текс на облаке инструкция
function writeText(ctx, textArray, x, y) {
  // var y ;
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  for (var i = 0; i < textArray.length; i++) {
    ctx.fillText(textArray[i], x, y);
    y = y + 20;
  }
}

// Ищем максимальный элемент в массиве
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  var startX = 100;
  var startY = 10;
  renderCloud(ctx, startX + 10, startY + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, startX, startY, '#fff');

  writeText(ctx, ['Ура вы победили!', 'Список результатов: '], 110, 50);

  var maxTime = getMaxElement(times);

  var columnX = startX + 20;
  var columnY = startY + CLOUD_HEIGHT - 20;
  ctx.fillStyle = '#000';


  // ОТРИСОВКА ТЕКСТА И СТОЛБЦА ОБЩАЯ

  for (var i = 0; i < names.length; i++) {
    var userHeightBar = (MAX_BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], columnX + (BAR_WIDTH + INDENT) * i, columnY);
    fillBarColor(ctx, names[i]);
    ctx.fillRect(columnX + (BAR_WIDTH + INDENT) * i, columnY - FONT_GAP - userHeightBar, BAR_WIDTH, userHeightBar);
  }
};

// Цвет гистограммы-бара в зависимости от имени игрока
function fillBarColor(ctx, namePlayer) {
  var randomOpacity = Math.random();
  if (namePlayer === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = ('rgba(0, 0, 255, ' + randomOpacity) + ')'; // 'rgba(0, 0, 255, 0.12)'

  }
}
