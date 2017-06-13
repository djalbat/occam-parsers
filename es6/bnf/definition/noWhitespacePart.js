'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol'),
      ProductionNamePart = require('../../common/part/productionName');

class NoWhitespacePartDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          noWhitespaceTerminalSymbolContent = '<NO_WHITESPACE>',
          partProductionName = 'part',
          noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent, noWhitespace),
          partProductionNamePart = new ProductionNamePart(partProductionName, noWhitespace),
          parts = [
            noWhitespaceTerminalSymbolPart,
            partProductionNamePart
          ];
    
    super(parts)
  }
}

module.exports = NoWhitespacePartDefinition;
