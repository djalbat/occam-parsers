'use strict';

const Rule = require('../rule'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ProductionNamePart = require('../part/productionName'),
      SignificantTokenTypePart = require('../part/significantTokenType');

class ProductionRule extends Rule {
  constructor() {
    const noWhitespace = false,
          productionNameProductionNameContent = 'productionName',
          separatorTerminalSymbolContent = '::=',
          rulesProductionNameContent = 'rules',
          endOfLineSignificantTokenType = 'endOfLine',
          productionNameProductionNamePart = new ProductionNamePart(productionNameProductionNameContent, noWhitespace),
          separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent, noWhitespace),
          rulesProductionNamePart = new ProductionNamePart(rulesProductionNameContent, noWhitespace),
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
