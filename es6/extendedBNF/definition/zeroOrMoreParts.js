'use strict';

const lexers = require('occam-lexers');

const SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { asterisk } = specialSymbols;
  
class ZeroOrMorePartsDefinition extends SequenceOfPartsDefinition {
  constructor() {
    const asteriskTerminalSymbolContent = asterisk;

    super(asteriskTerminalSymbolContent);
  }
}

module.exports = ZeroOrMorePartsDefinition;
