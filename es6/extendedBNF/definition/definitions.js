'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      GroupOfPartsPart = require('../part/groupOfParts'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ProductionNamePart = require('../part/productionName'),
      ZeroOrMorePartsPart = require('../part/zeroOrMoreParts');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { verticalBar } = specialSymbols;

class DefinitionsDefinition extends Definition {
  constructor() {
    const definitionProductionName = 'definition',
          verticalBarTerminalSymbolContent = verticalBar,
          definitionProductionNamePart = new ProductionNamePart(definitionProductionName),
          verticalBarTerminalSymbolPart = new TerminalSymbolPart(verticalBarTerminalSymbolContent),
          verticalBarTerminalSymbolThenDefinitionProductionNameParts = [
            verticalBarTerminalSymbolPart,
            definitionProductionNamePart
          ],
          groupOfPartsPart = new GroupOfPartsPart(verticalBarTerminalSymbolThenDefinitionProductionNameParts),
          zeroOrMoreGroupOfPartsPart = new ZeroOrMorePartsPart(groupOfPartsPart),
          parts = [
            definitionProductionNamePart,
            zeroOrMoreGroupOfPartsPart
          ];
    
    super(parts)
  }
}

module.exports = DefinitionsDefinition;
