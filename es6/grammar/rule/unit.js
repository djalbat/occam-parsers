'use strict';

const Rule = require('../../common/rule');

class NonUnitRule extends Rule {
  getPart() {
    const firstPart = this.getFirstPart(),
          part = firstPart; ///
    
    return part;
  }
  
  static fromRule(rule) {
    let nonUnitRule = null;
    
    const rulePartsLength = rule.getPartsLength(),
          ruleFirstProductionNamePart = rule.getFirstProductionNamePart();
    
    if ((rulePartsLength > 1) || (ruleFirstProductionNamePart === null)) {
      if (ruleFirstProductionNamePart !== null) {
        const ruleParts = rule.getParts(),
              parts = ruleParts;  ///
        
        nonUnitRule = new NonUnitRule(parts);            
      }
    }
    
    return nonUnitRule;
  }
}

module.exports = NonUnitRule;

