'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol'),
      ProductionNamePart = require('../../common/part/productionName');

class NegatedPartDefinition extends Definition {
  constructor() {
    const partProductionName = 'part',
          partProductionNameNoWhitespace = true,
          exclamationMarkTerminalSymbolContent = '!',
          exclamationMarkTerminalSymbolPart = new TerminalSymbolPart(exclamationMarkTerminalSymbolContent),
          partProductionNamePart = new ProductionNamePart(partProductionName, partProductionNameNoWhitespace),
          parts = [
            exclamationMarkTerminalSymbolPart,
            partProductionNamePart
          ];
    
    super(parts)
  }
}

module.exports = NegatedPartDefinition;
