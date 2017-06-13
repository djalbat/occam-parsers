'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol'),
      ProductionNamePart = require('../../common/part/productionName');

class ProductionDefinition extends Definition {
  constructor() {
    const separatorTerminalSymbolContent = '::=',
          definitionsProductionName = 'definitions',
          productionNameProductionName = 'productionName',
          productionNameProductionNamePart = new ProductionNamePart(productionNameProductionName),
          separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent),
          definitionsProductionNamePart = new ProductionNamePart(definitionsProductionName),
          parts = [
            productionNameProductionNamePart,
            separatorTerminalSymbolPart,
            definitionsProductionNamePart
          ];
    
    super(parts)
  }
}

module.exports = ProductionDefinition;
