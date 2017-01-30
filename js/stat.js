'use strict';

window.renderStatistics = function (ctx, names, times) {
  var fontColorPrimary = '#000';
  var fontFamalyPrimary = '16px PT Mono';

  function drawCloud(ctxL, x, y, widthL, heightL) {
    var cloudShadowOffset = 10;

    function cloud(ctxR, xR, yR, widthR, heightR, colorR) {
      ctxR.fillStyle = colorR;
      ctxR.fillRect(
          xR,
          yR,
          widthR,
          heightR
      );
    }

    cloud(ctxL, x + cloudShadowOffset, y + cloudShadowOffset, widthL, heightL, 'rgba(0, 0, 0, 0.7)');
    cloud(ctxL, x, y, widthL, heightL, 'white');
  }

  function drawTitle(text, x, y) {
    ctx.fillStyle = fontColorPrimary;
    ctx.font = fontFamalyPrimary;
    ctx.fillText(text, x, y);
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

  drawCloud(ctx, cloudStartX, cloudStartY, cloudWidth, cloudHeight);
  drawTitle('Ура вы победили!', 120, 40);
  drawTitle('Список результатов:', 120, 60);

  var maxTime = Math.max.apply(Math, times || []);

  function drawSingleBarChart(userName, currentTime, idx, time) {
    var gistoHeight = 150;
    var gistoWidth = 40;
    var gistoSpace = 50;
    var gistoIndent = gistoWidth + gistoSpace;
    var gistoMyColor = 'rgba(255, 0, 0, 1)';

    var gistoPositionX = 150;
    var gistoStatUpper = 15;
    var gistoColumnStartPointY = 90;
    var gistoTextStartPointY = 250;

    var gistoCoefficient = gistoHeight / Math.round(time);

    var positionX = gistoPositionX + gistoIndent * idx;
    var trimmedTime = Math.round(currentTime);
    var variousHeight = gistoColumnStartPointY + gistoHeight - trimmedTime * gistoCoefficient;

    function getGistoColor(name, color) {
      return (name === 'Вы') ? color : 'rgba(0, 0, ' + (Math.random() * 255).toFixed(0) + ', 1)';
    }

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
        getGistoColor(userName, gistoMyColor)
    );

    drawName(
        ctx,
        positionX,
        gistoTextStartPointY,
        userName
    );
  }

  names.forEach(function (name, idx) {
    drawSingleBarChart(name, times[idx], idx, maxTime);
  });
};
