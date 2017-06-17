'use strict';

const arrayUtil = require('../../util/array'),
      Production = require('../../bnf/production'),
      UnitDefinition = require('../definition/unit');

class UnitDefinitionProduction extends Production {
  getUnitDefinitionProductionName() {
    const definitions = this.getDefinitions(),
          firstDefinition = arrayUtil.first(definitions),
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
          Node = null,  ///
          unitDefinitionProduction = new UnitDefinitionProduction(name, definitions, Node);
    
    return unitDefinitionProduction;          
  }
  
  static fromNameAndProductionName(name, productionName) {
    const unitDefinition = UnitDefinition.fromProductionName(productionName),
          unitDefinitionProduction = UnitDefinitionProduction.fromNameAndUnitDefinition(name, unitDefinition);
    
    return unitDefinitionProduction;
  }
  
  static fromProductionNames(firstProductionName, secondProductionName) {
    const name = firstProductionName,  ///
          productionName = secondProductionName,  ///
          unitDefinitionProduction = UnitDefinitionProduction.fromNameAndProductionName(name, productionName);

    return unitDefinitionProduction;
  }
}

module.exports = UnitDefinitionProduction;
