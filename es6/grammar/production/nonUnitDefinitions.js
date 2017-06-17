'use strict';

const Production = require('../../bnf/production'),
      NonUnitDefinition = require('../definition/nonUnit');

class NonUnitDefinitionsProduction extends Production {
  static fromProduction(production) {
    const nonUnitDefinitions = nonUnitDefinitionsFromProduction(production),
          unitDefinitionsProductionName = production.getName(),
          unitDefinitionsProductionNode = production.getNode(),
          name = unitDefinitionsProductionName, ///
          definitions = nonUnitDefinitions, ///
          Node = unitDefinitionsProductionNode, ///
          nonUnitDefinitionsProduction = new NonUnitDefinitionsProduction(name, definitions, Node);

    return nonUnitDefinitionsProduction;
  }
}

module.exports = NonUnitDefinitionsProduction;

function nonUnitDefinitionsFromProduction(unitDefinitionsProduction) {
  const definitions = unitDefinitionsProduction.getDefinitions(),
        nonUnitDefinitions = definitions.reduce(function(nonUnitDefinitions, definition) {
          const nonUnitDefinition = NonUnitDefinition.fromDefinition(definition);

          if (nonUnitDefinition !== null) {
            nonUnitDefinitions.push(nonUnitDefinition);
          }

          return nonUnitDefinitions;
        }, []);

  return nonUnitDefinitions;
}
