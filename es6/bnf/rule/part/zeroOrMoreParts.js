'use strict';

const Rule = require('../rule'),
      ZeroOrMorePartsPart = require('../../part/zeroOrMoreParts');

class ZeroOrMorePartsPartRule extends Rule {
  constructor() {
    const noWhitespace = false,
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(noWhitespace),
          parts = [
            zeroOrMorePartsPart
          ];
    
    super(parts)
  }
}

module.exports = ZeroOrMorePartsPartRule;
