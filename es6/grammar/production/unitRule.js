'use strict';

const UnitRule = require('../rule/unit'),
      Production = require('../../common/production') ;

class UnitRuleProduction extends Production {
  getUnitRuleProductionName() {
    const rules = this.getRules(),
          firstRule = first(rules),
          unitRule = firstRule, ///
          unitRuleProductionName = unitRule.getProductionName();
    
    return unitRuleProductionName;
  }

  isFoundByProductionNames(firstProductionName, secondProductionName) {
    const name = this.getName(),
          unitRuleProductionName = this.getUnitRuleProductionName(),
          found = ((name === firstProductionName) && (unitRuleProductionName === secondProductionName));  ///
    
    return found;
  }
  
  static fromNameAndUnitRule(name, unitRule) {
    const rules = [
            unitRule
          ],
          Node = null,
          unitRuleProduction = new UnitRuleProduction(name, rules, Node);
    
    return unitRuleProduction;          
  }
  
  static fromNameAndUnitRuleProductionName(name, unitRuleProductionName) {
    const productionName = unitRuleProductionName,  ///
          unitRule = UnitRule.fromProductionName(productionName),
          unitRuleProduction = UnitRuleProduction.fromNameAndUnitRule(name, unitRule);
    
    return unitRuleProduction;
  }
}

module.exports = UnitRuleProduction;

function first(array) { return array[0]; }
