'use strict';

const Rule = require('../rule'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ProductionNamePart = require('../part/productionName'),
      SignificantTokenTypePart = require('../../common/part/significantTokenType');

class ProductionRule extends Rule {
  constructor() {
    const noWhitespace = false,
          productionNameProductionName = 'productionName',
          separatorTerminalSymbolContent = '::=',
          rulesProductionName = 'rules',
          endOfLineSignificantTokenType = 'endOfLine',
          productionNameProductionNamePart = new ProductionNamePart(productionNameProductionName, noWhitespace),
          separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent, noWhitespace),
          rulesProductionNamePart = new ProductionNamePart(rulesProductionName, noWhitespace),
          endOfLineSignificantTokenTypePart = new SignificantTokenTypePart(endOfLineSignificantTokenType, noWhitespace),
          parts = [
            productionNameProductionNamePart,
            separatorTerminalSymbolPart,
            rulesProductionNamePart,
            endOfLineSignificantTokenTypePart
          ];
    
    super(parts)
  }
}

module.exports = ProductionRule;
