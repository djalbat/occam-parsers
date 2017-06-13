'use strict';

const Definition = require('../definition'),
      OptionalPartPart = require('../../common/part/optionalPart'),
      OneOrMorePartsPart = require('../../common/part/oneOrMoreParts');

class DefinitionDefinition extends Definition {
  constructor() {
    const terminalPart = null,
          noWhitespace = false,
          partProductionName = 'part',
          verticalSpaceProductionName = 'verticalSpace',
          oneOrMorePartProductionNamePartsPart = new OneOrMorePartsPart(terminalPart, partProductionName, noWhitespace),
          optionalVerticalSpaceProductionNamePartPart = new OptionalPartPart(terminalPart, verticalSpaceProductionName, noWhitespace),
          parts = [
            oneOrMorePartProductionNamePartsPart,
            optionalVerticalSpaceProductionNamePartPart
          ];

    super(parts)
  }
}

module.exports = DefinitionDefinition;
