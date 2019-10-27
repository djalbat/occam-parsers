'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { specialSymbols } = lexers,
      { exclamationMark } = specialSymbols;

class LookAheadModifierRuleDefinition extends Definition {
  constructor() {
    const content = exclamationMark,  ///
          terminalSymbolPart = new TerminalSymbolPart(content),
          parts = [
            terminalSymbolPart
          ];

    super(parts)
  }
}

module.exports = LookAheadModifierRuleDefinition;
