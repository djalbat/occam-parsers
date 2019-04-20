'use strict';

const Rule = require('../rule'),
      NameNode = require('../node/name'),
      ruleNames = require('../ruleNames'),
      NameDefinition = require('../definition/name');

const { NameRuleName } = ruleNames;

class NameRule extends Rule {
  constructor() {
    const nameDefinition = new NameDefinition(),
          name = NameRuleName,
          definitions = [
            nameDefinition
          ],
          Node = NameNode;
    
    super(name, definitions, Node)
  }
}

module.exports = NameRule;
