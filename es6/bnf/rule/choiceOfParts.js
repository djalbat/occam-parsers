'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      DefinitionNode = require('../node/definition'),
      ChoiceOfPartsDefinition = require('../definition/choiceOfParts');

const { ChoiceOfPartsRuleName } = ruleNames;

class ChoiceOfPartsRule extends Rule {
  constructor() {
    const name = ChoiceOfPartsRuleName,
          choiceOfPartsDefinition = new ChoiceOfPartsDefinition(),
          definitions = [
            choiceOfPartsDefinition
          ],
          Node = DefinitionNode;
    
    super(name, definitions, Node)
  }
}

module.exports = ChoiceOfPartsRule;
