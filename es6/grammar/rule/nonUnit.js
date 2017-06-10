'use strict';

const Rule = require('../../common/rule'),
      UnitRule = require('../rule/unit');

class NonUnitRule extends Rule {
  static fromRule(rule) {
    let nonUnitRule = null;

    const unitRule = UnitRule.fromRule(rule);
    
    if (unitRule === null) {
      const parts = rule.getParts();
      
      nonUnitRule = new NonUnitRule(parts);
    }

    return nonUnitRule;
  }
}

module.exports = NonUnitRule;
