'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      DefinitionNode = require('../node/definition'),
      GroupOfPartsDefinition = require('../definition/groupOfParts');

const { GroupOfPartsRuleName } = ruleNames;

class GroupOfPartsRule extends Rule {
  constructor() {
    const name = GroupOfPartsRuleName,
          groupOfPartsDefinition = new GroupOfPartsDefinition(),
          definitions = [
            groupOfPartsDefinition
          ],
          Node = DefinitionNode;
    
    super(name, definitions, Node)
  }
}

module.exports = GroupOfPartsRule;
