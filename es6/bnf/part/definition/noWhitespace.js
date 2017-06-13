'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol');

class NoWhitespaceDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          noWhitespaceTerminalSymbolContent = '<NO_WHITESPACE>',
          noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent, noWhitespace),
          parts = [
            noWhitespaceTerminalSymbolPart
          ];

    super(parts)
  }
}

module.exports = NoWhitespaceDefinition;
