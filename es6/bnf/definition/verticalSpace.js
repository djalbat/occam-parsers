'use strict';

const Definition = require('../definition'),
      EndOfLinePart = require('../part/endOfLine'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts');

class VerticalSpaceDefinition extends Definition {
  constructor() {
    const endOfLinePart = new EndOfLinePart(),
          oneOrMoreEndOfLinePartsPart = new OneOrMorePartsPart(endOfLinePart),
          parts = [
            oneOrMoreEndOfLinePartsPart
          ];

    super(parts)
  }
}

module.exports = VerticalSpaceDefinition;
