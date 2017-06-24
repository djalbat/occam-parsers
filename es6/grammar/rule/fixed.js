'use strict';

const Rule = require('../../extendedBNF/rule'),
      UnitDefinition = require('../definition/unit'),
      NonUnitDefinition = require('../definition/nonUnit');

class FixedRule extends Rule {
  static fromRuleAndRuleNames(rule, ruleNames) {
    const ruleName = rule.getName(),
          ruleNode = rule.getNode(),
          name = ruleName, ///
          definitions = definitionsFromRuleAndRuleNames(rule, ruleNames),
          Node = ruleNode, ///
          fixedRule = new FixedRule(name, definitions, Node);

    return fixedRule;
  }
}

module.exports = FixedRule;

function definitionsFromRuleAndRuleNames(rule, ruleNames) {
  const ruleDefinitions = rule.getDefinitions(),
        definitions = ruleDefinitions.reduce(function(definitions, ruleDefinition) {
          let definition = null;

          const nonUnitDefinition = NonUnitDefinition.fromDefinition(ruleDefinition);

          if (nonUnitDefinition !== null) {
            definition = nonUnitDefinition; ///
          } else {
            const unitDefinition = UnitDefinition.fromDefinition(ruleDefinition),
                  unitDefinitionIncludedInRuleNames = unitDefinition.isIncludedInRuleNames(ruleNames);

            if (!unitDefinitionIncludedInRuleNames) {
              definition = unitDefinition;  ///
            }
          }

          if (definition !== null) {
            definitions.push(definition);
          }

          return definitions;
        }, []);

  return definitions;
}
