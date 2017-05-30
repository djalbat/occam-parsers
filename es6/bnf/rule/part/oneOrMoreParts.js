'use strict';

const Rule = require('../../rule'),
      OneOrMorePartsPart = require('../../part/oneOrMoreParts');

class WildcardPartRule extends Rule {
  constructor() {
    const noWhitespace = false,
          oneOrMorePartsPart = new OneOrMorePartsPart(noWhitespace),
          parts = [
            oneOrMorePartsPart
          ];
    
    super(parts)
  }
}

module.exports = WildcardPartRule;
