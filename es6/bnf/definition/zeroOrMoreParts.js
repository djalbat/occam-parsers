'use strict';

const Definition = require('../definition'),
      OptionalPartPart = require('../../common/part/optionalPart'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol'),
      ProductionNamePart = require('../../common/part/productionName');

class ZeroOrMorePartsDefinition extends Definition {
  constructor() {
    const partProductionName = 'part',
          asteriskTerminalSymbolContent = '*',
          asteriskTerminalSymbolNoWhitespace = true,
          lazyQuantifierProductionName = 'lazyQuantifier',
          partProductionNamePart = new ProductionNamePart(partProductionName),
          asteriskTerminalSymbolPart = new TerminalSymbolPart(asteriskTerminalSymbolContent, asteriskTerminalSymbolNoWhitespace),
          lazyQuantifierProductionNamePart = new ProductionNamePart(lazyQuantifierProductionName),
          optionalLazyQuantifierProductionNamePartPart = new OptionalPartPart(lazyQuantifierProductionNamePart),
          parts = [
            partProductionNamePart,
            asteriskTerminalSymbolPart,
            optionalLazyQuantifierProductionNamePartPart
          ];
    
    super(parts)
  }
}

module.exports = ZeroOrMorePartsDefinition;
