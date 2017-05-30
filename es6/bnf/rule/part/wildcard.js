'use strict';

const Rule = require('../rule'),
      WildcardPart = require('../../part/wildcard');

class WildcardPartRule extends Rule {
  constructor() {
    const noWhitespace = false,
          wildcardPart = new WildcardPart(noWhitespace),
          parts = [
            wildcardPart
          ];
    
    super(parts)
  }
}

module.exports = WildcardPartRule;
