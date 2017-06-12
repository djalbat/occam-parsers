'use strict';

const Definition = require('../definition'),
      OneOrMorePartsPart = require('../../common/part/oneOrMoreParts');

class DefinitionDefinition extends Definition {
  constructor() {
    const terminalPart = null,
          noWhitespace = false,
          partProductionName = 'part',
          oneOrMorePartProductionNamePartsPart = new OneOrMorePartsPart(terminalPart, partProductionName, noWhitespace),
          parts = [
            oneOrMorePartProductionNamePartsPart
          ];

    super(parts)
  }
}

module.exports = DefinitionDefinition;
