'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      GroupOfPartsDefinition = require('../definition/groupOfParts');

class GroupOfPartsProduction extends Production {
  constructor() {
    const groupOfPartsDefinition = new GroupOfPartsDefinition(),
          name = 'groupOfParts',
          definitions = [
            groupOfPartsDefinition
          ],
          Node = NonTerminalNode;
    
    super(name, definitions, Node)
  }
}

module.exports = GroupOfPartsProduction;
