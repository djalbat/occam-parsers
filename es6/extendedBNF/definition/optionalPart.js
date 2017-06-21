'use strict';

const SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

class OptionalPartDefinition extends SequenceOfPartsDefinition {
  constructor() {
    const questionMarkTerminalSymbolContent = '?';
    
    super(questionMarkTerminalSymbolContent);
  }
}

module.exports = OptionalPartDefinition;
