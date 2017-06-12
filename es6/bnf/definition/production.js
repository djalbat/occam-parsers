'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol'),
      ProductionNamePart = require('../../common/part/productionName'),
      SignificantTokenTypePart = require('../../common/part/significantTokenType');

class ProductionDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          productionNameProductionName = 'productionName',
          separatorTerminalSymbolContent = '::=',
          definitionsProductionName = 'definitions',
          endOfLineSignificantTokenType = 'endOfLine',
          productionNameProductionNamePart = new ProductionNamePart(productionNameProductionName, noWhitespace),
          separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent, noWhitespace),
          definitionsProductionNamePart = new ProductionNamePart(definitionsProductionName, noWhitespace),
          endOfLineSignificantTokenTypePart = new SignificantTokenTypePart(endOfLineSignificantTokenType, noWhitespace),
          parts = [
            productionNameProductionNamePart,
            separatorTerminalSymbolPart,
            definitionsProductionNamePart,
            endOfLineSignificantTokenTypePart
          ];
    
    super(parts)
  }
}

module.exports = ProductionDefinition;
