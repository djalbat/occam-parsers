'use strict';

const Definition = require('../definition'),
      OneOrMorePartsPart = require('../../common/part/oneOrMoreParts'),
      SignificantTokenTypePart = require('../../common/part/significantTokenType');

class VerticalSpaceDefinition extends Definition {
  constructor() {
    const terminalPart = null,
          noWhitespace = false,
          endOfLineProductionName = 'endOfLine',
          endOfLineSignificantTokenType = 'endOfLine',
          oneOrMoreEndOfLineProductionNamePartsPart = new OneOrMorePartsPart(terminalPart, endOfLineProductionName, noWhitespace),
          endOfLineSignificantTokenTypePart = new SignificantTokenTypePart(endOfLineSignificantTokenType, noWhitespace),
          parts = [
            oneOrMoreEndOfLineProductionNamePartsPart
          ];

    super(parts)
  }
}

module.exports = VerticalSpaceDefinition;
