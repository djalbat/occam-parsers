'use strict';

const Rule = require('../rule'),
      ProductionNamePart = require('../../common/part/productionName');

class RulesRule extends Rule {
  constructor() {
    const noWhitespace = false,
          ruleProductionName = 'rule',
          ruleProductionNamePart = new ProductionNamePart(ruleProductionName, noWhitespace),
          parts = [
            ruleProductionNamePart
          ];
    
    super(parts)
  }
}

module.exports = RulesRule;
