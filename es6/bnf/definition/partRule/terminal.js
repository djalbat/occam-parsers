'use strict';

const lexers = require('occam-lexers');

const ruleNames = require('../../ruleNames'),
      Definition = require('../../definition'),
      RuleNamePart = require('../../part/nonTerminal/ruleName'),
      OptionalPartPart = require('../../part/nonTerminal/optionalPart'),
      TerminalSymbolPart = require('../../part/terminal/terminalSymbol'),
      ZeroOrMorePartsPart = require('../../part/nonTerminal/zeroOrMoreParts');

const { specialSymbols } = lexers,
      { NON_WHITESPACE } = specialSymbols,
      { QuantifierRuleName, TerminalPartRuleName } = ruleNames;

class TerminalPartRuleDefinition extends Definition {
  constructor() {
    const nonWhitespace = false,
          quantifierRuleName = QuantifierRuleName,
          terminalPartRuleName = TerminalPartRuleName,
          nonWhitespaceTerminalSymbolContent = NON_WHITESPACE,
          quantifierRuleNamePart = new RuleNamePart(quantifierRuleName),
          terminalPartRuleNamePart = new RuleNamePart(terminalPartRuleName),
          nonWhitespaceTerminalSymbolPart = new TerminalSymbolPart(nonWhitespaceTerminalSymbolContent, nonWhitespace),
          zeroOrMoreQuantifierRuleNamePartsPart = new ZeroOrMorePartsPart(quantifierRuleNamePart),
          optionalNonWhitespaceTerminalSymbolPartPart = new OptionalPartPart(nonWhitespaceTerminalSymbolPart),
          parts = [
            optionalNonWhitespaceTerminalSymbolPartPart,
            terminalPartRuleNamePart,
            zeroOrMoreQuantifierRuleNamePartsPart
          ];
    
    super(parts)
  }
}

module.exports = TerminalPartRuleDefinition;
