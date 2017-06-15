'use strict';

const OptionalPartPart = require('./part/optionalPart'),
      ZeroOrMorePartsPart = require('./part/zeroOrMoreParts'),
      OneOrMorePartsPart = require('./part/oneOrMoreParts'),
      GroupOfPartsPart = require('./part/groupOfParts'),
      ProductionNamePart = require('./part/productionName'),
      RegularExpressionPart = require('./part/regularExpression'),
      SignificantTokenTypePart = require('./part/significantTokenType'),
      TerminalSymbolPart = require('./part/terminalSymbol'),
      EpsilonPart = require('./part/epsilon');

const Parts = {
  'OptionalPartPart' : OptionalPartPart,
  'ZeroOrMorePartsPart' : ZeroOrMorePartsPart,
  'OneOrMorePartsPart' : OneOrMorePartsPart,
  'GroupOfPartsPart' : GroupOfPartsPart,
  'ProductionNamePart' : ProductionNamePart,
  'RegularExpressionPart' : RegularExpressionPart,
  'SignificantTokenTypePart' : SignificantTokenTypePart,
  'TerminalSymbolPart' : TerminalSymbolPart,
  'EpsilonPart' : EpsilonPart
};

module.exports = Parts;
