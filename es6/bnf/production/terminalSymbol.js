'use strict';

const Production = require('../production'),
    TerminalSymbolRule = require('../rule/terminalSymbol'),
    NonTerminalNode = require('../../common/node/nonTerminal');

class TerminalSymbolProduction extends Production {
  constructor() {
    const terminalSymbolRule = new TerminalSymbolRule(),
        name = 'terminalSymbol',
        rules = [
          terminalSymbolRule
        ],
        Node = NonTerminalNode;

    super(name, rules, Node)
  }
}

module.exports = TerminalSymbolProduction;
