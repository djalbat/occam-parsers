'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol'),
      ProductionNamePart = require('../../common/part/productionName');

class ZeroOrMorePartsDefinition extends Definition {
  constructor() {
    const partProductionName = 'part',
          asteriskTerminalSymbolContent = '*',
          asteriskTerminalSymbolNoWhitespace = true,
          partProductionNamePart = new ProductionNamePart(partProductionName),
          asteriskTerminalSymbolPart = new TerminalSymbolPart(asteriskTerminalSymbolContent, asteriskTerminalSymbolNoWhitespace),
          parts = [
            partProductionNamePart,
            asteriskTerminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = ZeroOrMorePartsDefinition;
