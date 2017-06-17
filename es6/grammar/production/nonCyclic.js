'use strict';

const Production = require('../../bnf/production'),
      UnitDefinition = require('../definition/unit'),
      NonUnitDefinition = require('../definition/nonUnit');

class NonCyclicProduction extends Production {
  static fromProduction(production) {
    const nonCyclicDefinitions = nonCyclicDefinitionsFromProduction(production),
          productionName = production.getName(),
          productionNode = production.getNode(),
          name = productionName, ///
          definitions = nonCyclicDefinitions, ///
          Node = productionNode, ///
          nonCyclicProduction = new NonCyclicProduction(name, definitions, Node);

    return nonCyclicProduction;
  }
}

module.exports = NonCyclicProduction;

function nonCyclicDefinitionsFromProduction(production) {
  const productionName = production.getName(),
        productionDefinitions = production.getDefinitions(),
        nonCyclicDefinitions = productionDefinitions.reduce(function(nonCyclicDefinitions, productionDefinition) {
          let nonCyclicDefinition = null;
          
          const nonUnitDefinition = NonUnitDefinition.fromDefinition(productionDefinition);

          if (nonUnitDefinition !== null) {
            nonCyclicDefinition = nonUnitDefinition;
          } else {
            const unitDefinition = UnitDefinition.fromDefinition(productionDefinition),
                  unitDefinitionProductionName = unitDefinition.getProductionName();
            
            if (unitDefinitionProductionName !== productionName) {
              nonCyclicDefinition = unitDefinition;
            }            
          }

          if (nonCyclicDefinition !== null) {
            nonCyclicDefinitions.push(nonCyclicDefinition);
          }
          
          return nonCyclicDefinitions;
        }, []);

  return nonCyclicDefinitions;
}
