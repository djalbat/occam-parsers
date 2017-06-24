'use strict';

const Definition = require('../../extendedBNF/definition');

class ImplicitlyLeftRecursiveDefinition extends Definition {
  getPreviousRuleName() {
    const firstPart = this.getFirstPart(),
          ruleNamePart = firstPart, ///
          ruleNamePartRuleName = ruleNamePart.getRuleName(),
          previousRuleName = ruleNamePartRuleName;  ///
    
    return previousRuleName;
  }
  
  static fromDefinition(definition, callback) {
    let implicitlyLeftRecursiveDefinition = null;

    const definitionFirstPartRuleNamePart = definition.isFirstPartRuleNamePart();

    if (definitionFirstPartRuleNamePart) {
      const definitionFirstPart = definition.getFirstPart(),
            definitionFirstRuleNamePart = definitionFirstPart,  ///
            definitionFirstRuleNamePartRuleName = definitionFirstRuleNamePart.getRuleName(),
            ruleName = definitionFirstRuleNamePartRuleName, ///
            definitionImplicitlyLeftRecursive = callback(ruleName);

      if (definitionImplicitlyLeftRecursive) {
        const parts = definition.getParts();

        implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(parts);
      }
    }

    return implicitlyLeftRecursiveDefinition;
  }

  static fromDefinitionAndPreviousRule(definition, previousRule) {
    const previousRuleName = previousRule.getName(),
          implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinition(definition, function(ruleName) {
            const definitionImplicitlyLeftRecursive = (previousRuleName === ruleName);
            
            return definitionImplicitlyLeftRecursive
          });
    

    return implicitlyLeftRecursiveDefinition;
  }
  
  static fromDefinitionAndPreviousRules(definition, previousRules) {
    const previousRuleNames = previousRules.map(function(previousRule) {
            const previousRuleName = previousRule.getName();
  
            return previousRuleName;
          }),
          implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinition(definition, function(ruleName) {
            const definitionImplicitlyLeftRecursive = previousRuleNames.includes(ruleName);
  
            return definitionImplicitlyLeftRecursive
          });

    return implicitlyLeftRecursiveDefinition;
  }
}

module.exports = ImplicitlyLeftRecursiveDefinition;
