'use strict';

window.renderStatistics = function (ctx, names, times) {
  var renderCloud = {
    // startX: 100,
    // startY: 10,
    CLOUD_X: 100,
    CLOUD_Y: 10,
    RECT_WIDTH: 420,
    RECT_HEIGHT: 270,
    GAP: 10,
    text: ['Ура вы победили!', 'Список результатов: ']
}
  };


  // Рисуем прямоугольник-облако
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(CLOUD_X, CLOUD_Y, RECT_WIDTH, RECT_HEIGHT);
};


window.renderStatistics = function(ctx) {
  renderCloud(ctx, 110, 60, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 50, '#fff');
};


window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
};

  // Пишем текст, а надо на облаке, чб он был написан
  function writeText(textArray) {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    // сtx.fillText('Ура, вы победили! ', x,y)
    // сtx.fillText('Список результатов: ', x,y)
  }


ctx.fillStyle = '#000';

  var playerIndex = 0;
  var playerName = 'Вы';

  var players = ['Вы', 'Иван', 'Юлия'];

  // максимальный элемент массива
var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var maxTime = getMaxElement(times);

 // Цвет гистограммы-бара в зависимости от имени игрока
  function fillBarColor(namePlayer) {
    var randomOpacity =   ???;
    if (namePlayer === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + randomOpacity + ')';
    }
  }
};
