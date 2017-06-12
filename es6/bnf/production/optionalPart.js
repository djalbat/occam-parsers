'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      OptionalPartDefinition = require('../definition/optionalPart');

class OptionalPartProduction extends Production {
  constructor() {
    const optionalPartDefinition = new OptionalPartDefinition(),
          name = 'optionalPart',
          definitions = [
            optionalPartDefinition
          ],
          Node = NonTerminalNode;
    
    super(name, definitions, Node)
  }
}

module.exports = OptionalPartProduction;
