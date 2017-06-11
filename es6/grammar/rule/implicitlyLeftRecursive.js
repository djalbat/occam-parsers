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
  
  static fromRule(rule, callback) {
    let implicitlyLeftRecursiveRule = null;

    const ruleFirstPart = rule.getFirstPart();

    if (ruleFirstPart instanceof ProductionNamePart) {
      const ruleFirstProductionNamePart = ruleFirstPart,  ///
            ruleFirstProductionNamePartProductionName = ruleFirstProductionNamePart.getProductionName(),
            productionName = ruleFirstProductionNamePartProductionName, ///
            ruleImplicitlyLeftRecursive = callback(productionName);

      if (ruleImplicitlyLeftRecursive) {
        const parts = rule.getParts();

        implicitlyLeftRecursiveRule = new ImplicitlyLeftRecursiveRule(parts);
      }
    }

    return implicitlyLeftRecursiveRule;
  }

  static fromRuleAndPreviousProduction(rule, previousProduction) {
    const previousProductionName = previousProduction.getName(),
          implicitlyLeftRecursiveRule = ImplicitlyLeftRecursiveRule.fromRule(rule, function(productionName) {
            const ruleImplicitlyLeftRecursive = (previousProductionName === productionName);
            
            return ruleImplicitlyLeftRecursive
          });
    

    return implicitlyLeftRecursiveRule;
  }
  
  static fromRuleAndPreviousProductions(rule, previousProductions) {
    const previousProductionNames = previousProductions.map(function(previousProduction) {
            const previousProductionName = previousProduction.getName();
  
            return previousProductionName;
          }),
          implicitlyLeftRecursiveRule = ImplicitlyLeftRecursiveRule.fromRule(rule, function(productionName) {
            const ruleImplicitlyLeftRecursive = previousProductionNames.includes(productionName);
  
            return ruleImplicitlyLeftRecursive
          });

    return implicitlyLeftRecursiveRule;
  }
}

module.exports = ImplicitlyLeftRecursiveRule;
