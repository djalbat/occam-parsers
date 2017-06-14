'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      LazyQuantifierDefinition = require('../definition/lazyQuantifier');

class LazyQuantifierProduction extends Production {
  constructor() {
    const lazyQuantifierDefinition = new LazyQuantifierDefinition(),
          name = 'lazyQuantifier',
          lazyQuantifier = [
            lazyQuantifierDefinition
          ],
          Node = NonTerminalNode;

    super(name, lazyQuantifier, Node)
  }
}

module.exports = LazyQuantifierProduction;
