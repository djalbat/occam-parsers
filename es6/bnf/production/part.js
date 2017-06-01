'use strict';

const Production = require('../production'),
      ProductionNameRule = require('../rule/productionName'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class PartProduction extends Production {
  constructor() {
    const endOfLineProductionName = 'endOfLine',
          noWhitespaceProductionName = 'noWhitespace',
          terminalSymbolProductionName = 'terminalSymbol',
          productionNameProductionName = 'productionName',
          regularExpressionProductionName = 'regularExpression',
          endOfLineProductionNameRule = new ProductionNameRule(endOfLineProductionName),
          noWhitespaceProductionNameRule = new ProductionNameRule(noWhitespaceProductionName),
          terminalSymbolProductionNameRule = new ProductionNameRule(terminalSymbolProductionName),
          productionNameProductionNameRule = new ProductionNameRule(productionNameProductionName),
          regularExpressionProductionNameRule = new ProductionNameRule(regularExpressionProductionName),
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
