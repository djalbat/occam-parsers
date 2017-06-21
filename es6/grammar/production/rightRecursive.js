'use strict';

const Definition = require('../../extendedBNF/definition'),
      Production = require('../../extendedBNF/production'),
      EpsilonPart = require('../../extendedBNF/part/epsilon'),
      ProductionNamePart = require('../../extendedBNF/part/productionName'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class RightRecursiveProduction extends Production {
  static productionNamePartFromLeftRecursiveProduction(leftRecursiveProduction) {
    const name = nameFromLeftRecursiveProduction(leftRecursiveProduction),
          noWhitespace = false, ///
          productionNamePart = new ProductionNamePart(name, noWhitespace);
    
    return productionNamePart;
  }
  
  static fromLeftRecursiveProduction(leftRecursiveProduction) {
    const name = nameFromLeftRecursiveProduction(leftRecursiveProduction),
          definitions = definitionsFromLeftRecursiveProduction(leftRecursiveProduction),
          Node = NonTerminalNode, ///
          rightRecursiveProduction = new RightRecursiveProduction(name, definitions, Node);
    
    return rightRecursiveProduction;
  }
}

module.exports = RightRecursiveProduction;

function definitionsFromLeftRecursiveProduction(leftRecursiveProduction) {
  const rightRecursiveDefinitions = rightRecursiveDefinitionsFromLeftRecursiveProduction(leftRecursiveProduction),
          epsilonPart = new EpsilonPart(),
          epsilonParts = [
            epsilonPart
          ],
          epsilonPartDefinition = new Definition(epsilonParts),
          definitions = [].concat(rightRecursiveDefinitions).concat(epsilonPartDefinition);

  return definitions;
}

function rightRecursiveDefinitionsFromLeftRecursiveProduction(leftRecursiveProduction) {
  const productionLeftRecursiveDefinitions = leftRecursiveProduction.getLeftRecursiveDefinitions(),
        productionNamePart = RightRecursiveProduction.productionNamePartFromLeftRecursiveProduction(leftRecursiveProduction),
        rightRecursiveDefinitions = productionLeftRecursiveDefinitions.map(function(productionLeftRecursiveDefinition) {
          const productionLeftRecursiveDefinitionAllButFirstParts = productionLeftRecursiveDefinition.getAllButFirstParts(),
                rightRecursiveDefinitionParts = [].concat(productionLeftRecursiveDefinitionAllButFirstParts).concat(productionNamePart),
                rightRecursiveDefinition = new Definition(rightRecursiveDefinitionParts);

          return rightRecursiveDefinition;
        });

  return rightRecursiveDefinitions;
}

function nameFromLeftRecursiveProduction(leftRecursiveProduction) {
  const leftRecursiveProductionName = leftRecursiveProduction.getName(),
        name = `${leftRecursiveProductionName}~`;

  return name;
}
