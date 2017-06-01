'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      EndOfLineProductionNameRule = require('../rule/productionName/endOfLine'),
      NoWhitespaceProductionNameRule = require('../rule/productionName/noWhitespace'),
      TerminalSymbolProductionNameRule = require('../rule/productionName/terminalSymbol'),
      ProductionNameProductionNameRule = require('../rule/productionName/productionName'),
      RegularExpressionProductionNameRule = require('../rule/productionName/regularExpression');

class PartProduction extends Production {
  constructor() {
    const endOfLineProductionNameRule = new EndOfLineProductionNameRule(),
          noWhitespaceProductionNameRule = new NoWhitespaceProductionNameRule(),
          terminalSymbolProductionNameRule = new TerminalSymbolProductionNameRule(),
          productionNameProductionNameRule = new ProductionNameProductionNameRule(),
          regularExpressionProductionNameRule = new RegularExpressionProductionNameRule(),
          name = 'part',
          rules = [
            regularExpressionProductionNameRule,
            productionNameProductionNameRule,
            terminalSymbolProductionNameRule,
            noWhitespaceProductionNameRule,
            endOfLineProductionNameRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = PartProduction;
