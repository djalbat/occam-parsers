'use strict';

const Production = require('../../common/production'),
      LeftRecursiveRule = require('../rule/leftRecursive');

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
}

module.exports = LeftRecursiveProduction;
