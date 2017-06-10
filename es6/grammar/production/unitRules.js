'use strict';

const UnitRule = require('../rule/unit'),
      Production = require('../../common/production'),
      UnitRuleProduction = require('../production/unitRule');

class UnitRulesProduction extends Production {
  getRulesProductionNames() {
    const rules = this.getRules(),
          rulesProductionNames = rules.map(function(rule) {
            const ruleParts = rule.getParts(),
                  ruleFirstPart = first(ruleParts),
                  ruleFirstProductionNamePart = ruleFirstPart,  ///
                  ruleFirstProductionNamePartProductionName = ruleFirstProductionNamePart.getProductionName(),
                  ruleProductionName = ruleFirstProductionNamePartProductionName; ///
            
            return ruleProductionName;
          });
    
    return rulesProductionNames;
  }
  
  getUnitRules() {
    const rules = this.getRules(),
          unitRules = rules.reduce(function(unitRules, rule) {
            const unitRule = UnitRule.fromRule(rule);
            
            if (unitRule !== null) {
              unitRules = unitRules.concat(unitRule);
            }
            
            return unitRules;
          }, []);
    
    return unitRules;
  }
  
  getUnitRuleProductions() {
    const name = this.getName(),
          unitRules = this.getUnitRules(),
          unitRulesProductions = unitRules.map(function(unitRule) {
            const unitRulesProduction = UnitRuleProduction.fromNameAndUnitRule(name, unitRule);
            
            return unitRulesProduction;
          }); 
    
    return unitRulesProductions;
  }
  
  static fromProduction(production) {
    let unitRulesProduction = null;

    const productionRules = production.getRules(),
          unitRules = productionRules.reduce(function(unitRules, productionRule) {
            const unitRule = UnitRule.fromRule(productionRule);

            if (unitRule !== null) {
              unitRules = unitRules.concat(unitRule);
            }

            return unitRules;
          }, []),
          unitRulesLength = unitRules.length;

    if (unitRulesLength) {
      const productionName = production.getName(),
            productionNode = production.getNode(),
            name = productionName, ///
            rules = unitRules,  ///
            Node = productionNode;

      unitRulesProduction = new UnitRulesProduction(name, rules, Node);
    }
    
    return unitRulesProduction;
  }
}

module.exports = UnitRulesProduction;

function first(array) { return array[0]; }
