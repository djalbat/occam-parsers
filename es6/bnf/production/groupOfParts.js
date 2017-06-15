'use strict';

const Production = require('../production'),
      GroupOfPartsNode = require('../node/groupOfParts'),
      GroupOfPartsDefinition = require('../definition/groupOfParts');

class GroupOfPartsProduction extends Production {
  constructor() {
    const groupOfPartsDefinition = new GroupOfPartsDefinition(),
          name = 'groupOfParts',
          definitions = [
            groupOfPartsDefinition
          ],
          Node = GroupOfPartsNode;
    
    super(name, definitions, Node)
  }
}

module.exports = GroupOfPartsProduction;
