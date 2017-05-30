'use strict';

const Rule = require('../../rule'),
      EndOfLinePart = require('../../part/endOfLine');

class EndOfLinePartRule extends Rule {
  constructor() {
    const noWhitespace = false,
          endOfLinePart = new EndOfLinePart(noWhitespace),
          parts = [
            endOfLinePart
          ];
    
    super(parts)
  }
}

module.exports = EndOfLinePartRule;
