'use strict';

const Definition = require('../definition'),
      ProductionNamePart = require('../../common/part/productionName'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol');

class RightRecursiveOptionalPartDefinition extends Definition {
  constructor() {
    const noWhitespace = true,
          questionMarkTerminalSymbolContent = '?',
          rightRecursiveOptionalPartProductionName = 'rightRecursiveOptionalPart',
          questionMarkTerminalSymbolPart = new TerminalSymbolPart(questionMarkTerminalSymbolContent, noWhitespace),
          rightRecursiveOptionalPartProductionNamePart = new ProductionNamePart(rightRecursiveOptionalPartProductionName),
          parts = [
            questionMarkTerminalSymbolPart,
            rightRecursiveOptionalPartProductionNamePart
          ];

    super(parts)
  }
}

module.exports = RightRecursiveOptionalPartDefinition;
