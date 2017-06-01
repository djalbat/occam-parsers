'use strict';

const Production = require('../production'),
      RegularExpressionProductionNameRule = require('../rule/regularExpressionProductionName'),
      ProductionNameProductionNameRule = require('../rule/productionNameProductionName'),
      TerminalSymbolProductionNameRule = require('../rule/terminalSymbolProductionName'),
      TerminalSymbolRule = require('../rule/terminalSymbol'),
      WildcardPartRule = require('../rule/part/wildcard'),
      EndOfLinePartRule = require('../rule/part/endOfLine'),
      OptionalPartPartRule = require('../rule/part/optionalPart'),
      OneOrMorePartsPartRule = require('../rule/part/oneOrMoreParts'),
      ZeroOrMorePartsPartRule = require('../rule/part/zeroOrMoreParts'),
      SignificantTokenTypePartRule = require('../rule/part/significantTokenType'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class PartProduction extends Production {
  constructor() {
    const regularExpressionProductionNameRule = new RegularExpressionProductionNameRule(),
          productionNameProductionNameRule = new ProductionNameProductionNameRule(),
          terminalSymbolProductionNameRule = new TerminalSymbolProductionNameRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          wildcardPartRule = new WildcardPartRule(),
          endOfLinePartRule = new EndOfLinePartRule(),
          optionalPartPartRule = new OptionalPartPartRule(),
          oneOrMorePartsPartRule = new OneOrMorePartsPartRule(),
          zeroOrMorePartsPartRule = new ZeroOrMorePartsPartRule(),
          significantTokenTypePartRule = new SignificantTokenTypePartRule(),
          name = 'part',
          rules = [
            regularExpressionProductionNameRule,
            productionNameProductionNameRule,
            terminalSymbolProductionNameRule/*,
            wildcardPartRule,
            endOfLinePartRule,
            optionalPartPartRule,
            oneOrMorePartsPartRule,
            zeroOrMorePartsPartRule,
            significantTokenTypePartRule*/
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = PartProduction;
