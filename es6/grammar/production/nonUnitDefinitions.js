'use strict';

const Production = require('../../bnf/production'),
      NonUnitDefinition = require('../definition/nonUnit');

class NonUnitDefinitionsProduction extends Production {
  static fromProduction(production) {
    const nonUnitDefinitions = nonUnitDefinitionsFromProduction(production),
          productionName = production.getName(),
          productionNode = production.getNode(),
          name = productionName, ///
          definitions = nonUnitDefinitions, ///
          Node = productionNode, ///
          nonUnitDefinitionsProduction = new NonUnitDefinitionsProduction(name, definitions, Node);

    return nonUnitDefinitionsProduction;
  }
}

module.exports = NonUnitDefinitionsProduction;

function nonUnitDefinitionsFromProduction(production) {
  const productionDefinitions = production.getDefinitions(),
        nonUnitDefinitions = productionDefinitions.reduce(function(nonUnitDefinitions, productionDefinition) {
          const nonUnitDefinition = NonUnitDefinition.fromDefinition(productionDefinition);

          if (nonUnitDefinition !== null) {
            nonUnitDefinitions.push(nonUnitDefinition);
          }

          return nonUnitDefinitions;
        }, []);

  return nonUnitDefinitions;
}
