'use strict';

const Production = require('../production'),
      NoWhitespacePartNode = require('../node/noWhitespacePart'),
      NoWhitespacePartDefinition = require('../definition/noWhitespacePart');

class NoWhitespacePartProduction extends Production {
  constructor() {
    const noWhitespacePartDefinition = new NoWhitespacePartDefinition(),
          name = 'noWhitespacePart',
          noWhitespacePart = [
            noWhitespacePartDefinition
          ],
          Node = NoWhitespacePartNode;

    super(name, noWhitespacePart, Node)
  }
}

module.exports = NoWhitespacePartProduction;
