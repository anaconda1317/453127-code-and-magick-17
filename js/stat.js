'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var maxBarHeight = 150;
var INDENT = 50;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Пишем текс на облаке инструкция
function writeText(ctx, textArray, x, y) {
  // var y ;
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono'
  for (var i = 0; i < textArray.length; i++) {
    ctx.fillText(textArray[i], x, y );
    y = y + 20;
  }
}

// Ищем максимальный элемент в массиве
var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  var startX = 100;
  var startY = 10;
  renderCloud(ctx, startX+10, startY+10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, startX, startY, '#fff');

  writeText(ctx, ['Ура вы победили!', 'Список результатов: '], 110, 50);

  var maxTime = getMaxElement(times);

  var columnX = startX + 20;
  var columnY = startY + CLOUD_HEIGHT - 20;
  ctx.fillStyle = '#000';

  // var playerIndex = 0;
  // var playerName = 'Вы';
  // var players = ['Вы', 'Иван', 'Юлия', 'Кекс'];
  // for (var i = 0; i < players.length; i++){
  //   ctx.fillText();
  //   ctx.fillRect();
  // }

  ctx.fillText('Вы', columnX, columnY);
  fillBarColor(ctx, 'Вы');
  ctx.fillRect(columnX, columnY-150-FONT_GAP, BAR_WIDTH, (150 * times[i]) / maxTime);

  ctx.fillStyle = '#000';
  columnX = columnX + BAR_WIDTH + INDENT;
  ctx.fillText(names[1], columnX, columnY);
  fillBarColor(ctx, names[1]);
  ctx.fillRect(columnX, columnY-150-FONT_GAP, BAR_WIDTH, (150 * times[i]) / maxTime);

  ctx.fillStyle = '#000';
  columnX = columnX + BAR_WIDTH + INDENT;
  ctx.fillText(names[2], columnX, columnY);
  fillBarColor(ctx, names[2]);
  ctx.fillRect(columnX, columnY-150-FONT_GAP, BAR_WIDTH, (150 * times[i]) / maxTime);


  // ctx.fillText(players[0], columnX, columnY*i);
  // fillBarColor(ctx, players[0]);
  // ctx.fillRect(columnX + (BAR_WIDTH + INDENT)*0, columnY-150-FONT_GAP, BAR_WIDTH, (150 * times[i]) / maxTime);

  // ctx.fillStyle = '#000';

  // ctx.fillText(players[1], columnX, columnY*i);
  // fillBarColor(ctx, players[1]);
  // ctx.fillRect(columnX + (BAR_WIDTH + INDENT)*1, columnY-150-FONT_GAP, BAR_WIDTH, (150 * times[i]) / maxTime);

  // ctx.fillStyle = '#000';

  // ctx.fillText(players[2], columnX, columnY*i);
  // fillBarColor(ctx, players[2]);
  // ctx.fillRect(columnX + (BAR_WIDTH + INDENT)*2, columnY-150-FONT_GAP, BAR_WIDTH, (150 * times[i]) / maxTime);


  // ОТРИСОВКА ТЕКСТА И СТОЛБЦА ОБЩАЯ

  // for (var i = 0; i < players.length; i++){

  // ctx.fillText(players[i], columnX, columnY*i);
  // fillBarColor(ctx, players[i]);
  // ctx.fillRect(columnX + (BAR_WIDTH + INDENT)*i, columnY-maxBarHeight-FONT_GAP, BAR_WIDTH, (maxBarHeight * times[i]) / maxTime);
  }


// 1) найти максимальное значение в списке times
  // 2) высота столбца с максимальным знаечнием будет равна 150
  // 3) высота других столбцов будет равна 150*(times[i]/maxTime)

// Цвет гистограммы-бара в зависимости от имени игрока
function fillBarColor(ctx, namePlayer) {
  var randomOpacity = Math.random();
  if (namePlayer === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = ('rgba(0, 0, 255, ' + randomOpacity) + ')'; // 'rgba(0, 0, 255, 0.12)'

  }
}
