'use strict';

const Production = require('../../common/production');

class UnitRuleProduction extends Production {
  static fromNameAndUnitRule(name, unitRule) {
    const rules = [
            unitRule
          ],
          Node = null,
          unitProduction = new UnitRuleProduction(name, rules, Node);
    
    return unitProduction;          
  }
}

module.exports = UnitRuleProduction;
