'use strict';

const Rule = require('../rule');

class UnitRule extends Rule {
  static fromRule(rule) {
    let unitRule = null;

    const rulePartsLength = rule.getPartsLength(),
          ruleFirstProductionNamePart = rule.getFirstProductionNamePart();

    if ((rulePartsLength === 1) && (ruleFirstProductionNamePart !== null)) {
      if (ruleFirstProductionNamePart !== null) {
        const ruleParts = rule.getParts(),
              parts = ruleParts;  ///

        unitRule = new UnitRule(parts);
      }
    }

    return unitRule;
  }
}

module.exports = UnitRule;
