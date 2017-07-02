'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      RuleNamePart = require('../part/ruleName'),
      TerminalSymbolPart = require('../part/terminalSymbol');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { NO_WHITESPACE } = specialSymbols;

class NoWhitespacePartDefinition extends Definition {
  constructor() {
    const partRuleName = 'part',
          noWhitespaceTerminalSymbolContent = NO_WHITESPACE,
          noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent),
          partRuleNamePart = new RuleNamePart(partRuleName),
          parts = [
            noWhitespaceTerminalSymbolPart,
            partRuleNamePart
          ];
    
    super(parts)
  }
}

module.exports = NoWhitespacePartDefinition;
