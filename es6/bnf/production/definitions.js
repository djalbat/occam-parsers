'use strict';

const Production = require('../production'),
      DefinitionsNode = require('../node/definitions'),
      DefinitionsDefinition = require('../definition/definitions');

class DefinitionsProduction extends Production {
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

module.exports = DefinitionsProduction;
