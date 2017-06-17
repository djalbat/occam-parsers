'use strict';

const Production = require('../production'),
      PartNode = require('../node/part'),
      ProductionNameDefinition = require('../definition/productionName');

class PartProduction extends Production {
  constructor() {
    const optionalPartProductionName = 'optionalPart',
          zeroOrMorePartsProductionName = 'zeroOrMoreParts',
          oneOrMorePartsProductionName = 'oneOrMoreParts',
          groupOfPartsProductionName = 'groupOfParts',
          choiceOfPartsProductionName = 'choiceOfParts',
          terminalSymbolProductionName = 'terminalSymbol',
          endOfLineSymbolProductionName = 'endOfLineSymbol',
          wildcardSymbolProductionName = 'wildcardSymbol',
          productionNameProductionName = 'productionName',
          noWhitespacePartProductionName = 'noWhitespacePart',
          regularExpressionProductionName = 'regularExpression',
          significantTokenTypeProductionName = 'significantTokenType',
          optionalPartProductionNameDefinition = new ProductionNameDefinition(optionalPartProductionName),
          zeroOrMorePartsProductionNameDefinition = new ProductionNameDefinition(zeroOrMorePartsProductionName),
          oneOrMorePartsProductionNameDefinition = new ProductionNameDefinition(oneOrMorePartsProductionName),
          groupOfPartsProductionNameDefinition = new ProductionNameDefinition(groupOfPartsProductionName),
          choiceOfPartsProductionNameDefinition = new ProductionNameDefinition(choiceOfPartsProductionName),
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
            choiceOfPartsProductionNameDefinition,
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
