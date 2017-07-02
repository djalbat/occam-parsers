'use strict';

const Rule = require('../rule'),
      DefinitionsNode = require('../node/definitions'),
      DefinitionsDefinition = require('../definition/definitions');

class DefinitionsRule extends Rule {
  constructor() {
    const definitionsDefinition = new DefinitionsDefinition(),
          name = 'definitions',
          definitions = [
            definitionsDefinition
          ],
          Node = DefinitionsNode;
    
    super(name, definitions, Node)
  }
}

module.exports = DefinitionsRule;
