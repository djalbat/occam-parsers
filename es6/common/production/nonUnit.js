'use strict';

const UnitRule = require('../rule/unit'),
      Production = require('../production');

class NonUnitProduction extends Production {
  static fromCyclicProduction(cyclicProduction) {
    const name = cyclicProduction.getName(),
          rules = rulesFromCyclicProduction(cyclicProduction),
          Node = cyclicProduction.getNode(),
          nonUnitProduction = new NonUnitProduction(name, rules, Node);

    return nonUnitProduction;
  }
}

module.exports = NonUnitProduction;

function rulesFromCyclicProduction(cyclicProduction) {
  const cyclicProductionRules = cyclicProduction.getRules(),
        rules = cyclicProductionRules.reduce(function(rules, cyclicProductionRule) {
          const unitRule = UnitRule.fromRule(cyclicProductionRule);

          if (unitRule ) {
            const rule = cyclicProductionRule;

            rules = rules.concat(rule);
          }

          return rules;
        }, []);

  return rules;
}
