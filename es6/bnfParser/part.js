'use strict';

var TerminalPart = require('./part/terminal'),
    ProductionNamePart = require('./part/productionName'),
    RegularExpressionPart = require('./part/regularExpression'),
    ZeroOrMoreProductionNamesPart = require('./part/zeroOrMoreProductionNames');

var CommonParts = [
      TerminalPart,
      RegularExpressionPart,
      ZeroOrMoreProductionNamesPart,
      ProductionNamePart
    ];

class Part {
  static fromSymbol(symbol, Parts) {
    var part = null,
        AllParts = spliceParts(CommonParts, Parts);

    AllParts.some(function(Part) {
      part = Part.fromSymbol(symbol, Parts);

      var parsed = (part !== null);

      return parsed;
    });

    return part;
  }
}

module.exports = Part;

function spliceParts(CommonParts, Parts) {
  var AllParts = CommonParts.slice(),
      start = 4,
      deleteCount = 0;

  spliceArray(AllParts, start, deleteCount, Parts);

  return AllParts;
}

function spliceArray(array, start, deleteCount, itemsArray) {
  var args = [start, deleteCount].concat(itemsArray);

  Array.prototype.splice.apply(array, args);
}
