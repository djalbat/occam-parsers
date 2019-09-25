'use strict';

const ruleNames = require('../../ruleNames'),
      Definition = require('../../definition'),
      RuleNamePart = require('../../part/nonTerminal/ruleName'),
      ZeroOrMorePartsPart = require('../../part/nonTerminal/zeroOrMoreParts');

const { NonTerminalPartRuleName } = ruleNames;

class NonTerminalPartRuleDefinition extends Definition {
  constructor() {
    const nonTerminalPartRuleName = NonTerminalPartRuleName,
          nonTerminalPartRuleNamePart = new RuleNamePart(nonTerminalPartRuleName),
          zeroOrMoreNonTerminalPartRuleNamePartsPart = new ZeroOrMorePartsPart(nonTerminalPartRuleNamePart),
          parts = [
            zeroOrMoreNonTerminalPartRuleNamePartsPart
          ];
    
    super(parts)
  }
}

module.exports = NonTerminalPartRuleDefinition;
