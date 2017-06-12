'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      NoWhitespaceDefinition = require('../definition/noWhitespace');

class NoWhitespaceProduction extends Production {
  constructor() {
    const noWhitespaceDefinition = new NoWhitespaceDefinition(),
          name = 'noWhitespace',
          definitions = [
            noWhitespaceDefinition
          ],
          Node = NonTerminalNode;

    super(name, definitions, Node)
  }
}

module.exports = NoWhitespaceProduction;
