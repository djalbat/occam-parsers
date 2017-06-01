'use strict';

const Production = require('../production'),
      RegularExpressionRule = require('../rule/regularExpression'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class RegularExpressionProduction extends Production {
  constructor() {
    const regularExpressionRule = new RegularExpressionRule(),
          name = 'regularExpression',
          rules = [
            regularExpressionRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = RegularExpressionProduction;
