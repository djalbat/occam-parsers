'use strict';

const Production = require('../production'),
      OptionalPartNode = require('../node/optionalPart'),
      OptionalPartDefinition = require('../definition/optionalPart');

class OptionalPartProduction extends Production {
  constructor() {
    const optionalPartDefinition = new OptionalPartDefinition(),
          name = 'optionalPart',
          optionalPart = [
            optionalPartDefinition
          ],
          Node = OptionalPartNode;

    super(name, optionalPart, Node)
  }
}

module.exports = OptionalPartProduction;
