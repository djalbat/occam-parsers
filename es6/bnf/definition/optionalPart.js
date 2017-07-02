'use strict';

const lexers = require('occam-lexers');

const SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { questionMark } = specialSymbols;
  
class OptionalPartDefinition extends SequenceOfPartsDefinition {
  constructor() {
    const questionMarkTerminalSymbolContent = questionMark;
    
    super(questionMarkTerminalSymbolContent);
  }
}

module.exports = OptionalPartDefinition;
