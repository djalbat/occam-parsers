'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      NoWhitespacePartDefinition = require('../definition/noWhitespacePart');

class NoWhitespacePartProduction extends Production {
  constructor() {
    const noWhitespacePartDefinition = new NoWhitespacePartDefinition(),
          name = 'noWhitespacePart',
          noWhitespacePart = [
            noWhitespacePartDefinition
          ],
          Node = NonTerminalNode;

    super(name, noWhitespacePart, Node)
  }
}

module.exports = NoWhitespacePartProduction;
