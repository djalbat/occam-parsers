'use strict';

const Production = require('../production'),
      EndOfLineRule = require('../rule/endOfLine'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class EndOfLineProduction extends Production {
  constructor() {
    const endOfLineRule = new EndOfLineRule(),
          name = 'endOfLine',
          rules = [
            endOfLineRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = EndOfLineProduction;
