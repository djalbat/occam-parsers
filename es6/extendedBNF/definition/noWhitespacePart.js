'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      RuleNamePart = require('../part/ruleName'),
      TerminalSymbolPart = require('../part/terminalSymbol');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
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
