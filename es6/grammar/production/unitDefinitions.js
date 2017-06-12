'use strict';

const UnitDefinition = require('../definition/unit'),
      Production = require('../../common/production');

class UnitDefinitionsProduction extends Production {
  getProductionNames() {
    const definitions = this.getDefinitions(),
          unitDefinitions = definitions,  ///
          productionNames = unitDefinitions.map(function(unitDefinition) {
            const productionName = unitDefinition.getProductionName();
            
            return productionName;
          });
    
    return productionNames;
  }
  
  forEachUnitDefinition(callback) {
    const definitions = this.getDefinitions(),
          unitDefinitions = definitions;  ///
    
    unitDefinitions.forEach(callback);
  }
  
  static fromProduction(production) {
    let unitDefinitionsProduction = null;

    const definitions = production.getDefinitions(),
          unitDefinitions = definitions.reduce(function(unitDefinitions, definition) {
            const unitDefinition = UnitDefinition.fromDefinition(definition);

            if (unitDefinition !== null) {
              unitDefinitions = unitDefinitions.concat(unitDefinition);
            }

            return unitDefinitions;
          }, []),
          unitDefinitionsLength = unitDefinitions.length;

    if (unitDefinitionsLength > 0) {
      const name = production.getName(),
            definitions = unitDefinitions,  ///
            Node = production.getNode();

      unitDefinitionsProduction = new UnitDefinitionsProduction(name, definitions, Node);
    }
    
    return unitDefinitionsProduction;
  }
}

module.exports = UnitDefinitionsProduction;
