'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol'),
      ProductionNamePart = require('../../common/part/productionName');

class OptionalPartProductionDefinition extends Definition {
  constructor(productionName) {
    const noWhitespace = false,
          questionMarkTerminalSymbolContent = '?',
          rightRecursiveOptionalPartProductionName = 'rightRecursiveOptionalPart',
          productionNameProductionNamePart = new ProductionNamePart(productionName, noWhitespace),
          questionMarkTerminalSymbolPart = new TerminalSymbolPart(questionMarkTerminalSymbolContent, noWhitespace),
          rightRecursiveOptionalPartProductionNamePart = new ProductionNamePart(rightRecursiveOptionalPartProductionName, noWhitespace),
          parts = [
            productionNameProductionNamePart,
            questionMarkTerminalSymbolPart,
            rightRecursiveOptionalPartProductionNamePart
          ];
    
    super(parts)
  }
}

module.exports = OptionalPartProductionDefinition;
