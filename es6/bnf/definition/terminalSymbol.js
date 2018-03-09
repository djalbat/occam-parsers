'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

class TerminalSymbolDefinition extends Definition {
  constructor(content) {
    const noWhitespace = false,
          terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace),
          parts = [
            terminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = TerminalSymbolDefinition;
