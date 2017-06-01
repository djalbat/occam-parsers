'use strict';

const Production = require('../production'),
      RegularExpressionProductionNameRule = require('../rule/regularExpressionProductionName'),
      ProductionNameProductionNameRule = require('../rule/productionNameProductionName'),
      TerminalSymbolProductionNameRule = require('../rule/terminalSymbolProductionName'),
      NoWhitespaceProductionNameRule = require('../rule/noWhitespaceProductionName'),
      EndOfLineProductionNameRule = require('../rule/endOfLineProductionName'),
      OptionalPartPartRule = require('../rule/part/optionalPart'),
      OneOrMorePartsPartRule = require('../rule/part/oneOrMoreParts'),
      ZeroOrMorePartsPartRule = require('../rule/part/zeroOrMoreParts'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class PartProduction extends Production {
  constructor() {
    const regularExpressionProductionNameRule = new RegularExpressionProductionNameRule(),
          productionNameProductionNameRule = new ProductionNameProductionNameRule(),
          terminalSymbolProductionNameRule = new TerminalSymbolProductionNameRule(),
          noWhitespaceProductionNameRule = new NoWhitespaceProductionNameRule(),
          endOfLineProductionNameRule = new EndOfLineProductionNameRule(),
          optionalPartPartRule = new OptionalPartPartRule(),
          oneOrMorePartsPartRule = new OneOrMorePartsPartRule(),
          zeroOrMorePartsPartRule = new ZeroOrMorePartsPartRule(),
          name = 'part',
          rules = [
            regularExpressionProductionNameRule,
            productionNameProductionNameRule,
            terminalSymbolProductionNameRule,
            noWhitespaceProductionNameRule,
            endOfLineProductionNameRule/*,
            optionalPartPartRule,
            oneOrMorePartsPartRule,
            zeroOrMorePartsPartRule*/
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = PartProduction;
