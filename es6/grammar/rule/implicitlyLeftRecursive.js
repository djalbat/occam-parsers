'use strict';

const Rule = require('../../extendedBNF/rule'),
      ImplicitlyLeftRecursiveDefinition = require('../definition/implicitlyLeftRecursive');

class ImplicitlyLeftRecursiveRule extends Rule {
  static fromRuleAndPreviousRules(rule, previousRules) {
    let implicitlyLeftRecursiveRule = null;
    
    const implicitlyLeftRecursiveDefinitions = implicitlyLeftRecursiveDefinitionsFromRuleAndPreviousRules(rule, previousRules),
          implicitlyLeftRecursiveDefinitionsLength = implicitlyLeftRecursiveDefinitions.length,
          ruleImplicitlyLeftRecursive = (implicitlyLeftRecursiveDefinitionsLength > 0); 
    
    if (ruleImplicitlyLeftRecursive) {
      implicitlyLeftRecursiveRule = Rule.fromRule(rule, ImplicitlyLeftRecursiveRule); ///
    }

    return implicitlyLeftRecursiveRule;
  }
}

module.exports = ImplicitlyLeftRecursiveRule;

function implicitlyLeftRecursiveDefinitionsFromRuleAndPreviousRules(rule, previousRules) {
  const ruleDefinitions = rule.getDefinitions(),
        implicitlyLeftRecursiveDefinitions = ruleDefinitions.reduce(function(implicitlyLeftRecursiveDefinitions, ruleDefinition) {
          const definition = ruleDefinition,  ///
                implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinitionAndPreviousRules(definition, previousRules);
          
          if (implicitlyLeftRecursiveDefinition !== null) {
            implicitlyLeftRecursiveDefinitions.push(implicitlyLeftRecursiveDefinition);
          }

          return implicitlyLeftRecursiveDefinitions;
        }, []);

  return implicitlyLeftRecursiveDefinitions;
}
