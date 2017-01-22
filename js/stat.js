'use strict';

window.renderStatistics = function (ctx, names, times) {
  var fontColorPrimary = '#000';
  var fontFamalyPrimary = '16px PT Mono';

  function drawCloud(ctxL, x, y, widthL, heightL, shadow) {
    var cloudShadowOffset = 10;
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

  var cloudStartX = 100;
  var cloudStartY = 10;
  var cloudWidth = 420;
  var cloudHeight = 270;

  drawCloud(ctx, cloudStartX, cloudStartY, cloudWidth, cloudHeight, true);

  ctx.fillStyle = fontColorPrimary;
  ctx.font = fontFamalyPrimary;
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var gistoHeight = 150;
  var gistoWidth = 40;
  var gistoSpace = 50;
  var gistoIndent = gistoWidth + gistoSpace;
  var gistoMyColor = 'rgba(255, 0, 0, 1)';

  var gistoPositionX = 150;
  var gistoStatUpper = 15;
  var gistoColumnStartPointY = 90;
  var gistoTextStartPointY = 250;

  var gistoCoefficient = gistoHeight / Math.round(Math.max.apply(Math, times || []));

  names.forEach(function (name, idx) {
    var positionX = gistoPositionX + gistoIndent * idx;
    var trimmedTime = Math.round(times[idx]);
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
        (name === 'Вы') ? gistoMyColor : 'rgba(0, 0, ' + (Math.random() * (256)).toFixed(0) + ', 1)'
    );

    drawName(
        ctx,
        positionX,
        gistoTextStartPointY,
        name
    );
  });
};
