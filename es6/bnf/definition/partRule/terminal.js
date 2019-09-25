'use strict';

const lexers = require('occam-lexers');

const ruleNames = require('../../ruleNames'),
      Definition = require('../../definition'),
      RuleNamePart = require('../../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../../part/terminal/terminalSymbol');

const { specialSymbols } = lexers,
      { NO_WHITESPACE } = specialSymbols,
      { TerminalPartRuleName } = ruleNames;

class TerminalPartRuleDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          terminalPartRuleName = TerminalPartRuleName,
          noWhitespaceTerminalSymbolContent = NO_WHITESPACE,
          terminalPartRuleNamePart = new RuleNamePart(terminalPartRuleName),
          noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent, noWhitespace),
          parts = [
            noWhitespaceTerminalSymbolPart,
            terminalPartRuleNamePart
          ];
    
    super(parts)
  }
}

module.exports = TerminalPartRuleDefinition;
