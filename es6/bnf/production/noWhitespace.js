'use strict';

const Production = require('../production'),
      NoWhitespaceRule = require('../rule/noWhitespace'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class NoWhitespaceProduction extends Production {
  constructor() {
    const noWhitespaceRule = new NoWhitespaceRule(),
          name = 'noWhitespace',
          rules = [
            noWhitespaceRule
          ],
          Node = NonTerminalNode;

    super(name, rules, Node)
  }
}

module.exports = NoWhitespaceProduction;
