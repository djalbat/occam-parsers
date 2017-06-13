'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      NegatedPartDefinition = require('../definition/negatedPart');

class NegatedPartProduction extends Production {
  constructor() {
    const negatedPartDefinition = new NegatedPartDefinition(),
          name = 'negatedPart',
          negatedPart = [
            negatedPartDefinition
          ],
          Node = NonTerminalNode;

    super(name, negatedPart, Node)
  }
}

module.exports = NegatedPartProduction;
