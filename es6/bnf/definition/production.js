'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ProductionNamePart = require('../part/productionName');

class ProductionDefinition extends Definition {
  constructor() {
    const separatorTerminalSymbolContent = '::=',
          terminatorTerminalSymbolContent = ';',
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
