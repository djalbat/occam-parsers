'use strict';

var TerminalPart = require('./part/terminal'),
    ProductionPart = require('./part/production'),
    RegularExpressionPart = require('./part/regularExpression'),
    ZeroOrMoreProductionsPart = require('./part/zeroOrMoreProductions');

var Parts = [
  TerminalPart,
  RegularExpressionPart,
  ZeroOrMoreProductionsPart,
  ProductionPart
];

module.exports = Parts;
