'use strict';

var EpsilonPart = require('./part/epsilon'),
    EndOfLinePart = require('./part/endOfLine'),
    OptionalPartPart = require('./part/optionalPart'),
    TerminalSymbolPart = require('./part/terminalSymbol'),
    OneOrMorePartsPart = require('./part/oneOrMoreParts'),
    ZeroOrMorePartsPart = require('./part/zeroOrMoreParts'),
    RegularExpressionPart = require('./part/regularExpression'),
    SignificantTokenTypePart = require('./part/significantTokenType'),
    ProductionNamePart = require('./part/productionName');

var Parts = [
  EpsilonPart,
  EndOfLinePart,
  RegularExpressionPart,
  SignificantTokenTypePart,
  TerminalSymbolPart,
  OptionalPartPart,
  OneOrMorePartsPart,
  ZeroOrMorePartsPart,
  ProductionNamePart
];

module.exports = Parts;
