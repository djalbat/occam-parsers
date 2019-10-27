'use strict';

const Definition = require('../definition'),
      WildcardPart = require('../part/terminal/wildcard');

class ErrorDefinition extends Definition {
  constructor() {
    const nonWhitespace = false,
          wildcardPart = new WildcardPart(nonWhitespace),
          parts = [
            wildcardPart
          ];

    super(parts)
  }
}

module.exports = ErrorDefinition;
