'use strict';

const Rule = require('../rule'),
      Production = require('../production');

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
            const productionRulePartsLength = productionRule.getPartsLength();
            
            if (productionRulePartsLength === 1) {
              const cyclicPart = productionRuleFirstProductionNamePart,
                    cyclicParts = [
                      cyclicPart
                    ],
                    cyclicRule = new Rule(cyclicParts);

              cyclicRules.push(cyclicRule);
            }
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
