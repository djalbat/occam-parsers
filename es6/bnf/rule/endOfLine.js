'use strict';

const Rule = require('../rule'),
      TerminalSymbolPart = require('../part/terminalSymbol');

class EndOfLineRule extends Rule {
  constructor() {
    const noWhitespace = false,
          endOfLineTerminalSymbolContent = '<END_OF_LINE>',
          endOfLineTerminalSymbolPart = new TerminalSymbolPart(endOfLineTerminalSymbolContent, noWhitespace),
          parts = [
            endOfLineTerminalSymbolPart
          ];

    super(parts)
  }
}

module.exports = EndOfLineRule;
