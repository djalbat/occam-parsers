'use strict';

const Rule = require('../rule'),
      EndOfLinePart = require('../part/endOfLine'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ProductionNamePart = require('../part/productionName');

class ProductionRule extends Rule {
  constructor() {
    const noWhitespace = false,
          productionNameProductionName = 'productionName',
          productionNameProductionNamePart = new ProductionNamePart(productionNameProductionName, noWhitespace),
          separatorSymbol = '::=',
          separatorTerminalSymbolPart = new TerminalSymbolPart(separatorSymbol, noWhitespace),
          rulesProductionName = 'rules',
          rulesProductionNamePart = new ProductionNamePart(rulesProductionName, noWhitespace),
          endOfLinePart = new EndOfLinePart(),
          parts = [
            productionNameProductionNamePart,
            separatorTerminalSymbolPart,
            rulesProductionNamePart,
            endOfLinePart
          ];
    
    super(parts)
  }
}

module.exports = ProductionRule;
