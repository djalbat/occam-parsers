'use strict';

const Rule = require('../rule'),
      Production = require('../production'),
      UnitProduction = require('../production/unit');

class CyclicProduction extends Production {
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
  
  getUnitProductionPartProductionNames() {
    const rules = this.getRules(),
          unitProductionPartProductionNames = rules.reduce(function(unitProductionPartProductionNames, rule) {
            const rulePartsLength = rule.getPartsLength();
            
            if (rulePartsLength === 1) {
              const ruleFirstProductionNamePart = rule.getFirstProductionNamePart(),
                    ruleFirstProductionNamePartProductionName = ruleFirstProductionNamePart.getProductionName(),
                    unitProductionPartProductionName = ruleFirstProductionNamePartProductionName; ///

              unitProductionPartProductionNames = unitProductionPartProductionNames.concat(unitProductionPartProductionName);
            }
            
            return unitProductionPartProductionNames;
          }, []);
    
    return unitProductionPartProductionNames;
  }
  
  getUnitProductions() {
    const name = this.getName(),
          unitProductionsName = name, ///
          unitProductionPartProductionNames = this.getUnitProductionPartProductionNames(),
          unitProductions = unitProductionPartProductionNames.map(function(unitProductionPartProductionName) {
            const name = unitProductionsName, ///
                  partProductionName = unitProductionPartProductionName,  ///
                  unitProduction = UnitProduction.fromNameAndPartProductionName(name, partProductionName);
  
            return unitProduction;
          });
    
    return unitProductions;
  }
  
  static fromProduction(production) {
    let cyclicProduction = null;
    
    const rules = rulesFromProduction(production);
    
    if (rules !== null) {
      const productionName = production.getName(),
            productionNode = production.getNode(),
            name = productionName, ///
            Node = productionNode;

      cyclicProduction = new CyclicProduction(name, rules, Node);
    }
    
    return cyclicProduction;
  }
}

module.exports = CyclicProduction;

function rulesFromProduction(production) {
  let rules = null;
  
  const productionRules = production.getRules(),
        cyclicRules = productionRules.reduce(function(cyclicRules, productionRule) {
          const productionRuleFirstProductionNamePart = productionRule.getFirstProductionNamePart();
          
          if (productionRuleFirstProductionNamePart !== null) {
            const cyclicPart = productionRuleFirstProductionNamePart,
                  cyclicParts = [
                    cyclicPart
                  ],
                  cyclicRule = new Rule(cyclicParts);

            cyclicRules.push(cyclicRule);
          }
          
          return cyclicRules;
        }, []),
        cyclicRulesLength = cyclicRules.length;
  
  if (cyclicRulesLength > 0) {
    rules = cyclicRules;
  }

  return rules;
}

function first(array) { return array[0]; }
