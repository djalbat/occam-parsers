'use strict';

const lexers = require('occam-lexers');

const SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { plus } = specialSymbols;

class OneOrMorePartsDefinition extends SequenceOfPartsDefinition {
  constructor() {
    const plusTerminalSymbolContent = plus;

    super(plusTerminalSymbolContent);
  }
}

module.exports = OneOrMorePartsDefinition;
