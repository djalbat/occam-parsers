'use strict';

const Rule = require('../../bnf/rule'),
      Definition = require('../../bnf/definition'),
      EpsilonPart = require('../../bnf/part/epsilon'),
      RuleNamePart = require('../../bnf/part/ruleName'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class RightRecursiveRule extends Rule {
  static ruleNamePartFromLeftRecursiveRule(leftRecursiveRule) {
    const name = nameFromLeftRecursiveRule(leftRecursiveRule),
          noWhitespace = false, ///
          ruleNamePart = new RuleNamePart(name, noWhitespace);
    
    return ruleNamePart;
  }
  
  static fromLeftRecursiveRule(leftRecursiveRule) {
    const name = nameFromLeftRecursiveRule(leftRecursiveRule),
          definitions = definitionsFromLeftRecursiveRule(leftRecursiveRule),
          Node = NonTerminalNode, ///
          rightRecursiveRule = new RightRecursiveRule(name, definitions, Node);
    
    return rightRecursiveRule;
  }
}

module.exports = RightRecursiveRule;

function definitionsFromLeftRecursiveRule(leftRecursiveRule) {
  const rightRecursiveDefinitions = rightRecursiveDefinitionsFromLeftRecursiveRule(leftRecursiveRule),
          epsilonPart = new EpsilonPart(),
          epsilonParts = [
            epsilonPart
          ],
          epsilonPartDefinition = new Definition(epsilonParts),
          definitions = [].concat(rightRecursiveDefinitions).concat(epsilonPartDefinition);

  return definitions;
}

function rightRecursiveDefinitionsFromLeftRecursiveRule(leftRecursiveRule) {
  const ruleLeftRecursiveDefinitions = leftRecursiveRule.getLeftRecursiveDefinitions(),
        ruleNamePart = RightRecursiveRule.ruleNamePartFromLeftRecursiveRule(leftRecursiveRule),
        rightRecursiveDefinitions = ruleLeftRecursiveDefinitions.map(function(ruleLeftRecursiveDefinition) {
          const ruleLeftRecursiveDefinitionAllButFirstParts = ruleLeftRecursiveDefinition.getAllButFirstParts(),
                rightRecursiveDefinitionParts = [].concat(ruleLeftRecursiveDefinitionAllButFirstParts).concat(ruleNamePart),
                rightRecursiveDefinition = new Definition(rightRecursiveDefinitionParts);

          return rightRecursiveDefinition;
        });

  return rightRecursiveDefinitions;
}

function nameFromLeftRecursiveRule(leftRecursiveRule) {
  const leftRecursiveRuleName = leftRecursiveRule.getName(),
        name = `${leftRecursiveRuleName}~`;

  return name;
}
