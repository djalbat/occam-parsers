'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      OptionalPartDefinition = require('../definition/optionalPart');

class OptionalPartProduction extends Production {
  constructor() {
    const optionalPartDefinition = new OptionalPartDefinition(),
          name = 'optionalPart',
          optionalPart = [
            optionalPartDefinition
          ],
          Node = NonTerminalNode;

    super(name, optionalPart, Node)
  }
}

module.exports = OptionalPartProduction;
