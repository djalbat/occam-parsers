'use strict';

const Production = require('../production'),
      DefinitionsDefinition = require('../definition/definitions'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class DefinitionsProduction extends Production {
  constructor() {
    const definitionsDefinition = new DefinitionsDefinition(),
          name = 'definitions',
          definitions = [
            definitionsDefinition
          ],
          Node = NonTerminalNode;
    
    super(name, definitions, Node)
  }
}

module.exports = DefinitionsProduction;
