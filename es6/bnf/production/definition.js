'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      DefinitionDefinition = require('../definition/definition');

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
