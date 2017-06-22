'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ProductionNamePart = require('../part/productionName');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { NO_WHITESPACE } = specialSymbols;

class NoWhitespacePartDefinition extends Definition {
  constructor() {
    const partProductionName = 'part',
          noWhitespaceTerminalSymbolContent = NO_WHITESPACE,
          noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent),
          partProductionNamePart = new ProductionNamePart(partProductionName),
          parts = [
            noWhitespaceTerminalSymbolPart,
            partProductionNamePart
          ];
    
    super(parts)
  }
}

module.exports = NoWhitespacePartDefinition;
