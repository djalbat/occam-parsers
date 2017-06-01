'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      SignificantTokenTypeRule = require('../rule/significantTokenType');

class SignificantTokenTypeProduction extends Production {
  constructor() {
    const typeSignificantTokenType = 'type',
          typeSignificantTokenTypeRule = new SignificantTokenTypeRule(typeSignificantTokenType),
          name = 'significantTokenType',
          rules = [
            typeSignificantTokenTypeRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = SignificantTokenTypeProduction;
