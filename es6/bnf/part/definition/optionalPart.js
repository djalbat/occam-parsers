'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol'),
      ProductionNamePart = require('../../common/part/productionName');

class OptionalPartDefinition extends Definition {
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

module.exports = OptionalPartDefinition;
