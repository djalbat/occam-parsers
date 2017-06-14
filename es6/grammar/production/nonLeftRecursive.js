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
  const productionNonLeftRecursiveDefinitions = leftRecursiveProduction.getNonLeftRecursiveDefinitions(),
        productionNamePart = RightRecursiveProduction.productionNamePartFromLeftRecursiveProduction(leftRecursiveProduction),
        definitions = productionNonLeftRecursiveDefinitions.map(function(productionNonLeftRecursiveDefinition) {
          const productionNonLeftRecursiveDefinitionParts = productionNonLeftRecursiveDefinition.getParts(),
                parts = [].concat(productionNonLeftRecursiveDefinitionParts).concat(productionNamePart),
                definition = new Definition(parts);
  
          return definition;
        });

  return definitions;
}
