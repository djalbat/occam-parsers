'use strict';

const ruleNames = require('../../ruleNames'),
      Definition = require('../../definition'),
      RuleNamePart = require('../../part/nonTerminal/ruleName'),
      ZeroOrMorePartsPart = require('../../part/nonTerminal/zeroOrMoreParts');

const { QuantifierRuleName, NonTerminalPartRuleName } = ruleNames;

class NonTerminalPartRuleDefinition extends Definition {
  constructor() {
    const quantifierRuleName = QuantifierRuleName,
          nonTerminalPartRuleName = NonTerminalPartRuleName,
          quantifierRuleNamePart = new RuleNamePart(quantifierRuleName),
          nonTerminalPartRuleNamePart = new RuleNamePart(nonTerminalPartRuleName),
          zeroOrMoreModifierRuleNamePartsPart = new ZeroOrMorePartsPart(quantifierRuleNamePart),
          parts = [
            nonTerminalPartRuleNamePart,
            zeroOrMoreModifierRuleNamePartsPart
          ];
    
    super(parts)
  }
}

module.exports = NonTerminalPartRuleDefinition;
