'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      EpsilonDefinition = require('../definition/epsilon'),
      RightRecursiveOptionalPartDefinition = require('../definition/rightRecursiveOptionalPart');

class RightRecursiveOptionalPartProduction extends Production {
  constructor() {
    const rightRecursiveOptionalPartDefinition = new RightRecursiveOptionalPartDefinition(),
          epsilonDefinition = new EpsilonDefinition(),
          name = 'rightRecursiveOptionalPart',
          definitions = [
            rightRecursiveOptionalPartDefinition,
            epsilonDefinition
          ],
          Node = NonTerminalNode;

    super(name, definitions, Node)
  }
}

module.exports = RightRecursiveOptionalPartProduction;
