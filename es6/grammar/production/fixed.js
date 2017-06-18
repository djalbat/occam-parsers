'use strict';

const Production = require('../../bnf/production'),
      UnitDefinition = require('../definition/unit'),
      NonUnitDefinition = require('../definition/nonUnit');

class FixedProduction extends Production {
  static fromProductionAndProductionNames(production, productionNames) {
    const productionName = production.getName(),
          productionNode = production.getNode(),
          name = productionName, ///
          definitions = definitionsFromProductionAndProductionNames(production, productionNames),
          Node = productionNode, ///
          fixedProduction = new FixedProduction(name, definitions, Node);

    return fixedProduction;
  }
}

module.exports = FixedProduction;

function definitionsFromProductionAndProductionNames(production, productionNames) {
  const productionDefinitions = production.getDefinitions(),
        definitions = productionDefinitions.reduce(function(definitions, productionDefinition) {
          let definition = null;

          const nonUnitDefinition = NonUnitDefinition.fromDefinition(productionDefinition);

          if (nonUnitDefinition !== null) {
            definition = nonUnitDefinition; ///
          } else {
            const unitDefinition = UnitDefinition.fromDefinition(productionDefinition),
                  unitDefinitionIncludedInProductionNames = unitDefinition.isIncludedInProductionNames(productionNames);

            if (!unitDefinitionIncludedInProductionNames) {
              definition = unitDefinition;  ///
            }
          }

          if (definition !== null) {
            definitions.push(definition);
          }

          return definitions;
        }, []);

  return definitions;
}
