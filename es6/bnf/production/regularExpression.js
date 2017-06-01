'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      RegularExpressionSignificantTokenTypeRule = require('../rule/significantTokenType/regularExpression');

class RegularExpressionProduction extends Production {
  constructor() {
    const regularExpressionSignificantTokenTypeRule = new RegularExpressionSignificantTokenTypeRule(),
          name = 'regularExpression',
          rules = [
            regularExpressionSignificantTokenTypeRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = RegularExpressionProduction;
