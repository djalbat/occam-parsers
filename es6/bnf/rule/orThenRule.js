'use strict';

const Rule = require('../rule'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ProductionNamePart = require('../part/productionName');

class OrThenRuleRule extends Rule {
  constructor() {
    const noWhitespace = false,
          ruleProductionName = 'rule',
          ruleProductionNamePart = new ProductionNamePart(ruleProductionName, noWhitespace),
          orSymbol = '|',
          orTerminalSymbolPart = new TerminalSymbolPart(orSymbol, noWhitespace),
          parts = [
            ruleProductionNamePart,
            orTerminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = OrThenRuleRule;
