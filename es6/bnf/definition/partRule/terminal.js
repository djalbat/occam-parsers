'use strict';

const ruleNames = require('../../ruleNames'),
      Definition = require('../../definition'),
      RuleNamePart = require('../../part/nonTerminal/ruleName'),
      ZeroOrMorePartsPart = require('../../part/nonTerminal/zeroOrMoreParts');

const { QuantifierRuleName, TerminalPartRuleName } = ruleNames;

class TerminalPartRuleDefinition extends Definition {
  constructor() {
    const quantifierRuleName = QuantifierRuleName,
          terminalPartRuleName = TerminalPartRuleName,
          quantifierRuleNamePart = new RuleNamePart(quantifierRuleName),
          terminalPartRuleNamePart = new RuleNamePart(terminalPartRuleName),
          zeroOrMoreQuantifierRuleNamePartsPart = new ZeroOrMorePartsPart(quantifierRuleNamePart),
          parts = [
            terminalPartRuleNamePart,
            zeroOrMoreQuantifierRuleNamePartsPart
          ];
    
    super(parts)
  }
}

module.exports = TerminalPartRuleDefinition;
