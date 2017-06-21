'use strict';

const arrayUtil = require('../../util/array'),
      Production = require('../../extendedBNF/production'),
      UnitDefinition = require('../definition/unit');

class UnitProduction extends Production {
  getUnitProductionName() {
    const definitions = this.getDefinitions(),
          firstDefinition = arrayUtil.first(definitions),
          unitDefinition = firstDefinition, ///
          unitProductionName = unitDefinition.getProductionName();
    
    return unitProductionName;
  }
  
  isNotCyclic() {
    const name = this.getName(),
          unitProductionName = this.getUnitProductionName(),
          notCyclic = (name !== unitProductionName);
    
    return notCyclic;    
  }

  isFoundByProductionNames(firstProductionName, secondProductionName) {
    const name = this.getName(),
          unitProductionName = this.getUnitProductionName(),
          found = ((name === firstProductionName) && (unitProductionName === secondProductionName));  ///
    
    return found;
  }

  isIncludedInProductionNames(productionNames) {
    const name = this.getName(),
          unitProductionName = this.getUnitProductionName(),
          productionNamesContainsName = productionNames.includes(name),
          productionNamesContainsUnitProductionName = productionNames.includes(unitProductionName),
          includedInProductionNames = (productionNamesContainsName && productionNamesContainsUnitProductionName);

    return includedInProductionNames;
  }
  
  static fromNameAndUnitDefinition(name, unitDefinition) {
    const definitions = [
            unitDefinition
          ],
          Node = null,  ///
          unitProduction = new UnitProduction(name, definitions, Node);
    
    return unitProduction;          
  }
  
  static fromNameAndProductionName(name, productionName) {
    const unitDefinition = UnitDefinition.fromProductionName(productionName),
          unitProduction = UnitProduction.fromNameAndUnitDefinition(name, unitDefinition);
    
    return unitProduction;
  }
  
  static fromProductionNames(firstProductionName, secondProductionName) {
    const name = firstProductionName,  ///
          productionName = secondProductionName,  ///
          unitProduction = UnitProduction.fromNameAndProductionName(name, productionName);

    return unitProduction;
  }
}

module.exports = UnitProduction;
