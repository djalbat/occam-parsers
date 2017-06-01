'use strict';

const Rule = require('../rule'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol');

class NoWhitespaceRule extends Rule {
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

module.exports = NoWhitespaceRule;
