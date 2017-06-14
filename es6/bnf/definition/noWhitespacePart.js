'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ProductionNamePart = require('../part/productionName');

class NoWhitespacePartDefinition extends Definition {
  constructor() {
    const partProductionName = 'part',
          noWhitespaceTerminalSymbolContent = 'NO_WHITESPACE',
          noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent),
          partProductionNamePart = new ProductionNamePart(partProductionName),
          parts = [
            noWhitespaceTerminalSymbolPart,
            partProductionNamePart
          ];
    
    super(parts)
  }
}

module.exports = NoWhitespacePartDefinition;
