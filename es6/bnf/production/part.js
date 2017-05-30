'use strict';

const Production = require('../production'),
      WildcardPartRule = require('../rule/part/wildcard'),
      EndOfLinePartRule = require('../rule/part/endOfLine'),
      OptionalPartPartRule = require('../rule/part/optionalPart'),
      TerminalSymbolPartRule = require('../rule/part/terminalSymbol'),
      OneOrMorePartsPartRule = require('../rule/part/oneOrMoreParts'),
      ZeroOrMorePartsPartRule = require('../rule/part/zeroOrMoreParts'),
      RegularExpressionPartRule = require('../rule/part/regularExpression'),
      SignificantTokenTypePartRule = require('../rule/part/significantTokenType'),
      ProductionNamePartRule = require('../rule/part/productionName'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class PartProduction extends Production {
  constructor() {
    const wildcardPartRule = new WildcardPartRule(),
          endOfLinePartRule = new EndOfLinePartRule(),
          optionalPartPartRule = new OptionalPartPartRule(),
          terminalSymbolPartRule = new TerminalSymbolPartRule(),
          oneOrMorePartsPartRule = new OneOrMorePartsPartRule(),
          zeroOrMorePartsPartRule = new ZeroOrMorePartsPartRule(),
          regularExpressionPartRule = new RegularExpressionPartRule(),
          significantTokenTypePartRule = new SignificantTokenTypePartRule(),
          productionNamePartRule = new ProductionNamePartRule(),    
          name = 'part',
          rules = [
            regularExpressionPartRule,
            wildcardPartRule,
            endOfLinePartRule,
            optionalPartPartRule,
            terminalSymbolPartRule,
            oneOrMorePartsPartRule,
            zeroOrMorePartsPartRule,
            significantTokenTypePartRule,
            productionNamePartRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = PartProduction;
