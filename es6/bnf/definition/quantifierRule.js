'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

class QuantifierRuleDefinition extends Definition {
  constructor(terminalSymbolContent) {
    const content = terminalSymbolContent,  ///
          nonWhitespace = true,
          terminalSymbolPart = new TerminalSymbolPart(content, nonWhitespace),
          parts = [
            terminalSymbolPart
          ];

    super(parts)
  }
}

module.exports = QuantifierRuleDefinition;
