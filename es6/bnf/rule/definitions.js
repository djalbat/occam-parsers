'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      DefinitionsNode = require('../node/definitions'),
      DefinitionsDefinition = require('../definition/definitions');

const { DefinitionsRuleName } = ruleNames;

class DefinitionsRule extends Rule {
  constructor() {
    const definitionsDefinition = new DefinitionsDefinition(),
          name = DefinitionsRuleName,
          definitions = [
            definitionsDefinition
          ],
          Node = DefinitionsNode;
    
    super(name, definitions, Node)
  }
}

module.exports = DefinitionsRule;
