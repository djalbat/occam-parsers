'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      RuleNamePart = require('../part/ruleName'),
      TerminalSymbolPart = require('../part/terminalSymbol');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { NO_WHITESPACE } = specialSymbols;

class NoWhitespaceDefinition extends Definition {
  constructor() {
    const partRuleName = 'part',
          rightRecursivePartRuleName = 'rightRecursivePart',
          noWhitespaceTerminalSymbolContent = NO_WHITESPACE,
          partRuleNamePart = new RuleNamePart(partRuleName),
          rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName),
          noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent),
          parts = [
            noWhitespaceTerminalSymbolPart,
            partRuleNamePart,
            rightRecursivePartRuleNamePart
          ];
    
    super(parts)
  }
}

module.exports = NoWhitespaceDefinition;
