'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      OptionalPartProductionDefinition = require('../definition/optionalPartProduction');

class OptionalPartProduction extends Production {
  constructor() {
    const groupProductionName = 'group',
          endOfLineProductionName = 'endOfLine',
          noWhitespaceProductionName = 'noWhitespace',
          terminalSymbolProductionName = 'terminalSymbol',
          productionNameProductionName = 'productionName',
          regularExpressionProductionName = 'regularExpression',
          significantTokenTypeProductionName = 'significantTokenType',
          groupProductionNameDefinition = new OptionalPartProductionDefinition(groupProductionName),
          endOfLineProductionNameDefinition = new OptionalPartProductionDefinition(endOfLineProductionName),
          noWhitespaceProductionNameDefinition = new OptionalPartProductionDefinition(noWhitespaceProductionName),
          terminalSymbolProductionNameDefinition = new OptionalPartProductionDefinition(terminalSymbolProductionName),
          productionNameProductionNameDefinition = new OptionalPartProductionDefinition(productionNameProductionName),
          regularExpressionProductionNameDefinition = new OptionalPartProductionDefinition(regularExpressionProductionName),
          significantTokenTypeProductionNameDefinition = new OptionalPartProductionDefinition(significantTokenTypeProductionName),
          name = 'optionalPart',
          definitions = [
            groupProductionNameDefinition,
            productionNameProductionNameDefinition,
            regularExpressionProductionNameDefinition,
            significantTokenTypeProductionNameDefinition,
            terminalSymbolProductionNameDefinition,
            noWhitespaceProductionNameDefinition,
            endOfLineProductionNameDefinition
          ],
          Node = NonTerminalNode;

    super(name, definitions, Node)
  }
}

module.exports = OptionalPartProduction;
