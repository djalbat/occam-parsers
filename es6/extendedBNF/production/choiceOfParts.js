'use strict';

const Production = require('../production'),
      ChoiceOfPartsNode = require('../node/choiceOfParts'),
      ChoiceOfPartsDefinition = require('../definition/choiceOfParts');

class ChoiceOfPartsProduction extends Production {
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

module.exports = ChoiceOfPartsProduction;
