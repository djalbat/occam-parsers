'use strict';

const ruleNames = require('../../ruleNames'),
      Definition = require('../../definition'),
      RuleNamePart = require('../../part/nonTerminal/ruleName'),
      ZeroOrMorePartsPart = require('../../part/nonTerminal/zeroOrMoreParts');

const { ModifierRuleName, NonTerminalPartRuleName } = ruleNames;

class NonTerminalPartRuleDefinition extends Definition {
  constructor() {
    const modifierRuleName = ModifierRuleName,
          nonTerminalPartRuleName = NonTerminalPartRuleName,
          modifierRuleNamePart = new RuleNamePart(modifierRuleName),
          nonTerminalPartRuleNamePart = new RuleNamePart(nonTerminalPartRuleName),
          zeroOrMoreModifierRuleNamePartsPart = new ZeroOrMorePartsPart(modifierRuleNamePart),
          parts = [
            nonTerminalPartRuleNamePart,
            zeroOrMoreModifierRuleNamePartsPart
          ];
    
    super(parts)
  }
}

module.exports = NonTerminalPartRuleDefinition;
