'use strict';

const Definition = require('../definition'),
      WildcardPart = require('../part/terminal/wildcard');

class ErrorDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          wildcardPart = new WildcardPart(noWhitespace),
          parts = [
            wildcardPart
          ];

    super(parts)
  }
}

module.exports = ErrorDefinition;
