'use strict';

var ProductionPart = require('./part/production'),
    TerminalTypePart = require('./part/terminalType'),
    TerminalSymbolPart = require('./part/terminalSymbol'),
    RegularExpressionPart = require('./part/regularExpression'),
    ZeroOrMoreProductionsPart = require('./part/zeroOrMoreProductions');

var Parts = [
  TerminalTypePart,
  TerminalSymbolPart,
  RegularExpressionPart,
  ZeroOrMoreProductionsPart,
  ProductionPart
];

module.exports = Parts;
