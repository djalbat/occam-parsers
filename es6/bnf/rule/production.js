'use strict';

const Rule = require('../rule'),
      EndOfLinePart = require('../part/endOfLine'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ProductionNamePart = require('../part/productionName'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts');

class ProductionRule extends Rule {
  constructor() {
    const terminalPart = null,
          noWhitespace = false,
          productionNameProductionName = 'productionName',
          productionNameProductionNamePart = new ProductionNamePart(productionNameProductionName, noWhitespace),
          separatorSymbol = '::=',
          separatorTerminalSymbolPart = new TerminalSymbolPart(separatorSymbol, noWhitespace),
          ruleProductionName = 'rule',
          oneOrMoreRuleProductionNamePartsPart = new OneOrMorePartsPart(terminalPart, ruleProductionName, noWhitespace),
          endOfLinePart = new EndOfLinePart(),
          parts = [
            productionNameProductionNamePart,
            separatorTerminalSymbolPart,
            oneOrMoreRuleProductionNamePartsPart,
            endOfLinePart
          ];
    
    super(parts)
  }
}

module.exports = ProductionRule;
