'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      VerticalSpaceDefinition = require('../definition/verticalSpace');

class VerticalSpaceProduction extends Production {
  constructor() {
    const name = 'verticalSpace',
          verticalSpaceDefinition = new VerticalSpaceDefinition(),
          definitions = [
            verticalSpaceDefinition
          ],
          Node = NonTerminalNode;
    
    super(name, definitions, Node)
  }
}

module.exports = VerticalSpaceProduction;
