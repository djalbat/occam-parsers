'use strict';

const lexers = require('occam-lexers');

const SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { plus } = specialSymbols;

class OneOrMorePartsDefinition extends SequenceOfPartsDefinition {
  constructor() {
    const plusTerminalSymbolContent = plus;

    super(plusTerminalSymbolContent);
  }
}

module.exports = OneOrMorePartsDefinition;
