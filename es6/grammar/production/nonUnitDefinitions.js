'use strict';

const Production = require('../../bnf/production'),
      NonUnitDefinition = require('../definition/nonUnit');

class NonUnitDefinitionsProduction extends Production {
  static fromProduction(production) {
    const nonUnitDefinitions = nonUnitDefinitionsFromProduction(production),
          name = production.getName(),
          definitions = nonUnitDefinitions, ///
          Node = production.getNode(),
          nonUnitDefinitionsProduction = new NonUnitDefinitionsProduction(name, definitions, Node);

    return nonUnitDefinitionsProduction;
  }
}

module.exports = NonUnitDefinitionsProduction;

function nonUnitDefinitionsFromProduction(production) {
  const definitions = production.getDefinitions(),
        nonUnitDefinitions = definitions.reduce(function(nonUnitDefinitions, definition) {
          const nonUnitDefinition = NonUnitDefinition.fromDefinition(definition);

          if (nonUnitDefinition !== null) {
            const definition = nonUnitDefinition;

            nonUnitDefinitions.push(nonUnitDefinition);
          }

          return nonUnitDefinitions;
        }, []);

  return nonUnitDefinitions;
}
