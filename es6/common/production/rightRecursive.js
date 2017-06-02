'use strict';

const Rule = require('../rule'),
      Production = require('../production'),
      EpsilonPart = require('../part/epsilon'),
      NonTerminalNode = require('../node/nonTerminal'),
      ProductionNamePart = require('../part/productionName');

class RightRecursiveProduction extends Production {
  static productionNamePartFromProduction(production) {
    const name = nameFromProduction(production),
          noWhitespace = false, ///
          productionNamePart = new ProductionNamePart(name, noWhitespace);
    
    return productionNamePart;
  }
  
  static fromProduction(production) {
    const name = nameFromProduction(production),
          rules = rulesFromProduction(production),
          Node = NonTerminalNode,
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

function nameFromProduction(production) {
  const productionName = production.getName(),
        name = `${productionName}'`;

  return name;
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
