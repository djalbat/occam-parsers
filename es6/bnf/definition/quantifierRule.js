'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

class QuantifierRuleDefinition extends Definition {
  constructor(terminalSymbolContent) {
    const content = terminalSymbolContent,  ///
          noWhitespace = true,
          terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace),
          parts = [
            terminalSymbolPart
          ];

    super(parts)
  }
}

module.exports = QuantifierRuleDefinition;
