'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      SignificantTokenTypeRule = require('../rule/significantTokenType');

class RegularExpressionProduction extends Production {
  constructor() {
    const regularExpressionSignificantTokenType = 'regularExpression',
          regularExpressionSignificantTokenTypeRule = new SignificantTokenTypeRule(regularExpressionSignificantTokenType),
          name = 'regularExpression',
          rules = [
            regularExpressionSignificantTokenTypeRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = RegularExpressionProduction;
