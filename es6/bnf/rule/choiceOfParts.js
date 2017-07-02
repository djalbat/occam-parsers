'use strict';

const Rule = require('../rule'),
      ChoiceOfPartsNode = require('../node/choiceOfParts'),
      ChoiceOfPartsDefinition = require('../definition/choiceOfParts.old');

class ChoiceOfPartsRule extends Rule {
  constructor() {
    const choiceOfPartsDefinition = new ChoiceOfPartsDefinition(),
          name = 'choiceOfParts',
          definitions = [
            choiceOfPartsDefinition
          ],
          Node = ChoiceOfPartsNode;
    
    super(name, definitions, Node)
  }
}

module.exports = ChoiceOfPartsRule;
