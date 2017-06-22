'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ProductionNamePart = require('../part/productionName');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { separator, terminator } = specialSymbols;

class ProductionDefinition extends Definition {
  constructor() {
    const separatorTerminalSymbolContent = separator,
          terminatorTerminalSymbolContent = terminator,
          definitionsProductionName = 'definitions',
          productionNameProductionName = 'productionName',
          separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent),
          terminatorTerminalSymbolPart = new TerminalSymbolPart(terminatorTerminalSymbolContent),
          definitionsProductionNamePart = new ProductionNamePart(definitionsProductionName),
          productionNameProductionNamePart = new ProductionNamePart(productionNameProductionName),
          parts = [
            productionNameProductionNamePart,
            separatorTerminalSymbolPart,
            definitionsProductionNamePart,
            terminatorTerminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = ProductionDefinition;
