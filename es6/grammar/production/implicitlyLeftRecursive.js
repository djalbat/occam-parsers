'use strict';

const Production = require('../../extendedBNF/production'),
      ImplicitlyLeftRecursiveDefinition = require('../definition/implicitlyLeftRecursive');

class ImplicitlyLeftRecursiveProduction extends Production {
  static fromProductionAndPreviousProductions(production, previousProductions) {
    let implicitlyLeftRecursiveProduction = null;
    
    const implicitlyLeftRecursiveDefinitions = implicitlyLeftRecursiveDefinitionsFromProductionAndPreviousProductions(production, previousProductions),
          implicitlyLeftRecursiveDefinitionsLength = implicitlyLeftRecursiveDefinitions.length,
          productionImplicitlyLeftRecursive = (implicitlyLeftRecursiveDefinitionsLength > 0); 
    
    if (productionImplicitlyLeftRecursive) {
      implicitlyLeftRecursiveProduction = Production.fromProduction(production, ImplicitlyLeftRecursiveProduction); ///
    }

    return implicitlyLeftRecursiveProduction;
  }
}

module.exports = ImplicitlyLeftRecursiveProduction;

function implicitlyLeftRecursiveDefinitionsFromProductionAndPreviousProductions(production, previousProductions) {
  const productionDefinitions = production.getDefinitions(),
        implicitlyLeftRecursiveDefinitions = productionDefinitions.reduce(function(implicitlyLeftRecursiveDefinitions, productionDefinition) {
          const definition = productionDefinition,  ///
                implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinitionAndPreviousProductions(definition, previousProductions);
          
          if (implicitlyLeftRecursiveDefinition !== null) {
            implicitlyLeftRecursiveDefinitions.push(implicitlyLeftRecursiveDefinition);
          }

          return implicitlyLeftRecursiveDefinitions;
        }, []);

  return implicitlyLeftRecursiveDefinitions;
}
