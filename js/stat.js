'use strict';

window.renderStatistics = function (ctx, names, times) {
  var fontColorPrimary = '#000';
  var fontFamalyPrimary = '16px PT Mono';

  var cloudStartX = 100;
  var cloudStartY = 10;
  var cloudWidth = 420;
  var cloudHeight = 270;
  var cloudShadowOffset = 10;

  var gistoHeight = 150;
  var gistoWidth = 40;
  var gistoSpace = 50;
  var gistoIndent = gistoWidth + gistoSpace;
  var gistoMyColor = 'rgba(255, 0, 0, 1)';

  var gistoPositionX = 150;
  var gistoStatUpper = 15;
  var gistoColumnStartPointY = 90;
  var gistoTextStartPointY = 250;

  function getMaxStatValue(stat) {
    if (Array.isArray(stat)) {
      var maxValue = 0;

      for (var i = 0; i < stat.length; i++) {
        if (stat[i] > maxValue) {
          maxValue = stat[i];
        }
      }

      return maxValue;
    }
  }

  function drawCloud(ctxL, x, y, widthL, heightL, shadow) {
    shadow = shadow || false;

    function cloud(ctxR, xR, yR, widthR, heightR, colorR) {
      ctxR.fillStyle = colorR;
      ctxR.fillRect(
        xR,
        yR,
        widthR,
        heightR
      );
    }

    if (shadow) {
      cloud(ctxL, x + cloudShadowOffset, y + cloudShadowOffset, widthL, heightL, 'rgba(0, 0, 0, 0.7)');
    }

    cloud(ctxL, x, y, widthL, heightL, 'white');
  }

  function drawStat(ctxL, x, y, stat) {
    ctxL.fillStyle = fontColorPrimary;
    ctxL.font = fontFamalyPrimary;
    ctxL.textBaseline = 'hanging';
    ctxL.fillText(stat, x, y);
  }

  function drawColumn(ctxL, x, y, widthL, heightL, color) {
    ctxL.fillStyle = color;
    ctxL.fillRect(
      x,
      y,
      widthL,
      heightL
    );
  }

  function drawName(ctxL, x, y, name) {
    ctxL.fillStyle = fontColorPrimary;
    ctxL.font = fontFamalyPrimary;
    ctxL.textBaseline = 'hanging';
    ctxL.fillText(name, x, y);
  }

  function generateColor() {
    return (Math.random() * (256)).toFixed(0);
  }

  drawCloud(ctx, cloudStartX, cloudStartY, cloudWidth, cloudHeight, true);

  ctx.fillStyle = fontColorPrimary;
  ctx.font = fontFamalyPrimary;
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var gistoCoefficient = gistoHeight / parseInt(getMaxStatValue(times), 10);

  for (var i = 0; i < names.length; i++) {
    var positionX = gistoPositionX + gistoIndent * i;
    var trimmedTime = parseInt(times[i], 10);
    var variousHeight = gistoColumnStartPointY + gistoHeight - trimmedTime * gistoCoefficient;

    drawStat(
      ctx,
      positionX,
      variousHeight - gistoStatUpper,
      trimmedTime
    );

    drawColumn(
      ctx,
      positionX,
      variousHeight,
      gistoWidth,
      trimmedTime * gistoCoefficient,
      (names[i] === 'Вы') ? gistoMyColor : 'rgba(0, 0, ' + generateColor() + ', 1)'
    );

    drawName(
      ctx,
      positionX,
      gistoTextStartPointY,
      names[i]
    );
  }
};
