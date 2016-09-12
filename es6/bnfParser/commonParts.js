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

module.exports = CommonParts;
