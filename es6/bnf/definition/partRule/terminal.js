'use strict';

const lexers = require('occam-lexers');

const ruleNames = require('../../ruleNames'),
      Definition = require('../../definition'),
      RuleNamePart = require('../../part/nonTerminal/ruleName'),
      OptionalPartPart = require('../../part/nonTerminal/optionalPart'),
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
          optionalNoWhitespaceTerminalSymbolPartPart = new OptionalPartPart(noWhitespaceTerminalSymbolPart),
          parts = [
            optionalNoWhitespaceTerminalSymbolPartPart,
            terminalPartRuleNamePart
          ];
    
    super(parts)
  }
}

module.exports = TerminalPartRuleDefinition;
