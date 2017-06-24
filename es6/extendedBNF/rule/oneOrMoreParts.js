'use strict';

const Rule = require('../rule'),
      OneOrMorePartsNode = require('../node/oneOrMoreParts'),
      OneOrMorePartsDefinition = require('../definition/oneOrMoreParts');

class OneOrMorePartsRule extends Rule {
  constructor() {
    const oneOrMorePartsDefinition = new OneOrMorePartsDefinition(),
          name = 'oneOrMoreParts',
          oneOrMoreParts = [
            oneOrMorePartsDefinition
          ],
          Node = OneOrMorePartsNode;

    super(name, oneOrMoreParts, Node)
  }
}

module.exports = OneOrMorePartsRule;
