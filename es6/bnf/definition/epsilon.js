'use strict';

const Definition = require('../definition'),
      EpsilonPart = require('../part/terminal/epsilon');

class EpsilonDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          epsilonPart = new EpsilonPart(noWhitespace),
          parts = [
            epsilonPart
          ];

    super(parts)
  }
}

module.exports = EpsilonDefinition;
