'use strict';

const Production = require('../production'),
      VerticalSpaceNode = require('../node/verticalSpace'),
      VerticalSpaceDefinition = require('../definition/verticalSpace');

class VerticalSpaceProduction extends Production {
  constructor() {
    const name = 'verticalSpace',
          verticalSpaceDefinition = new VerticalSpaceDefinition(),
          definitions = [
            verticalSpaceDefinition
          ],
          Node = VerticalSpaceNode;
    
    super(name, definitions, Node)
  }
}

module.exports = VerticalSpaceProduction;
