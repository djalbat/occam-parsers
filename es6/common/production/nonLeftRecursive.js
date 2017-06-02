'use strict';

const Rule = require('../rule'),
      Production = require('../production'),
      RightRecursiveProduction = require('./rightRecursive');

class NonLeftRecursiveProduction extends Production {
  static fromProduction(production) {
    const productionName = production.getName(),
          productionNode = production.getNode(),
          name = productionName,  ///
          rules = rulesFromProduction(production),
          Node = productionNode,  ///
          nonLeftRecursiveProduction = new Production(name, rules, Node);
    
    return nonLeftRecursiveProduction;
  }
}

module.exports = NonLeftRecursiveProduction;

function rulesFromProduction(production) {
  const productionNonLeftRecursiveRules = production.getNonLeftRecursiveRules(),
        rules = productionNonLeftRecursiveRules.map(function(productionNonLeftRecursiveRule) {
          const productionNonLeftRecursiveRuleParts = productionNonLeftRecursiveRule.getParts(),
              productionNamePart = RightRecursiveProduction.productionNamePartFromProduction(production),
              parts = [].concat(productionNonLeftRecursiveRuleParts).concat(productionNamePart),
              rule = new Rule(parts);
  
          return rule;
        });

  return rules;
}
