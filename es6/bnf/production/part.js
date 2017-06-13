'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      ProductionNameDefinition = require('../definition/productionName');

class PartProduction extends Production {
  constructor() {
    const groupProductionName = 'group',
          optionalPartProductionName = 'optionalPart',
          oneOrMorePartsProductionName = 'oneOrMoreParts',
          zeroOrMorePartsProductionName = 'zeroOrMoreParts',
          terminalSymbolProductionName = 'terminalSymbol',
          productionNameProductionName = 'productionName',
          noWhitespacePartProductionName = 'noWhitespacePart',
          regularExpressionProductionName = 'regularExpression',
          significantTokenTypeProductionName = 'significantTokenType',
          groupProductionNameDefinition = new ProductionNameDefinition(groupProductionName),
          optionalPartProductionNameDefinition = new ProductionNameDefinition(optionalPartProductionName),
          oneOrMorePartsProductionNameDefinition = new ProductionNameDefinition(oneOrMorePartsProductionName),
          zeroOrMorePartsProductionNameDefinition = new ProductionNameDefinition(zeroOrMorePartsProductionName),
          terminalSymbolProductionNameDefinition = new ProductionNameDefinition(terminalSymbolProductionName),
          productionNameProductionNameDefinition = new ProductionNameDefinition(productionNameProductionName),
          noWhitespacePartProductionNameDefinition = new ProductionNameDefinition(noWhitespacePartProductionName),
          regularExpressionProductionNameDefinition = new ProductionNameDefinition(regularExpressionProductionName),
          significantTokenTypeProductionNameDefinition = new ProductionNameDefinition(significantTokenTypeProductionName),
          name = 'part',
          definitions = [
            noWhitespacePartProductionNameDefinition,
            optionalPartProductionNameDefinition,
            oneOrMorePartsProductionNameDefinition,
            zeroOrMorePartsProductionNameDefinition,
            groupProductionNameDefinition,
            productionNameProductionNameDefinition,
            regularExpressionProductionNameDefinition,
            significantTokenTypeProductionNameDefinition,
            terminalSymbolProductionNameDefinition
          ],
          Node = NonTerminalNode;
    
    super(name, definitions, Node)
  }
}

module.exports = PartProduction;
