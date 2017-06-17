'use strict';

const Production = require('../production'),
      PartNode = require('../node/part'),
      ProductionNameDefinition = require('../definition/productionName');

class PartProduction extends Production {
  constructor() {
    const groupOfPartsProductionName = 'groupOfParts',
          optionalPartProductionName = 'optionalPart',
          oneOrMorePartsProductionName = 'oneOrMoreParts',
          zeroOrMorePartsProductionName = 'zeroOrMoreParts',
          terminalSymbolProductionName = 'terminalSymbol',
          endOfLineSymbolProductionName = 'endOfLineSymbol',
          wildcardSymbolProductionName = 'wildcardSymbol',
          productionNameProductionName = 'productionName',
          noWhitespacePartProductionName = 'noWhitespacePart',
          regularExpressionProductionName = 'regularExpression',
          significantTokenTypeProductionName = 'significantTokenType',
          groupOfPartsProductionNameDefinition = new ProductionNameDefinition(groupOfPartsProductionName),
          optionalPartProductionNameDefinition = new ProductionNameDefinition(optionalPartProductionName),
          oneOrMorePartsProductionNameDefinition = new ProductionNameDefinition(oneOrMorePartsProductionName),
          zeroOrMorePartsProductionNameDefinition = new ProductionNameDefinition(zeroOrMorePartsProductionName),
          terminalSymbolProductionNameDefinition = new ProductionNameDefinition(terminalSymbolProductionName),
          endOfLineSymbolProductionNameDefinition = new ProductionNameDefinition(endOfLineSymbolProductionName),
          wildcardSymbolProductionNameDefinition = new ProductionNameDefinition(wildcardSymbolProductionName),
          productionNameProductionNameDefinition = new ProductionNameDefinition(productionNameProductionName),
          noWhitespacePartProductionNameDefinition = new ProductionNameDefinition(noWhitespacePartProductionName),
          regularExpressionProductionNameDefinition = new ProductionNameDefinition(regularExpressionProductionName),
          significantTokenTypeProductionNameDefinition = new ProductionNameDefinition(significantTokenTypeProductionName),
          name = 'part',
          definitions = [
            noWhitespacePartProductionNameDefinition,
            optionalPartProductionNameDefinition,
            zeroOrMorePartsProductionNameDefinition,
            oneOrMorePartsProductionNameDefinition,
            groupOfPartsProductionNameDefinition,
            productionNameProductionNameDefinition,
            regularExpressionProductionNameDefinition,
            significantTokenTypeProductionNameDefinition,
            terminalSymbolProductionNameDefinition,
            endOfLineSymbolProductionNameDefinition,
            wildcardSymbolProductionNameDefinition
          ],
          Node = PartNode;
    
    super(name, definitions, Node)
  }
}

module.exports = PartProduction;
