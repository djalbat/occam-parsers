'use strict';

const Production = require('../production'),
      RegularExpressionRule = require('../rule/regularExpression'),
      ProductionNameProductionNameRule = require('../rule/productionNameProductionName'),
      WildcardPartRule = require('../rule/part/wildcard'),
      EndOfLinePartRule = require('../rule/part/endOfLine'),
      OptionalPartPartRule = require('../rule/part/optionalPart'),
      TerminalSymbolPartRule = require('../rule/part/terminalSymbol'),
      OneOrMorePartsPartRule = require('../rule/part/oneOrMoreParts'),
      ZeroOrMorePartsPartRule = require('../rule/part/zeroOrMoreParts'),
      SignificantTokenTypePartRule = require('../rule/part/significantTokenType'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class PartProduction extends Production {
  constructor() {
    const regularExpressionRule = new RegularExpressionRule(),
          productionNameProductionNameRule = new ProductionNameProductionNameRule(),
          wildcardPartRule = new WildcardPartRule(),
          endOfLinePartRule = new EndOfLinePartRule(),
          optionalPartPartRule = new OptionalPartPartRule(),
          terminalSymbolPartRule = new TerminalSymbolPartRule(),
          oneOrMorePartsPartRule = new OneOrMorePartsPartRule(),
          zeroOrMorePartsPartRule = new ZeroOrMorePartsPartRule(),
          significantTokenTypePartRule = new SignificantTokenTypePartRule(),
          name = 'part',
          rules = [
            regularExpressionRule,
            productionNameProductionNameRule/*,
            wildcardPartRule,
            endOfLinePartRule,
            optionalPartPartRule,
            terminalSymbolPartRule,
            oneOrMorePartsPartRule,
            zeroOrMorePartsPartRule,
            significantTokenTypePartRule*/
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = PartProduction;
