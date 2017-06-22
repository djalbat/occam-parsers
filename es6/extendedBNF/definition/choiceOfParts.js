'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      GroupOfPartsPart = require('../part/groupOfParts'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ProductionNamePart = require('../part/productionName');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { verticalBar, openBracket, closeBracket } = specialSymbols;

class ChoiceOfPartsDefinition extends Definition {
  constructor() {
    const partProductionName = 'part',
          verticalBarTerminalSymbolContent = verticalBar,
          openBracketTerminalSymbolContent = openBracket,
          closeBracketTerminalSymbolContent = closeBracket,
          partProductionNamePart = new ProductionNamePart(partProductionName),
          verticalBarTerminalSymbolPart = new TerminalSymbolPart(verticalBarTerminalSymbolContent),
          openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
          closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
          verticalBarTerminalSymbolThenPartProductionNameParts = [
            verticalBarTerminalSymbolPart,
            partProductionNamePart
          ],
          groupOfPartsPart = new GroupOfPartsPart(verticalBarTerminalSymbolThenPartProductionNameParts),
          oneOrMoreGroupOfPartsPart = new OneOrMorePartsPart(groupOfPartsPart),
          parts = [
            openBracketTerminalSymbolPart,
            partProductionNamePart,
            oneOrMoreGroupOfPartsPart,
            closeBracketTerminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = ChoiceOfPartsDefinition;
