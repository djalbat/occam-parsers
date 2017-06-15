'use strict';

const Production = require('../production'),
      DefinitionNode = require('../node/definition'),
      DefinitionDefinition = require('../definition/definition');

class DefinitionProduction extends Production {
  constructor() {
    const name = 'definition',
          definitionDefinition = new DefinitionDefinition(),
          definitions = [
            definitionDefinition
          ],
          Node = DefinitionNode;
    
    super(name, definitions, Node)
  }
}

module.exports = DefinitionProduction;
