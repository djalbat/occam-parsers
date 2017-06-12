'use strict';

const Production = require('../production'),
      GroupDefinition = require('../definition/group'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class GroupProduction extends Production {
  constructor() {
    const productionDefinition = new GroupDefinition(),
          name = 'group',
          definitions = [
            productionDefinition
          ],
          Node = NonTerminalNode;
    
    super(name, definitions, Node)
  }
}

module.exports = GroupProduction;
