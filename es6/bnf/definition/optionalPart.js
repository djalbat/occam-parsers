'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ProductionNamePart = require('../../common/part/productionName');

class OptionalPartDefinition extends Definition {
  constructor() {
    const partProductionName = 'part',
          questionMarkTerminalSymbolContent = '?',
          questionMarkTerminalSymbolNoWhitespace = true,
          partProductionNamePart = new ProductionNamePart(partProductionName),
          questionMarkTerminalSymbolPart = new TerminalSymbolPart(questionMarkTerminalSymbolContent, questionMarkTerminalSymbolNoWhitespace),
          parts = [
            partProductionNamePart,
            questionMarkTerminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = OptionalPartDefinition;
