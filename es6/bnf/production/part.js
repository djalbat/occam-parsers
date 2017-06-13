'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      ProductionNameDefinition = require('../definition/productionName');

class PartProduction extends Production {
  constructor() {
    const groupProductionName = 'group',
          endOfLineProductionName = 'endOfLine',
          optionalPartProductionName = 'optionalPart',
          noWhitespaceProductionName = 'noWhitespace',
          terminalSymbolProductionName = 'terminalSymbol',
          productionNameProductionName = 'productionName',
          regularExpressionProductionName = 'regularExpression',
          significantTokenTypeProductionName = 'significantTokenType',
          groupProductionNameDefinition = new ProductionNameDefinition(groupProductionName),
          endOfLineProductionNameDefinition = new ProductionNameDefinition(endOfLineProductionName),
          optionalPartProductionNameDefinition = new ProductionNameDefinition(optionalPartProductionName),
          noWhitespaceProductionNameDefinition = new ProductionNameDefinition(noWhitespaceProductionName),
          terminalSymbolProductionNameDefinition = new ProductionNameDefinition(terminalSymbolProductionName),
          productionNameProductionNameDefinition = new ProductionNameDefinition(productionNameProductionName),
          regularExpressionProductionNameDefinition = new ProductionNameDefinition(regularExpressionProductionName),
          significantTokenTypeProductionNameDefinition = new ProductionNameDefinition(significantTokenTypeProductionName),
          name = 'part',
          definitions = [
            optionalPartProductionNameDefinition,
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

module.exports = PartProduction;
