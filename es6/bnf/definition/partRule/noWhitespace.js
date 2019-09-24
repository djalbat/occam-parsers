'use strict';

const lexers = require('occam-lexers');

const ruleNames = require('../../ruleNames'),
      Definition = require('../../definition'),
      RuleNamePart = require('../../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../../part/terminal/terminalSymbol');

const { specialSymbols } = lexers,
      { NO_WHITESPACE } = specialSymbols,
      { PartRuleName, RightRecursivePartRuleName } = ruleNames;

class NoWhitespacePartRuleDefinition extends Definition {
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

module.exports = NoWhitespacePartRuleDefinition;
