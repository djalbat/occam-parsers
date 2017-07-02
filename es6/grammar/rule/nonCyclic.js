'use strict';

const Rule = require('../../bnf/rule'),
      UnitDefinition = require('../definition/unit'),
      NonUnitDefinition = require('../definition/nonUnit');

class NonCyclicRule extends Rule {
  static fromRule(rule) {
    const nonCyclicDefinitions = nonCyclicDefinitionsFromRule(rule),
          ruleName = rule.getName(),
          ruleNode = rule.getNode(),
          name = ruleName, ///
          definitions = nonCyclicDefinitions, ///
          Node = ruleNode, ///
          nonCyclicRule = new NonCyclicRule(name, definitions, Node);

    return nonCyclicRule;
  }
}

module.exports = NonCyclicRule;

function nonCyclicDefinitionsFromRule(rule) {
  const ruleName = rule.getName(),
        ruleDefinitions = rule.getDefinitions(),
        nonCyclicDefinitions = ruleDefinitions.reduce(function(nonCyclicDefinitions, ruleDefinition) {
          let nonCyclicDefinition = null;
          
          const nonUnitDefinition = NonUnitDefinition.fromDefinition(ruleDefinition);

          if (nonUnitDefinition !== null) {
            nonCyclicDefinition = nonUnitDefinition;
          } else {
            const unitDefinition = UnitDefinition.fromDefinition(ruleDefinition),
                  unitDefinitionRuleName = unitDefinition.getRuleName();
            
            if (unitDefinitionRuleName !== ruleName) {
              nonCyclicDefinition = unitDefinition;
            }            
          }

          if (nonCyclicDefinition !== null) {
            nonCyclicDefinitions.push(nonCyclicDefinition);
          }
          
          return nonCyclicDefinitions;
        }, []);

  return nonCyclicDefinitions;
}
