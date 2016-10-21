'use strict';

var EpsilonPart = require('./part/epsilon'),
    OptionalPartPart = require('./part/optionalPart'),
    TerminalSymbolPart = require('./part/terminalSymbol'),
    OneOrMorePartsPart = require('./part/oneOrMoreParts'),
    ZeroOrMorePartsPart = require('./part/zeroOrMoreParts'),
    RegularExpressionPart = require('./part/regularExpression'),
    SignificantTokenTypePart = require('./part/significantTokenType'),
    ProductionNamePart = require('./part/productionName');

var Parts = [
  EpsilonPart,
  RegularExpressionPart,
  SignificantTokenTypePart,
  TerminalSymbolPart,
  OptionalPartPart,
  OneOrMorePartsPart,
  ZeroOrMorePartsPart,
  ProductionNamePart
];

module.exports = Parts;
