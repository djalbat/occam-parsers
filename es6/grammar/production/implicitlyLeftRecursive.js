'use strict';

const Production = require('../../common/production'),
      ImplicitlyLeftRecursiveRule = require('../rule/implicitlyLeftRecursive');

class ImplicitlyLeftRecursiveProduction extends Production {
  static fromProductionAndPreviousProductions(production, previousProductions) {
    let implicitlyLeftRecursiveProduction = null;
    
    const implicitlyLeftRecursiveRules = implicitlyLeftRecursiveRulesFromProductionAndPreviousProductions(production, previousProductions),
          implicitlyLeftRecursiveRulesLength = implicitlyLeftRecursiveRules.length,
          productionImplicitlyLeftRecursive = (implicitlyLeftRecursiveRulesLength > 0); 
    
    if (productionImplicitlyLeftRecursive) {
      implicitlyLeftRecursiveProduction = Production.fromProduction(production, ImplicitlyLeftRecursiveProduction); ///
    }

    return implicitlyLeftRecursiveProduction;
  }
}

module.exports = ImplicitlyLeftRecursiveProduction;

function implicitlyLeftRecursiveRulesFromProductionAndPreviousProductions(production, previousProductions) {
  const productionRules = production.getRules(),
        implicitlyLeftRecursiveRules = productionRules.reduce(function(implicitlyLeftRecursiveRules, productionRule) {
          const rule = productionRule,  ///
                implicitlyLeftRecursiveRule = ImplicitlyLeftRecursiveRule.fromRuleAndPreviousProductions(rule, previousProductions);
          
          if (implicitlyLeftRecursiveRule !== null) {
            implicitlyLeftRecursiveRules.push(implicitlyLeftRecursiveRule);
          }

          return implicitlyLeftRecursiveRules;
        }, []);

  return implicitlyLeftRecursiveRules;
}
