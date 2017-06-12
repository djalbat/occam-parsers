'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol');

class EndOfLineDefinition extends Definition {
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

module.exports = EndOfLineDefinition;
