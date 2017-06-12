'use strict';

const Production = require('../production'),
      DefinitionDefinition = require('../definition/definition'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class DefinitionProduction extends Production {
  constructor() {
    const name = 'definition',
          definitionDefinition = new DefinitionDefinition(),
          definitions = [
            definitionDefinition
          ],
          Node = NonTerminalNode;
    
    super(name, definitions, Node)
  }
}

module.exports = DefinitionProduction;
