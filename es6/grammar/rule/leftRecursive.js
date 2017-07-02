'use strict';

const Rule = require('../../bnf/rule'),
      LeftRecursiveDefinition = require('../definition/leftRecursive'),
      ImplicitlyLeftRecursiveDefinition = require('../definition/implicitlyLeftRecursive');

class LeftRecursiveRule extends Rule {
  getLeftRecursiveDefinitions() {
    const name = this.getName(),
          definitions = this.getDefinitions(),
          ruleName = name,  ///
          leftRecursiveDefinitions = definitions.filter(function(definition) {
            const leftRecursiveDefinition = LeftRecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName),
                  definitionLeftRecursive = (leftRecursiveDefinition !== null);
  
            return definitionLeftRecursive;
          });

    return leftRecursiveDefinitions;
  }

  getNonLeftRecursiveDefinitions() {
    const name = this.getName(),
          definitions = this.getDefinitions(),
          ruleName = name,  ///
          nonLeftRecursiveDefinitions = definitions.filter(function(definition) {
            const leftRecursiveDefinition = LeftRecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName),
                  definitionNonLeftRecursive = (leftRecursiveDefinition === null);
            
            return definitionNonLeftRecursive;
          });

    return nonLeftRecursiveDefinitions;
  }

  static fromRule(rule) {
    let leftRecursiveRule = null;
    
    const ruleName = rule.getName(),
          ruleDefinitions = rule.getDefinitions(),
          someRuleDefinitionLeftRecursive = ruleDefinitions.some(function(ruleDefinition) {
            const definition = ruleDefinition, ///
                  leftRecursiveDefinition = LeftRecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName),
                  ruleDefinitionLeftRecursive = (leftRecursiveDefinition !== null);

            return ruleDefinitionLeftRecursive;
          });

    if (someRuleDefinitionLeftRecursive) {
      leftRecursiveRule = Rule.fromRule(rule, LeftRecursiveRule);
    }
    
    return leftRecursiveRule;
  }
  
  static fromImplicitlyLeftRecursiveRuleAndPreviousRules(implicitlyLeftRecursiveRule, previousRules) {
    const name = implicitlyLeftRecursiveRule.getName(),
          Node = implicitlyLeftRecursiveRule.getNode();

    let definitions = implicitlyLeftRecursiveRule.getDefinitions();

    previousRules.forEach(function(previousRule) {
      const leftRecursiveDefinitions = leftRecursiveDefinitionsFromDefinitionsAndPreviousRule(definitions, previousRule);

      definitions = leftRecursiveDefinitions;
    });

    const leftRecursiveRule = new LeftRecursiveRule(name, definitions, Node);

    return leftRecursiveRule;
  }
}

module.exports = LeftRecursiveRule;

function leftRecursiveDefinitionsFromDefinitionsAndPreviousRule(definitions, previousRule) {
  let leftRecursiveDefinitions = [];

  definitions.forEach(function(definition) {
    const implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinitionAndPreviousRule(definition, previousRule);

    if (implicitlyLeftRecursiveDefinition === null) {
      const leftRecursiveDefinition = definition; ///

      leftRecursiveDefinitions.push(leftRecursiveDefinition);
    } else {
      leftRecursiveDefinitions = leftRecursiveDefinitions.concat(leftRecursiveDefinitionsFromImplicitlyLeftRecursiveDefinitionAndPreviousRule(implicitlyLeftRecursiveDefinition, previousRule));  ///
    }
  });

  return leftRecursiveDefinitions;
}

function leftRecursiveDefinitionsFromImplicitlyLeftRecursiveDefinitionAndPreviousRule(implicitlyLeftRecursiveDefinition, previousRule) {
  const previousRuleDefinitions = previousRule.getDefinitions(),
        implicitlyLeftRecursiveDefinitionAllButFirstParts = implicitlyLeftRecursiveDefinition.getAllButFirstParts(),
        leftRecursiveDefinitions = previousRuleDefinitions.map(function(previousRuleDefinition) {
          const previousRuleDefinitionParts = previousRuleDefinition.getParts(),
                leftRecursiveDefinitionParts = [].concat(previousRuleDefinitionParts).concat(implicitlyLeftRecursiveDefinitionAllButFirstParts),
                leftRecursiveDefinition = new LeftRecursiveDefinition(leftRecursiveDefinitionParts);

          return leftRecursiveDefinition;
        });

  return leftRecursiveDefinitions;
}
