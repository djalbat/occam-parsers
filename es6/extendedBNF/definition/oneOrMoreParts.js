'use strict';

const SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

class OneOrMorePartsDefinition extends SequenceOfPartsDefinition {
  constructor() {
    const plusTerminalSymbolContent = '+';

    super(plusTerminalSymbolContent);
  }
}

module.exports = OneOrMorePartsDefinition;
