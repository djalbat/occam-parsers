'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { specialSymbols } = lexers,
      { NO_WHITESPACE } = specialSymbols;

class NoWhitespacePartDefinition extends Definition {
  constructor() {
    const content = NO_WHITESPACE,
          nonWhitespace = false,
          terminalSymbolPart = new TerminalSymbolPart(content, nonWhitespace),
          parts = [
            terminalSymbolPart
          ];

    super(parts)
  }
}

module.exports = NoWhitespacePartDefinition;
