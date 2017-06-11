'use strict';

const parserUtil = require('../../util/parser'),
      Production = require('../../common/production'),
      LeftRecursiveRule = require('../rule/leftRecursive'),
      ImplicitlyLeftRecursiveRule = require('../rule/implicitlyLeftRecursive');

class LeftRecursiveProduction extends Production {
  getLeftRecursiveRules() {
    const name = this.getName(),
          rules = this.getRules(),
          productionName = name,  ///
          leftRecursiveRules = rules.filter(function(rule) {
            const leftRecursiveRule = LeftRecursiveRule.fromRuleAndProductionName(rule, productionName),
                  ruleLeftRecursive = (leftRecursiveRule !== null);
  
            return ruleLeftRecursive;
          });

    return leftRecursiveRules;
  }

  getNonLeftRecursiveRules() {
    const name = this.getName(),
          rules = this.getRules(),
          productionName = name,  ///
          nonLeftRecursiveRules = rules.filter(function(rule) {
            const leftRecursiveRule = LeftRecursiveRule.fromRuleAndProductionName(rule, productionName),
                  ruleNonLeftRecursive = (leftRecursiveRule === null);
            
            return ruleNonLeftRecursive;
          });

    return nonLeftRecursiveRules;
  }

  static fromProduction(production) {
    let leftRecursiveProduction = null;
    
    const productionName = production.getName(),
          productionRules = production.getRules(),
          someProductionRuleLeftRecursive = productionRules.some(function(productionRule) {
            const rule = productionRule, ///
                  leftRecursiveRule = LeftRecursiveRule.fromRuleAndProductionName(rule, productionName),
                  productionRuleLeftRecursive = (leftRecursiveRule !== null);

            return productionRuleLeftRecursive;
          });

    if (someProductionRuleLeftRecursive) {
      leftRecursiveProduction = Production.fromProduction(production, LeftRecursiveProduction);
    }
    
    return leftRecursiveProduction;
  }
  
  static fromImplicitlyLeftRecursiveProductionAndPreviousProductions(implicitlyLeftRecursiveProduction, previousProductions) {
    const name = implicitlyLeftRecursiveProduction.getName(),
          Node = implicitlyLeftRecursiveProduction.getNode();

    let rules = implicitlyLeftRecursiveProduction.getRules();

    previousProductions.forEach(function(previousProduction) {
      const leftRecursiveRules = leftRecursiveRulesFromRulesAndPreviousProduction(rules, previousProduction);

      rules = leftRecursiveRules;
    });

    const leftRecursiveProduction = new LeftRecursiveProduction(name, rules, Node);

    return leftRecursiveProduction;
  }
}

module.exports = LeftRecursiveProduction;

function leftRecursiveRulesFromRulesAndPreviousProduction(rules, previousProduction) {
  let leftRecursiveRules = [];

  rules.forEach(function(rule) {
    const implicitlyLeftRecursiveRule = ImplicitlyLeftRecursiveRule.fromRuleAndPreviousProduction(rule, previousProduction);

    if (implicitlyLeftRecursiveRule === null) {
      const leftRecursiveRule = rule; ///

      leftRecursiveRules.push(leftRecursiveRule);
    } else {
      leftRecursiveRules = leftRecursiveRules.concat(leftRecursiveRulesFromImplicitlyLeftRecursiveRuleAndPreviousProduction(implicitlyLeftRecursiveRule, previousProduction));  ///
    }
  });

  return leftRecursiveRules;
}

function leftRecursiveRulesFromImplicitlyLeftRecursiveRuleAndPreviousProduction(implicitlyLeftRecursiveRule, previousProduction) {
  const previousProductionRules = previousProduction.getRules(),
        implicitlyLeftRecursiveRuleAllButFirstParts = implicitlyLeftRecursiveRule.getAllButFirstParts(),
        leftRecursiveRules = previousProductionRules.map(function(previousProductionRule) {
          const previousProductionRuleParts = previousProductionRule.getParts(),
                leftRecursiveRuleParts = [].concat(previousProductionRuleParts).concat(implicitlyLeftRecursiveRuleAllButFirstParts),
                leftRecursiveRule = new LeftRecursiveRule(leftRecursiveRuleParts);

          return leftRecursiveRule;
        });

  return leftRecursiveRules;
}
