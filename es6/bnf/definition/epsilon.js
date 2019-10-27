'use strict';

const Definition = require('../definition'),
      EpsilonPart = require('../part/terminal/epsilon');

class EpsilonDefinition extends Definition {
  constructor() {
    const nonWhitespace = false,
          epsilonPart = new EpsilonPart(nonWhitespace),
          parts = [
            epsilonPart
          ];

    super(parts)
  }
}

module.exports = EpsilonDefinition;
