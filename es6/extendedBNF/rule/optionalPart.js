'use strict';

const Rule = require('../rule'),
      OptionalPartNode = require('../node/optionalPart'),
      OptionalPartDefinition = require('../definition/optionalPart');

class OptionalPartRule extends Rule {
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

module.exports = OptionalPartRule;
