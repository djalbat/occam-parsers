'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

class QuantifierRuleDefinition extends Definition {
  constructor(terminalSymbolContent) {
    const content = terminalSymbolContent,  ///
          terminalSymbolPart = new TerminalSymbolPart(content),
          parts = [
            terminalSymbolPart
          ];

    super(parts)
  }
}

module.exports = QuantifierRuleDefinition;
