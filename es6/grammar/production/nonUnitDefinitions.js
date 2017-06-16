'use strict';

const Production = require('../../bnf/production'),
      NonUnitDefinition = require('../definition/nonUnit');

class NonUnitDefinitionsProduction extends Production {
  static fromUnitDefinitionsProduction(unitDefinitionsProduction) {
    const nonUnitDefinitions = nonUnitDefinitionsFromUnitDefinitionsProduction(unitDefinitionsProduction),
          unitDefinitionsProductionName = unitDefinitionsProduction.getName(),
          unitDefinitionsProductionNode = unitDefinitionsProduction.getNode(),
          name = unitDefinitionsProductionName, ///
          definitions = nonUnitDefinitions, ///
          Node = unitDefinitionsProductionNode, ///
          nonUnitDefinitionsProduction = new NonUnitDefinitionsProduction(name, definitions, Node);

    return nonUnitDefinitionsProduction;
  }
}

module.exports = NonUnitDefinitionsProduction;

function nonUnitDefinitionsFromUnitDefinitionsProduction(unitDefinitionsProduction) {
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
