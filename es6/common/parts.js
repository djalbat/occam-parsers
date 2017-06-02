'use strict';

const EpsilonPart = require('./part/epsilon'),
      WildcardPart = require('./part/wildcard'),
      EndOfLinePart = require('./part/endOfLine'),
      OptionalPartPart = require('./part/optionalPart'),
      ProductionNamePart = require('./part/productionName'),
      TerminalSymbolPart = require('./part/terminalSymbol'),
      OneOrMorePartsPart = require('./part/oneOrMoreParts'),
      ZeroOrMorePartsPart = require('./part/zeroOrMoreParts'),
      RegularExpressionPart = require('./part/regularExpression'),
      SignificantTokenTypePart = require('./part/significantTokenType');

const Parts = [
  EpsilonPart,
  WildcardPart,
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
