'use strict';

const Definition = require('../definition'),
      OptionalPartPart = require('../../common/part/optionalPart'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol'),
      ProductionNamePart = require('../../common/part/productionName');

class OptionalPartDefinition extends Definition {
  constructor() {
    const partProductionName = 'part',
          questionMarkTerminalSymbolContent = '?',
          questionMarkTerminalSymbolNoWhitespace = true,
          lazyQuantifierProductionName = 'lazyQuantifier',
          partProductionNamePart = new ProductionNamePart(partProductionName),
          questionMarkTerminalSymbolPart = new TerminalSymbolPart(questionMarkTerminalSymbolContent, questionMarkTerminalSymbolNoWhitespace),
          lazyQuantifierProductionNamePart = new ProductionNamePart(lazyQuantifierProductionName),
          optionalLazyQuantifierProductionNamePartPart = new OptionalPartPart(lazyQuantifierProductionNamePart),
          parts = [
            partProductionNamePart,
            questionMarkTerminalSymbolPart,
            optionalLazyQuantifierProductionNamePartPart
          ];
    
    super(parts)
  }
}

module.exports = OptionalPartDefinition;
