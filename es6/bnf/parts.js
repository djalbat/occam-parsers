'use strict';

const EpsilonPart = require('./part/epsilon'),
      WildcardPart = require('./part/wildcard'),
      EndOfLinePart = require('./part/endOfLine'),
      OptionalPartPart = require('./part/optionalPart'),
      GroupOfPartsPart = require('./part/groupOfParts'),
      TerminalSymbolPart = require('./part/terminalSymbol'),
      ProductionNamePart = require('./part/productionName'),
      OneOrMorePartsPart = require('./part/oneOrMoreParts'),
      SequenceOfPartsPart = require('./part/sequenceOfParts'),
      ZeroOrMorePartsPart = require('./part/zeroOrMoreParts'),
      RegularExpressionPart = require('./part/regularExpression'),
      SignificantTokenTypePart = require('./part/significantTokenType');

const Parts = {
  'EpsilonPart' : EpsilonPart,
  'WildcardPart' : WildcardPart,
  'EndOfLinePart' : EndOfLinePart,
  'OptionalPartPart' : OptionalPartPart,
  'GroupOfPartsPart' : GroupOfPartsPart,
  'TerminalSymbolPart' : TerminalSymbolPart,
  'ProductionNamePart' : ProductionNamePart,
  'OneOrMorePartsPart' : OneOrMorePartsPart,
  'SequenceOfPartsPart' : SequenceOfPartsPart,
  'ZeroOrMorePartsPart' : ZeroOrMorePartsPart,
  'RegularExpressionPart' : RegularExpressionPart,
  'SignificantTokenTypePart' : SignificantTokenTypePart
};

module.exports = Parts;
