'use strict';

const Definition = require('../../bnf/definition'),
      Production = require('../../bnf/production'),
      RightRecursiveProduction = require('../production/rightRecursive');

class NonLeftRecursiveProduction extends Production {
  static fromLeftRecursiveProduction(leftRecursiveProduction) {
    const productionName = leftRecursiveProduction.getName(),
          productionNode = leftRecursiveProduction.getNode(),
          name = productionName,  ///
          definitions = definitionsFromLeftRecursiveProduction(leftRecursiveProduction),
          Node = productionNode,  ///
          nonLeftRecursiveProduction = new NonLeftRecursiveProduction(name, definitions, Node);
    
    return nonLeftRecursiveProduction;
  }
}

module.exports = NonLeftRecursiveProduction;

function definitionsFromLeftRecursiveProduction(leftRecursiveProduction) {
  let definitions;

  const rightRecursiveProductionNamePart = RightRecursiveProduction.productionNamePartFromLeftRecursiveProduction(leftRecursiveProduction),
        productionNonLeftRecursiveDefinitions = leftRecursiveProduction.getNonLeftRecursiveDefinitions(),
        productionNonLeftRecursiveDefinitionsLength = productionNonLeftRecursiveDefinitions.length;

  if (productionNonLeftRecursiveDefinitionsLength === 0) {
    const parts = [rightRecursiveProductionNamePart],
          definition = new Definition(parts);

    definitions = [definition];
  } else {
    definitions = productionNonLeftRecursiveDefinitions.map(function(productionNonLeftRecursiveDefinition) {
      const productionNonLeftRecursiveDefinitionParts = productionNonLeftRecursiveDefinition.getParts(),
            parts = [].concat(productionNonLeftRecursiveDefinitionParts).concat(rightRecursiveProductionNamePart),
            definition = new Definition(parts);

      return definition;
    });
  }

  return definitions;
}
