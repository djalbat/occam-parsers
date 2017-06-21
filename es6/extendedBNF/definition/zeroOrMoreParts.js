'use strict';

const SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

class ZeroOrMorePartsDefinition extends SequenceOfPartsDefinition {
  constructor() {
    const asteriskTerminalSymbolContent = '*';

    super(asteriskTerminalSymbolContent);
  }
}

module.exports = ZeroOrMorePartsDefinition;
