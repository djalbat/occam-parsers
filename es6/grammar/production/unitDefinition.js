'use strict';

const Production = require('../../bnf/production'),
      UnitDefinition = require('../definition/unit');

class UnitDefinitionProduction extends Production {
  getUnitDefinitionProductionName() {
    const definitions = this.getDefinitions(),
          firstDefinition = first(definitions),
          unitDefinition = firstDefinition, ///
          unitDefinitionProductionName = unitDefinition.getProductionName();
    
    return unitDefinitionProductionName;
  }

  isFoundByProductionNames(firstProductionName, secondProductionName) {
    const name = this.getName(),
          unitDefinitionProductionName = this.getUnitDefinitionProductionName(),
          found = ((name === firstProductionName) && (unitDefinitionProductionName === secondProductionName));  ///
    
    return found;
  }
  
  static fromNameAndUnitDefinition(name, unitDefinition) {
    const definitions = [
            unitDefinition
          ],
          Node = null,
          unitDefinitionProduction = new UnitDefinitionProduction(name, definitions, Node);
    
    return unitDefinitionProduction;          
  }
  
  static fromNameAndUnitDefinitionProductionName(name, unitDefinitionProductionName) {
    const productionName = unitDefinitionProductionName,  ///
          unitDefinition = UnitDefinition.fromProductionName(productionName),
          unitDefinitionProduction = UnitDefinitionProduction.fromNameAndUnitDefinition(name, unitDefinition);
    
    return unitDefinitionProduction;
  }
}

module.exports = UnitDefinitionProduction;

function first(array) { return array[0]; }