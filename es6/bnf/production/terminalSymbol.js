'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      StringSignificantTokenTypeRule = require('../rule/significantTokenType/string');

class TerminalSymbolProduction extends Production {
  constructor() {
    const stringSignificantTokenTypeRule = new StringSignificantTokenTypeRule(),
          name = 'terminalSymbol',
          rules = [
            stringSignificantTokenTypeRule
          ],
          Node = NonTerminalNode;

    super(name, rules, Node)
  }
}

module.exports = TerminalSymbolProduction;
