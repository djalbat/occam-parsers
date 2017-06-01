'use strict';

const Rule = require('../rule'),
      ProductionNamePart = require('../part/productionName');

class TerminalSymbolProductionNameRule extends Rule {
  constructor() {
    const noWhitespace = false,
          terminalSymbolProductionName = 'terminalSymbol',
          terminalSymbolProductionNamePart = new ProductionNamePart(terminalSymbolProductionName, noWhitespace),
          parts = [
            terminalSymbolProductionNamePart
          ];
    
    super(parts)
  }
}

module.exports = TerminalSymbolProductionNameRule;
