'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      DefinitionsNode = require('../node/definitions'),
      DefinitionsDefinition = require('../definition/definitions');

class DefinitionsRule extends Rule {
  constructor() {
    const definitionsDefinition = new DefinitionsDefinition(),
          name = ruleNames.DefinitionsRule,
          definitions = [
            definitionsDefinition
          ],
          Node = DefinitionsNode;
    
    super(name, definitions, Node)
  }
}

module.exports = DefinitionsRule;
