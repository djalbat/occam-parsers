'use strict';

const Production = require('../production'),
      OneOrMorePartsNode = require('../node/oneOrMoreParts'),
      OneOrMorePartsDefinition = require('../definition/oneOrMoreParts');

class OneOrMorePartsProduction extends Production {
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

module.exports = OneOrMorePartsProduction;
