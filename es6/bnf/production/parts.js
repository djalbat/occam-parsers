'use strict';

const Production = require('../production'),
      PartsRule = require('../rule/parts'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class PartsProduction extends Production {
  constructor() {
    const partsRule = new PartsRule(),
          name = 'parts',
          rules = [
            partsRule
          ],
          Node = NonTerminalNode;
    
    super(name, rules, Node)
  }
}

module.exports = PartsProduction;
