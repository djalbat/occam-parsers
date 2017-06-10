'use strict';

const NonUnitRule = require('../rule/nonUnit'),
      Production = require('../../common/production');

class NonUnitRulesProduction extends Production {
  static fromProduction(production) {
    const nonUnitRules = nonUnitRulesFromProduction(production),
          name = production.getName(),
          rules = nonUnitRules, ///
          Node = production.getNode(),
          nonUnitRulesProduction = new NonUnitRulesProduction(name, rules, Node);

    return nonUnitRulesProduction;
  }
}

module.exports = NonUnitRulesProduction;

function nonUnitRulesFromProduction(production) {
  const rules = production.getRules(),
        nonUnitRules = rules.reduce(function(nonUnitRules, rule) {
          const nonUnitRule = NonUnitRule.fromRule(rule);

          if (nonUnitRule !== null) {
            const rule = nonUnitRule;

            nonUnitRules.push(nonUnitRule);
          }

          return nonUnitRules;
        }, []);

  return nonUnitRules;
}
