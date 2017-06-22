'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ProductionNamePart = require('../part/productionName');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { openBracket, closeBracket } = specialSymbols;

class GroupOfPartsDefinition extends Definition {
  constructor() {
    const partProductionName = 'part',
          openBracketTerminalSymbolContent = openBracket,
          closeBracketTerminalSymbolContent = closeBracket,
          partProductionNamePart = new ProductionNamePart(partProductionName),
          openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
          closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
          oneOrMorePartProductionNamePartsPart = new OneOrMorePartsPart(partProductionNamePart),
          parts = [
            openBracketTerminalSymbolPart,
            oneOrMorePartProductionNamePartsPart,
            closeBracketTerminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = GroupOfPartsDefinition;
