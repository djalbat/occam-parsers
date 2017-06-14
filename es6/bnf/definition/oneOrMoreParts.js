'use strict';

const Definition = require('../definition'),
      OptionalPartPart = require('../../common/part/optionalPart'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol'),
      ProductionNamePart = require('../../common/part/productionName');

class OneOrMorePartsDefinition extends Definition {
  constructor() {
    const partProductionName = 'part',
          plusTerminalSymbolContent = '+',
          plusTerminalSymbolNoWhitespace = true,
          lazyQuantifierProductionName = 'lazyQuantifier',
          partProductionNamePart = new ProductionNamePart(partProductionName),
          plusTerminalSymbolPart = new TerminalSymbolPart(plusTerminalSymbolContent, plusTerminalSymbolNoWhitespace),
          lazyQuantifierProductionNamePart = new ProductionNamePart(lazyQuantifierProductionName),
          optionalLazyQuantifierProductionNamePartPart = new OptionalPartPart(lazyQuantifierProductionNamePart),
          parts = [
            partProductionNamePart,
            plusTerminalSymbolPart,
            optionalLazyQuantifierProductionNamePartPart
          ];
    
    super(parts)
  }
}

module.exports = OneOrMorePartsDefinition;
