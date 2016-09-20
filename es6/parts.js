'use strict';

var SpecialPart = require('./part/special'),
    ProductionPart = require('./part/production'),
    RegularExpressionPart = require('./part/regularExpression'),
    ZeroOrMoreProductionsPart = require('./part/zeroOrMoreProductions');

var Parts = [
  SpecialPart,
  RegularExpressionPart,
  ZeroOrMoreProductionsPart,
  ProductionPart
];

module.exports = Parts;
