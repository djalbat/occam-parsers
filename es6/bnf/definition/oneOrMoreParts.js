'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ProductionNamePart = require('../part/productionName');

class OneOrMorePartsDefinition extends Definition {
  constructor() {
    const partProductionName = 'part',
          plusTerminalSymbolContent = '+',
          plusTerminalSymbolNoWhitespace = true,
          partProductionNamePart = new ProductionNamePart(partProductionName),
          plusTerminalSymbolPart = new TerminalSymbolPart(plusTerminalSymbolContent, plusTerminalSymbolNoWhitespace),
          parts = [
            partProductionNamePart,
            plusTerminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = OneOrMorePartsDefinition;
