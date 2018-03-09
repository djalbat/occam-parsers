'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      ruleNames = require('../ruleNames'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { NO_WHITESPACE } = specialSymbols,
      { PartRuleName, RightRecursivePartRuleName } = ruleNames;

class NoWhitespaceDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          partRuleName = PartRuleName,
          rightRecursivePartRuleName = RightRecursivePartRuleName,
          noWhitespaceTerminalSymbolContent = NO_WHITESPACE,
          partRuleNamePart = new RuleNamePart(partRuleName),
          rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName),
          noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent, noWhitespace),
          parts = [
            noWhitespaceTerminalSymbolPart,
            partRuleNamePart,
            rightRecursivePartRuleNamePart
          ];
    
    super(parts)
  }
}

module.exports = NoWhitespaceDefinition;
