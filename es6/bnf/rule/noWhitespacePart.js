'use strict';

const Rule = require('../rule'),
      NoWhitespacePartNode = require('../node/noWhitespacePart'),
      NoWhitespacePartDefinition = require('../definition/noWhitespacePart');

class NoWhitespacePartRule extends Rule {
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

module.exports = NoWhitespacePartRule;
