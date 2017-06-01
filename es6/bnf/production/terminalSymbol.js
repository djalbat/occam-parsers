'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      SignificantTokenTypeRule = require('../rule/significantTokenType');

class TerminalSymbolProduction extends Production {
  constructor() {
    const stringSignificantTokenType = 'string',
          stringSignificantTokenTypeRule = new SignificantTokenTypeRule(stringSignificantTokenType),
          name = 'terminalSymbol',
          rules = [
            stringSignificantTokenTypeRule
          ],
          Node = NonTerminalNode;

    super(name, rules, Node)
  }
}

module.exports = TerminalSymbolProduction;
