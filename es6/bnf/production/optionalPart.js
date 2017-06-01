'use strict';

const Production = require('../production'),
      OptionalPartRule = require('../rule/optionalPart'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class OptionalPartProduction extends Production {
  constructor() {
    const optionalPartRule = new OptionalPartRule(),
          name = 'optionalPart',
          rules = [
            optionalPartRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = OptionalPartProduction;
