'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { specialSymbols } = lexers,
      { NO_WHITESPACE } = specialSymbols;

class NoWhitespacePartDefinition extends Definition {
  constructor() {
    const content = NO_WHITESPACE,
          terminalSymbolPart = new TerminalSymbolPart(content),
          parts = [
            terminalSymbolPart
          ];

    super(parts)
  }
}

module.exports = NoWhitespacePartDefinition;
