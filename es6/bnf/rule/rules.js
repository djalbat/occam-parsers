'use strict';

const Rule = require('../rule'),
      ProductionNamePart = require('../part/productionName'),
      ZeroOrMorePartsPart = require('../part/zeroOrMoreParts');

class RulesRule extends Rule {
  constructor() {
    const terminalPart = null,
          noWhitespace = false,
          ruleProductionName = 'rule',
          ruleProductionNamePart = new ProductionNamePart(ruleProductionName, noWhitespace),
          orThenRuleProductionName = 'orThenRule',
          zeroOrMoreOrThenRuleProductionNamePartsPart = new ZeroOrMorePartsPart(terminalPart, orThenRuleProductionName, noWhitespace),
          parts = [
            ruleProductionNamePart,
            zeroOrMoreOrThenRuleProductionNamePartsPart
          ];
    
    super(parts)
  }
}

module.exports = RulesRule;
