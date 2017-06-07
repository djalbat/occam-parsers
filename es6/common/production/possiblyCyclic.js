'use strict';

const Rule = require('../rule'),
      Production = require('../production');

class PossiblyCyclicProduction extends Production {
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
    let possiblyCyclicProduction = null;
    
    const rules = rulesFromProduction(production);
    
    if (rules !== null) {
      const productionName = production.getName(),
            productionNode = production.getNode(),
            name = productionName, ///
            Node = productionNode;

      possiblyCyclicProduction = new PossiblyCyclicProduction(name, rules, Node);
    }
    
    return possiblyCyclicProduction;
  }
}

module.exports = PossiblyCyclicProduction;

function rulesFromProduction(production) {
  let rules = null;
  
  const productionRules = production.getRules(),
        possiblyCyclicRules = productionRules.reduce(function(possiblyCyclicRules, productionRule) {
          const productionRuleFirstProductionNamePart = productionRule.getFirstProductionNamePart();
          
          if (productionRuleFirstProductionNamePart !== null) {
            const productionRulePartsLength = productionRule.getPartsLength();
            
            if (productionRulePartsLength === 1) {
              const possiblyCyclicPart = productionRuleFirstProductionNamePart,
                    possiblyCyclicParts = [
                      possiblyCyclicPart
                    ],
                    possiblyCyclicRule = new Rule(possiblyCyclicParts);

              possiblyCyclicRules.push(possiblyCyclicRule);
            }
          }
          
          return possiblyCyclicRules;
        }, []),
        possiblyCyclicRulesLength = possiblyCyclicRules.length;
  
  if (possiblyCyclicRulesLength > 0) {
    rules = possiblyCyclicRules;
  }

  return rules;
}

function first(array) { return array[0]; }
