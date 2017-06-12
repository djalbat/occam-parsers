'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      EndOfLineDefinition = require('../definition/endOfLine');

class EndOfLineProduction extends Production {
  constructor() {
    const endOfLineDefinition = new EndOfLineDefinition(),
          name = 'endOfLine',
          definitions = [
            endOfLineDefinition
          ],
          Node = NonTerminalNode;
    
    super(name, definitions, Node)
  }
}

module.exports = EndOfLineProduction;
