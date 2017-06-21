'use strict';

const Production = require('../../extendedBNF/production'),
      LeftRecursiveDefinition = require('../definition/leftRecursive'),
      ImplicitlyLeftRecursiveDefinition = require('../definition/implicitlyLeftRecursive');

class LeftRecursiveProduction extends Production {
  getLeftRecursiveDefinitions() {
    const name = this.getName(),
          definitions = this.getDefinitions(),
          productionName = name,  ///
          leftRecursiveDefinitions = definitions.filter(function(definition) {
            const leftRecursiveDefinition = LeftRecursiveDefinition.fromDefinitionAndProductionName(definition, productionName),
                  definitionLeftRecursive = (leftRecursiveDefinition !== null);
  
            return definitionLeftRecursive;
          });

    return leftRecursiveDefinitions;
  }

  getNonLeftRecursiveDefinitions() {
    const name = this.getName(),
          definitions = this.getDefinitions(),
          productionName = name,  ///
          nonLeftRecursiveDefinitions = definitions.filter(function(definition) {
            const leftRecursiveDefinition = LeftRecursiveDefinition.fromDefinitionAndProductionName(definition, productionName),
                  definitionNonLeftRecursive = (leftRecursiveDefinition === null);
            
            return definitionNonLeftRecursive;
          });

    return nonLeftRecursiveDefinitions;
  }

  static fromProduction(production) {
    let leftRecursiveProduction = null;
    
    const productionName = production.getName(),
          productionDefinitions = production.getDefinitions(),
          someProductionDefinitionLeftRecursive = productionDefinitions.some(function(productionDefinition) {
            const definition = productionDefinition, ///
                  leftRecursiveDefinition = LeftRecursiveDefinition.fromDefinitionAndProductionName(definition, productionName),
                  productionDefinitionLeftRecursive = (leftRecursiveDefinition !== null);

            return productionDefinitionLeftRecursive;
          });

    if (someProductionDefinitionLeftRecursive) {
      leftRecursiveProduction = Production.fromProduction(production, LeftRecursiveProduction);
    }
    
    return leftRecursiveProduction;
  }
  
  static fromImplicitlyLeftRecursiveProductionAndPreviousProductions(implicitlyLeftRecursiveProduction, previousProductions) {
    const name = implicitlyLeftRecursiveProduction.getName(),
          Node = implicitlyLeftRecursiveProduction.getNode();

    let definitions = implicitlyLeftRecursiveProduction.getDefinitions();

    previousProductions.forEach(function(previousProduction) {
      const leftRecursiveDefinitions = leftRecursiveDefinitionsFromDefinitionsAndPreviousProduction(definitions, previousProduction);

      definitions = leftRecursiveDefinitions;
    });

    const leftRecursiveProduction = new LeftRecursiveProduction(name, definitions, Node);

    return leftRecursiveProduction;
  }
}

module.exports = LeftRecursiveProduction;

function leftRecursiveDefinitionsFromDefinitionsAndPreviousProduction(definitions, previousProduction) {
  let leftRecursiveDefinitions = [];

  definitions.forEach(function(definition) {
    const implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinitionAndPreviousProduction(definition, previousProduction);

    if (implicitlyLeftRecursiveDefinition === null) {
      const leftRecursiveDefinition = definition; ///

      leftRecursiveDefinitions.push(leftRecursiveDefinition);
    } else {
      leftRecursiveDefinitions = leftRecursiveDefinitions.concat(leftRecursiveDefinitionsFromImplicitlyLeftRecursiveDefinitionAndPreviousProduction(implicitlyLeftRecursiveDefinition, previousProduction));  ///
    }
  });

  return leftRecursiveDefinitions;
}

function leftRecursiveDefinitionsFromImplicitlyLeftRecursiveDefinitionAndPreviousProduction(implicitlyLeftRecursiveDefinition, previousProduction) {
  const previousProductionDefinitions = previousProduction.getDefinitions(),
        implicitlyLeftRecursiveDefinitionAllButFirstParts = implicitlyLeftRecursiveDefinition.getAllButFirstParts(),
        leftRecursiveDefinitions = previousProductionDefinitions.map(function(previousProductionDefinition) {
          const previousProductionDefinitionParts = previousProductionDefinition.getParts(),
                leftRecursiveDefinitionParts = [].concat(previousProductionDefinitionParts).concat(implicitlyLeftRecursiveDefinitionAllButFirstParts),
                leftRecursiveDefinition = new LeftRecursiveDefinition(leftRecursiveDefinitionParts);

          return leftRecursiveDefinition;
        });

  return leftRecursiveDefinitions;
}
