'use strict';

const Rule = require('../rule'),
      TerminalSymbolPart = require('../../part/terminalSymbol');

class TerminalSymbolPartRule extends Rule {
  constructor() {
    const noWhitespace = false,
          terminalSymbolPart = new TerminalSymbolPart(noWhitespace),
          parts = [
            terminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = TerminalSymbolPartRule;
