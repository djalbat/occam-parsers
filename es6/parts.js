'use strict';

var OptionalPartPart = require('./part/optionalPart'),
    TerminalSymbolPart = require('./part/terminalSymbol'),
    OneOrMorePartsPart = require('./part/oneOrMoreParts'),
    ZeroOrMorePartsPart = require('./part/zeroOrMoreParts'),
    RegularExpressionPart = require('./part/regularExpression'),
    SignificantTokenTypePart = require('./part/significantTokenType'),
    ProductionNamePart = require('./part/productionName');

var Parts = [
  TerminalSymbolPart,
  RegularExpressionPart,
  SignificantTokenTypePart,
  OptionalPartPart,
  OneOrMorePartsPart,
  ZeroOrMorePartsPart,
  ProductionNamePart
];

module.exports = Parts;
