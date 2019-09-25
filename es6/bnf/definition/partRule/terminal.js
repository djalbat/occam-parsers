'use strict';

const lexers = require('occam-lexers');

const ruleNames = require('../../ruleNames'),
      Definition = require('../../definition'),
      RuleNamePart = require('../../part/nonTerminal/ruleName'),
      OptionalPartPart = require('../../part/nonTerminal/optionalPart'),
      TerminalSymbolPart = require('../../part/terminal/terminalSymbol'),
      ZeroOrMorePartsPart = require('../../part/nonTerminal/zeroOrMoreParts');

const { specialSymbols } = lexers,
      { NO_WHITESPACE } = specialSymbols,
      { QuantifierRuleName, TerminalPartRuleName } = ruleNames;

class TerminalPartRuleDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          quantifierRuleName = QuantifierRuleName,
          terminalPartRuleName = TerminalPartRuleName,
          noWhitespaceTerminalSymbolContent = NO_WHITESPACE,
          quantifierRuleNamePart = new RuleNamePart(quantifierRuleName),
          terminalPartRuleNamePart = new RuleNamePart(terminalPartRuleName),
          noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent, noWhitespace),
          zeroOrMoreQuantifierRuleNamePartsPart = new ZeroOrMorePartsPart(quantifierRuleNamePart),
          optionalNoWhitespaceTerminalSymbolPartPart = new OptionalPartPart(noWhitespaceTerminalSymbolPart),
          parts = [
            optionalNoWhitespaceTerminalSymbolPartPart,
            terminalPartRuleNamePart,
            zeroOrMoreQuantifierRuleNamePartsPart
          ];
    
    super(parts)
  }
}

module.exports = TerminalPartRuleDefinition;
