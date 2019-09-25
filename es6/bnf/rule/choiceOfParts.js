'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      ChoiceOfPartsNode = require('../node/choiceOfParts'),
      ChoiceOfPartsDefinition = require('../definition/choiceOfParts');

const { ChoiceOfPartsRuleName } = ruleNames;

class ChoiceOfPartsRule extends Rule {
  constructor() {
    const name = ChoiceOfPartsRuleName,
          choiceOfPartsDefinition = new ChoiceOfPartsDefinition(),
          definitions = [
            choiceOfPartsDefinition
          ],
          Node = ChoiceOfPartsNode;
    
    super(name, definitions, Node)
  }
}

module.exports = ChoiceOfPartsRule;
