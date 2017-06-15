'use strict';

const Production = require('../production'),
      ZeroOrMorePartsNode = require('../node/zeroOrMoreParts'),
      ZeroOrMorePartsDefinition = require('../definition/zeroOrMoreParts');

class ZeroOrMorePartsProduction extends Production {
  constructor() {
    const zeroOrMorePartsDefinition = new ZeroOrMorePartsDefinition(),
          name = 'zeroOrMoreParts',
          zeroOrMoreParts = [
            zeroOrMorePartsDefinition
          ],
          Node = ZeroOrMorePartsNode;

    super(name, zeroOrMoreParts, Node)
  }
}

module.exports = ZeroOrMorePartsProduction;
