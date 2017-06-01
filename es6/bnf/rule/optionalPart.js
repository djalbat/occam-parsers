'use strict';

const Rule = require('../rule'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol'),
      ProductionNamePart = require('../../common/part/productionName');

class OptionalPartRule extends Rule {
  constructor() {
    const noWhitespace = true,
          partProductionName = 'part',
          questionMarkTerminalSymbolContent = '?',
          partProductionNamePart = new ProductionNamePart(partProductionName, noWhitespace),
          questionMarkTerminalSymbolPart = new TerminalSymbolPart(questionMarkTerminalSymbolContent, noWhitespace),
          parts = [
            partProductionNamePart,
            questionMarkTerminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = OptionalPartRule;
