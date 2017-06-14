'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ProductionNamePart = require('../part/productionName');

class SequenceOfPartsDefinition extends Definition {
  constructor(terminalSymbolContent) {
    const partProductionName = 'part',
          terminalSymbolNoWhitespace = true,
          partProductionNamePart = new ProductionNamePart(partProductionName),
          terminalSymbolPart = new TerminalSymbolPart(terminalSymbolContent, terminalSymbolNoWhitespace),
          parts = [
            partProductionNamePart,
            terminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = SequenceOfPartsDefinition;
