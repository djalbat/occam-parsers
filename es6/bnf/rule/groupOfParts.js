'use strict';

const Rule = require('../rule'),
      GroupOfPartsNode = require('../node/groupOfParts'),
      GroupOfPartsDefinition = require('../definition/groupOfParts.old');

class GroupOfPartsRule extends Rule {
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

module.exports = GroupOfPartsRule;
