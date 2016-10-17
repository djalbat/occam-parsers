'use strict';

var ProductionPart = require('./part/production'),
    TerminalTypePart = require('./part/terminalType'),
    TerminalSymbolPart = require('./part/terminalSymbol'),
    RegularExpressionPart = require('./part/regularExpression'),
    OneOrMoreProductionsPart = require('./part/oneOrMoreProductions'),
    ZeroOrMoreProductionsPart = require('./part/zeroOrMoreProductions');

var Parts = [
  TerminalTypePart,
  TerminalSymbolPart,
  RegularExpressionPart,
  ZeroOrMoreProductionsPart,
  OneOrMoreProductionsPart,
  ProductionPart
];

module.exports = Parts;
