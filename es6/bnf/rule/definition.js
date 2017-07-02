'use strict';

const Rule = require('../rule'),
      DefinitionNode = require('../node/definition'),
      DefinitionDefinition = require('../definition/definition');

class DefinitionRule extends Rule {
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

module.exports = DefinitionRule;
