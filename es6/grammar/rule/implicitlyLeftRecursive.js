'use strict';

const Rule = require('../../common/rule'),
      ProductionNamePart = require('../../common/part/productionName');

class ImplicitlyLeftRecursiveRule extends Rule {
  getPreviousProductionName() {
    const firstPart = this.getFirstPart(),
          productionNamePart = firstPart, ///
          productionNamePartProductionName = productionNamePart.getProductionName(),
          previousProductionName = productionNamePartProductionName;  ///
    
    return previousProductionName;
  }
  
  static fromRuleAndPreviousProductions(rule, previousProductions) {
    let implicitlyLeftRecursiveRule = null;
    
    const previousProductionNames = previousProductions.map(function(previousProduction) {
            const previousProductionName = previousProduction.getName();

            return previousProductionName;
          }),
          ruleFirstPart = rule.getFirstPart();
    
    if (ruleFirstPart instanceof ProductionNamePart) {
      const ruleFirstProductionNamePart = ruleFirstPart,  ///
            ruleFirstProductionNamePartProductionName = ruleFirstProductionNamePart.getProductionName(),
            ruleImplicitlyLeftRecursive = previousProductionNames.includes(ruleFirstProductionNamePartProductionName);
      
      if (ruleImplicitlyLeftRecursive) {
        const parts = rule.getParts();

        implicitlyLeftRecursiveRule = new ImplicitlyLeftRecursiveRule(parts);
      }
    }

    return implicitlyLeftRecursiveRule;
  }
}

module.exports = ImplicitlyLeftRecursiveRule;
