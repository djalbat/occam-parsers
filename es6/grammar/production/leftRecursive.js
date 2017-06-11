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
          rules = rulesFromImplicitlyLeftRecursiveProductionAndPreviousProductions(implicitlyLeftRecursiveProduction, previousProductions),
          Node = implicitlyLeftRecursiveProduction.getNode(),
          leftRecursiveProduction = new LeftRecursiveProduction(name, rules, Node);

    return leftRecursiveProduction;
  }
}

module.exports = LeftRecursiveProduction;

function rulesFromImplicitlyLeftRecursiveProductionAndPreviousProductions(implicitlyLeftRecursiveProduction, previousProductions) {
  let rules = [];

  const implicitlyLeftRecursiveProductionRules = implicitlyLeftRecursiveProduction.getRules();

  implicitlyLeftRecursiveProductionRules.forEach(function(implicitlyLeftRecursiveProductionRule) {
    let rule = implicitlyLeftRecursiveProductionRule; ///

    const implicitlyLeftRecursiveRule = ImplicitlyLeftRecursiveRule.fromRuleAndPreviousProductions(rule, previousProductions);

    if (implicitlyLeftRecursiveRule === null) {
      rules.push(rule);
    } else {
      const leftRecursiveRules = leftRecursiveRulesFromImplicitlyLeftRecursiveRuleAndPreviousProductions(implicitlyLeftRecursiveRule, previousProductions);

      rules = rules.concat(leftRecursiveRules);
    }
  });

  return rules;
}

function leftRecursiveRulesFromImplicitlyLeftRecursiveRuleAndPreviousProductions(implicitlyLeftRecursiveRule, previousProductions) {
  const previousProductionName = implicitlyLeftRecursiveRule.getPreviousProductionName(),
        previousProduction = parserUtil.findProduction(previousProductionName, previousProductions),
        previousProductionRules = previousProduction.getRules(),
        implicitlyLeftRecursiveRuleAllButFirstParts = implicitlyLeftRecursiveRule.getAllButFirstParts(),
        leftRecursiveRules = previousProductionRules.map(function(previousProductionRule) {
          const previousProductionRuleParts = previousProductionRule.getParts(),
                leftRecursiveRuleParts = [].concat(previousProductionRuleParts).concat(implicitlyLeftRecursiveRuleAllButFirstParts),
                leftRecursiveRule = new LeftRecursiveRule(leftRecursiveRuleParts);

          return leftRecursiveRule;
        });

  return leftRecursiveRules;
}
