'use strict';

const Production = require('../production'),
      PartNode = require('../node/part'),
      ProductionNameDefinition = require('../definition/productionName');

class PartProduction extends Production {
  constructor() {
    const noWhitespacePartProductionName = 'noWhitespacePart',
          optionalPartProductionName = 'optionalPart',
          zeroOrMorePartsProductionName = 'zeroOrMoreParts',
          oneOrMorePartsProductionName = 'oneOrMoreParts',
          groupOfPartsProductionName = 'groupOfParts',
          choiceOfPartsProductionName = 'choiceOfParts',
          productionNameProductionName = 'productionName',
          regularExpressionProductionName = 'regularExpression',
          significantTokenTypeProductionName = 'significantTokenType',
          terminalSymbolProductionName = 'terminalSymbol',
          endOfLineProductionName = 'endOfLine',
          epsilonProductionName = 'epsilon',
          wildcardProductionName = 'wildcard',
          noWhitespacePartProductionNameDefinition = new ProductionNameDefinition(noWhitespacePartProductionName),
          optionalPartProductionNameDefinition = new ProductionNameDefinition(optionalPartProductionName),
          zeroOrMorePartsProductionNameDefinition = new ProductionNameDefinition(zeroOrMorePartsProductionName),
          oneOrMorePartsProductionNameDefinition = new ProductionNameDefinition(oneOrMorePartsProductionName),
          groupOfPartsProductionNameDefinition = new ProductionNameDefinition(groupOfPartsProductionName),
          choiceOfPartsProductionNameDefinition = new ProductionNameDefinition(choiceOfPartsProductionName),
          productionNameProductionNameDefinition = new ProductionNameDefinition(productionNameProductionName),
          regularExpressionProductionNameDefinition = new ProductionNameDefinition(regularExpressionProductionName),
          significantTokenTypeProductionNameDefinition = new ProductionNameDefinition(significantTokenTypeProductionName),
          terminalSymbolProductionNameDefinition = new ProductionNameDefinition(terminalSymbolProductionName),
          endOfLineProductionNameDefinition = new ProductionNameDefinition(endOfLineProductionName),
          epsilonProductionNameDefinition = new ProductionNameDefinition(epsilonProductionName),
          wildcardProductionNameDefinition = new ProductionNameDefinition(wildcardProductionName),
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
            endOfLineProductionNameDefinition,
            epsilonProductionNameDefinition,
            wildcardProductionNameDefinition
          ],
          Node = PartNode;
    
    super(name, definitions, Node)
  }
}

module.exports = PartProduction;
