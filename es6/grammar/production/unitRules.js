'use strict';

const UnitRule = require('../rule/unit'),
      Production = require('../../common/production');

class UnitRulesProduction extends Production {
  getProductionNames() {
    const rules = this.getRules(),
          unitRules = rules,  ///
          productionNames = unitRules.map(function(unitRule) {
            const productionName = unitRule.getProductionName();
            
            return productionName;
          });
    
    return productionNames;
  }
  
  mapUnitRules(callback) {
    const rules = this.getRules(),
          unitRules = rules,  ///
          result = unitRules.map(callback);
    
    return result;
  }
  
  static fromProduction(production) {
    let unitRulesProduction = null;

    const rules = production.getRules(),
          unitRules = rules.reduce(function(unitRules, rule) {
            const unitRule = UnitRule.fromRule(rule);

            if (unitRule !== null) {
              unitRules = unitRules.concat(unitRule);
            }

            return unitRules;
          }, []),
          unitRulesLength = unitRules.length;

    if (unitRulesLength > 0) {
      const name = production.getName(),
            rules = unitRules,  ///
            Node = production.getNode();

      unitRulesProduction = new UnitRulesProduction(name, rules, Node);
    }
    
    return unitRulesProduction;
  }
}

module.exports = UnitRulesProduction;
