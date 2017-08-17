'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      ruleNames = require('../ruleNames'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { NO_WHITESPACE } = specialSymbols;

class NoWhitespaceDefinition extends Definition {
  constructor() {
    const partRuleName = ruleNames.PartRule,
          rightRecursivePartRuleName = ruleNames.RightRecursivePartRule,
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
