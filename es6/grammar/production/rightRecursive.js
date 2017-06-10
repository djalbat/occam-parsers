'use strict';

const Rule = require('../../common/rule'),
      Production = require('../../common/production'),
      EpsilonPart = require('../../common/part/epsilon'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      ProductionNamePart = require('../../common/part/productionName');

class RightRecursiveProduction extends Production {
  static productionNamePartFromProduction(production) {
    const productionName = production.getName(),
          name = productionName, ///
          noWhitespace = false, ///
          productionNamePart = new ProductionNamePart(name, noWhitespace);
    
    return productionNamePart;
  }
  
  static fromProduction(production) {
    const productionName = production.getName(),
          name = productionName, ///
          rules = rulesFromProduction(production),
          Node = NonTerminalNode, ///
          rightRecursiveProduction = new Production(name, rules, Node);
    
    return rightRecursiveProduction;
  }
}

module.exports = RightRecursiveProduction;

function rulesFromProduction(production) {
  const rightRecursiveRules = rightRecursiveRulesFromProduction(production),
        epsilonPart = new EpsilonPart(),
        epsilonParts = [
          epsilonPart
        ],
        epsilonPartRule = new Rule(epsilonParts),
        rules = [].concat(rightRecursiveRules).concat(epsilonPartRule);

  return rules;
}

function rightRecursiveRulesFromProduction(production) {
  const productionLeftRecursiveRules = production.getLeftRecursiveRules(),
        rightRecursiveRules = productionLeftRecursiveRules.map(function(productionLeftRecursiveRule) {
          const productionLeftRecursiveRuleAllButFirstParts = productionLeftRecursiveRule.getAllButFirstParts(),
                productionNamePart = RightRecursiveProduction.productionNamePartFromProduction(production),
                rightRecursiveRuleParts = [].concat(productionLeftRecursiveRuleAllButFirstParts).concat(productionNamePart),
                rightRecursiveRule = new Rule(rightRecursiveRuleParts);

          return rightRecursiveRule;
        });

  return rightRecursiveRules;
}
