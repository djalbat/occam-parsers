'use strict';

const Definition = require('../definition'),
      EpsilonPart = require('../part/terminal/epsilon');

class EpsilonDefinition extends Definition {
  constructor() {
    const epsilonPart = new EpsilonPart(),
          parts = [
            epsilonPart
          ];

    super(parts)
  }
}

module.exports = EpsilonDefinition;
