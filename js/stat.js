'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_WIDTH - GAP;
var INDENT = 50;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Пишем текс на облаке
function writeText(ctx, textArray, x, y) {
  // var y ;
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono'
  for (var i = 0; i < textArray.length; i++) {
    ctx.fillText(textArray[i], x, y );
    y = y + 20;
  }
}


window.renderStatistics = function(ctx, names, times) {
  var startX = 100;
  var startY = 10;
  renderCloud(ctx, startX+10, startY+10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, startX, startY, '#fff');

  writeText(ctx, ['Ура вы победили!', 'Список результатов: '], 110, 50);

  var columnX = startX + 20;
  var columnY = startY + CLOUD_HEIGHT - 20;
  ctx.fillStyle = '#000';
  ctx.fillText('Вы', columnX, columnY);
  fillBarColor(ctx, 'Вы');
  ctx.fillRect(columnX, columnY-150-FONT_GAP, BAR_WIDTH, 150);

  ctx.fillStyle = '#000';
  columnX = columnX + BAR_WIDTH + INDENT;
  ctx.fillText(names[1], columnX, columnY);
  fillBarColor(ctx, names[1]);
  ctx.fillRect(columnX, columnY-150-FONT_GAP, BAR_WIDTH, 150);

  ctx.fillStyle = '#000';
  columnX = columnX + BAR_WIDTH + INDENT;
  ctx.fillText(names[2], columnX, columnY);
  fillBarColor(ctx, names[2]);
  ctx.fillRect(columnX, columnY-150-FONT_GAP, BAR_WIDTH, 150);

  // 1) найти максимальное значение в списке times
  // 2) высота столбца с максимальным знаечнием будет равна 150
  // 3) высота других столбцов будет равна 150*(times[i]/maxTime)



  // ctx.fillText('Иван', 110, 105);
  // ctx.fillRect(160, 90, 40, 150);

  // ctx.fillText('Юлия', 110, 135);
  // ctx.fillRect(210, 90, 40, 150);
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

// 'use strict';

// window.renderStatistics = function (ctx, names, times) {
//   var renderCloud = {
//     // startX: 100,
//     // startY: 10,
//     CLOUD_X: 100,
//     CLOUD_Y: 10,
//     RECT_WIDTH: 420,
//     RECT_HEIGHT: 270,
//     GAP: 10,
//     text: ['Ура вы победили!', 'Список результатов: ']
// }
//   };


//   // Рисуем прямоугольник-облако
// var renderCloud = function(ctx, x, y, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(CLOUD_X, CLOUD_Y, RECT_WIDTH, RECT_HEIGHT);
// };


// window.renderStatistics = function(ctx) {
//   renderCloud(ctx, 110, 60, 'rgba(0, 0, 0, 0.3)');
//   renderCloud(ctx, 100, 50, '#fff');
// };


// window.renderStatistics = function(ctx, names, times) {
//   renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
//   renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
// };

//   // Пишем текст, а надо на облаке, чб он был написан
//   function writeText(textArray) {
//     ctx.fillStyle = '#000';




//     ctx.font = '16px PT Mono';
//     // сtx.fillText('Ура, вы победили! ', x,y)
//     // сtx.fillText('Список результатов: ', x,y)
//   }


// ctx.fillStyle = '#000';

//   var playerIndex = 0;
//   var playerName = 'Вы';

//   var players = ['Вы', 'Иван', 'Юлия'];

//   // максимальный элемент массива
// var getMaxElement = function(arr) {
//   var maxElement = arr[0];

//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > maxElement) {
//       maxElement = arr[i];
//     }
//   }

//   return maxElement;
// };

// var maxTime = getMaxElement(times);

//  // Цвет гистограммы-бара в зависимости от имени игрока
//   function fillBarColor(namePlayer) {
//     var randomOpacity =   ???;
//     if (namePlayer === 'Вы') {
//       ctx.fillStyle = 'rgba(255, 0, 0, 1)';
//     } else {
//       ctx.fillStyle = 'rgba(0, 0, 255, ' + randomOpacity + ')';
//     }
//   }
// };
