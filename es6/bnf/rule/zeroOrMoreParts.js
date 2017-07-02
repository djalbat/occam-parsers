'use strict';

const Rule = require('../rule'),
      ZeroOrMorePartsNode = require('../node/zeroOrMoreParts'),
      ZeroOrMorePartsDefinition = require('../definition/zeroOrMoreParts');

class ZeroOrMorePartsRule extends Rule {
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

module.exports = ZeroOrMorePartsRule;
