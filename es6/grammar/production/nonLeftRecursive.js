'use strict';

const Rule = require('../../common/rule'),
      Production = require('../../common/production'),
      RightRecursiveProduction = require('../production/rightRecursive');

class NonLeftRecursiveProduction extends Production {
  static fromLeftRecursiveProduction(leftRecursiveProduction) {
    const productionName = leftRecursiveProduction.getName(),
          productionNode = leftRecursiveProduction.getNode(),
          name = productionName,  ///
          rules = rulesFromLeftRecursiveProduction(leftRecursiveProduction),
          Node = productionNode,  ///
          nonLeftRecursiveProduction = new NonLeftRecursiveProduction(name, rules, Node);
    
    return nonLeftRecursiveProduction;
  }
}

module.exports = NonLeftRecursiveProduction;

function rulesFromLeftRecursiveProduction(leftRecursiveProduction) {
  const productionNonLeftRecursiveRules = leftRecursiveProduction.getNonLeftRecursiveRules(),
        productionNamePart = RightRecursiveProduction.productionNamePartFromLeftRecursiveProduction(leftRecursiveProduction),
        rules = productionNonLeftRecursiveRules.map(function(productionNonLeftRecursiveRule) {
          const productionNonLeftRecursiveRuleParts = productionNonLeftRecursiveRule.getParts(),
                parts = [].concat(productionNonLeftRecursiveRuleParts).concat(productionNamePart),
                rule = new Rule(parts);
  
          return rule;
        });

  return rules;
}
