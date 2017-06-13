'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      OneOrMorePartsDefinition = require('../definition/oneOrMoreParts');

class OneOrMorePartsProduction extends Production {
  constructor() {
    const oneOrMorePartsDefinition = new OneOrMorePartsDefinition(),
          name = 'oneOrMoreParts',
          oneOrMoreParts = [
            oneOrMorePartsDefinition
          ],
          Node = NonTerminalNode;

    super(name, oneOrMoreParts, Node)
  }
}

module.exports = OneOrMorePartsProduction;
