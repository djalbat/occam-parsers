'use strict';

const Production = require('../../extendedBNF/production'),
      UnitDefinition = require('../definition/unit');

class UnitsProduction extends Production {
  getUnitDefinitionProductionNames() {
    const unitDefinitions = this.getUnitDefinitions(),
          unitDefinitionProductionNames = unitDefinitions.map(function(unitDefinition) {
            const unitDefinitionProductionName = unitDefinition.getProductionName();
            
            return unitDefinitionProductionName;
          });
    
    return unitDefinitionProductionNames;
  }
  
  getUnitDefinitions() {
    const definitions = this.getDefinitions(),
          unitDefinitions = definitions.reduce(function(unitDefinitions, definition) {
            const unitDefinition = UnitDefinition.fromDefinition(definition);

            if (unitDefinition !== null) {
              unitDefinitions.push(unitDefinition);
            }
            
            return unitDefinitions;
          }, []);
    
    return unitDefinitions;
  }
  
  forEachUnitDefinition(callback) {
    const unitDefinitions = this.getUnitDefinitions();
    
    unitDefinitions.forEach(callback);
  }
  
  static fromProduction(production) {
    let unitsProduction = null;

    const definitions = production.getDefinitions(),
          someUnitDefinition = definitions.some(function(definition) {
            const unitDefinition = UnitDefinition.fromDefinition(definition);

            if (unitDefinition !== null) {
              return true;
            }
          });

    if (someUnitDefinition) {
      unitsProduction = Production.fromProduction(production, UnitsProduction);
    }
    
    return unitsProduction;
  }
}

module.exports = UnitsProduction;
