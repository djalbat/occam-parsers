'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      ZeroOrMorePartsDefinition = require('../definition/zeroOrMoreParts');

class ZeroOrMorePartsProduction extends Production {
  constructor() {
    const zeroOrMorePartsDefinition = new ZeroOrMorePartsDefinition(),
          name = 'zeroOrMoreParts',
          zeroOrMoreParts = [
            zeroOrMorePartsDefinition
          ],
          Node = NonTerminalNode;

    super(name, zeroOrMoreParts, Node)
  }
}

module.exports = ZeroOrMorePartsProduction;
