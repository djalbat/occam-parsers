'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol');

class LazyQuantifierDefinition extends Definition {
  constructor() {
    const questionMarkTerminalSymbolContent = '?',
          questionMarkTerminalSymbolNoWhitespace = true,
          questionMarkTerminalSymbolPart = new TerminalSymbolPart(questionMarkTerminalSymbolContent, questionMarkTerminalSymbolNoWhitespace),
          parts = [
            questionMarkTerminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = LazyQuantifierDefinition;
