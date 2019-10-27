'use strict';

const Definition = require('../definition'),
      WildcardPart = require('../part/terminal/wildcard');

class ErrorDefinition extends Definition {
  constructor() {
    const wildcardPart = new WildcardPart(),
          parts = [
            wildcardPart
          ];

    super(parts)
  }
}

module.exports = ErrorDefinition;
