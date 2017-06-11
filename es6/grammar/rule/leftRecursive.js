'use strict';

const Rule = require('../../common/rule'),
      ProductionNamePart = require('../../common/part/productionName');

class LeftRecursiveRule extends Rule {
  static fromRuleAndProductionName(rule, productionName) {
    let leftRecursiveRule = null;
    
    const ruleFirstPart = rule.getFirstPart();
    
    if (ruleFirstPart instanceof ProductionNamePart) {
      const ruleFirstProductionNamePart = ruleFirstPart,  ///
            ruleFirstProductionNamePartProductionName = ruleFirstProductionNamePart.getProductionName();
      
      if (ruleFirstProductionNamePartProductionName === productionName) {
        const parts = rule.getParts();

        leftRecursiveRule = new Rule(parts);
      }
    }

    return leftRecursiveRule;
  }
}

module.exports = LeftRecursiveRule;
