'use strict';

const Rule = require('../../extendedBNF/rule'),
      Definition = require('../../extendedBNF/definition'),
      RightRecursiveRule = require('../rule/rightRecursive');

class NonLeftRecursiveRule extends Rule {
  static fromLeftRecursiveRule(leftRecursiveRule) {
    const ruleName = leftRecursiveRule.getName(),
          ruleNode = leftRecursiveRule.getNode(),
          name = ruleName,  ///
          definitions = definitionsFromLeftRecursiveRule(leftRecursiveRule),
          Node = ruleNode,  ///
          nonLeftRecursiveRule = new NonLeftRecursiveRule(name, definitions, Node);
    
    return nonLeftRecursiveRule;
  }
}

module.exports = NonLeftRecursiveRule;

function definitionsFromLeftRecursiveRule(leftRecursiveRule) {
  let definitions;

  const rightRecursiveRuleNamePart = RightRecursiveRule.ruleNamePartFromLeftRecursiveRule(leftRecursiveRule),
        ruleNonLeftRecursiveDefinitions = leftRecursiveRule.getNonLeftRecursiveDefinitions(),
        ruleNonLeftRecursiveDefinitionsLength = ruleNonLeftRecursiveDefinitions.length;

  if (ruleNonLeftRecursiveDefinitionsLength === 0) {
    const parts = [rightRecursiveRuleNamePart],
          definition = new Definition(parts);

    definitions = [definition];
  } else {
    definitions = ruleNonLeftRecursiveDefinitions.map(function(ruleNonLeftRecursiveDefinition) {
      const ruleNonLeftRecursiveDefinitionParts = ruleNonLeftRecursiveDefinition.getParts(),
            parts = [].concat(ruleNonLeftRecursiveDefinitionParts).concat(rightRecursiveRuleNamePart),
            definition = new Definition(parts);

      return definition;
    });
  }

  return definitions;
}
