'use strict';

const Rule = require('../../common/rule'),
      Production = require('../../common/production'),
      EpsilonPart = require('../../common/part/epsilon'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      ProductionNamePart = require('../../common/part/productionName');

class RightRecursiveProduction extends Production {
  static productionNamePartFromLeftRecursiveProduction(leftRecursiveProduction) {
    const name = nameFromLeftRecursiveProduction(leftRecursiveProduction),
          noWhitespace = false, ///
          productionNamePart = new ProductionNamePart(name, noWhitespace);
    
    return productionNamePart;
  }
  
  static fromLeftRecursiveProduction(leftRecursiveProduction) {
    const name = nameFromLeftRecursiveProduction(leftRecursiveProduction),
          rules = rulesFromLeftRecursiveProduction(leftRecursiveProduction),
          Node = NonTerminalNode, ///
          rightRecursiveProduction = new RightRecursiveProduction(name, rules, Node);
    
    return rightRecursiveProduction;
  }
}

module.exports = RightRecursiveProduction;

function rulesFromLeftRecursiveProduction(leftRecursiveProduction) {
  const rightRecursiveRules = rightRecursiveRulesFromLeftRecursiveProduction(leftRecursiveProduction),
          epsilonPart = new EpsilonPart(),
          epsilonParts = [
            epsilonPart
          ],
          epsilonPartRule = new Rule(epsilonParts),
          rules = [].concat(rightRecursiveRules).concat(epsilonPartRule);

  return rules;
}

function rightRecursiveRulesFromLeftRecursiveProduction(leftRecursiveProduction) {
  const productionLeftRecursiveRules = leftRecursiveProduction.getLeftRecursiveRules(),
        productionNamePart = RightRecursiveProduction.productionNamePartFromLeftRecursiveProduction(leftRecursiveProduction),
        rightRecursiveRules = productionLeftRecursiveRules.map(function(productionLeftRecursiveRule) {
          const productionLeftRecursiveRuleAllButFirstParts = productionLeftRecursiveRule.getAllButFirstParts(),
                rightRecursiveRuleParts = [].concat(productionLeftRecursiveRuleAllButFirstParts).concat(productionNamePart),
                rightRecursiveRule = new Rule(rightRecursiveRuleParts);

          return rightRecursiveRule;
        });

  return rightRecursiveRules;
}

function nameFromLeftRecursiveProduction(leftRecursiveProduction) {
  const leftRecursiveProductionName = leftRecursiveProduction.getName(),
        name = `${leftRecursiveProductionName}~`;

  return name;
}
