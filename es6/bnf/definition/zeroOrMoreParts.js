'use strict';

const lexers = require('occam-lexers');

const SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { asterisk } = specialSymbols;
  
class ZeroOrMorePartsDefinition extends SequenceOfPartsDefinition {
  constructor() {
    const asteriskTerminalSymbolContent = asterisk;

    super(asteriskTerminalSymbolContent);
  }
}

module.exports = ZeroOrMorePartsDefinition;
