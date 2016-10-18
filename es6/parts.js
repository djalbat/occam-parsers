'use strict';

var OptionalPart = require('./part/optional'),
    TerminalTypePart = require('./part/terminalType'),
    TerminalSymbolPart = require('./part/terminalSymbol'),
    OneOrMorePartsPart = require('./part/oneOrMoreParts'),
    ZeroOrMorePartsPart = require('./part/zeroOrMoreParts'),
    RegularExpressionPart = require('./part/regularExpression'),
    ProductionNamePart = require('./part/productionName');

var Parts = [
  TerminalTypePart,
  TerminalSymbolPart,
  RegularExpressionPart,
  OptionalPart,
  OneOrMorePartsPart,
  ZeroOrMorePartsPart,
  ProductionNamePart
];

module.exports = Parts;
