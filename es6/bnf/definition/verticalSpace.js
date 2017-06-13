'use strict';

const Definition = require('../definition'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts'),
      SignificantTokenTypePart = require('../../common/part/significantTokenType');

class VerticalSpaceDefinition extends Definition {
  constructor() {
    const endOfLineSignificantTokenType = 'endOfLine',
          endOfLineSignificantTokenTypePart = new SignificantTokenTypePart(endOfLineSignificantTokenType),
          oneOrMoreEndOfLineSignificantTokenTypePartsPart = new OneOrMorePartsPart(endOfLineSignificantTokenTypePart),
          parts = [
            oneOrMoreEndOfLineSignificantTokenTypePartsPart
          ];

    super(parts)
  }
}

module.exports = VerticalSpaceDefinition;
