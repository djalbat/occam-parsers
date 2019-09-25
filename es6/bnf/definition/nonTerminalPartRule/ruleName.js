'use strict';

const ruleNames = require('../../ruleNames'),
      Definition = require('../../definition'),
      RuleNamePart = require('../../part/nonTerminal/ruleName'),
      OptionalPartPart = require('../../part/nonTerminal/optionalPart');

const { RuleNameRuleName, LookAheadModifierRuleName } = ruleNames;

class RuleNameNonTerminalPartRuleDefinition extends Definition {
  constructor() {
    const ruleNameRuleName = RuleNameRuleName,
          lookAheadModifierRuleName = LookAheadModifierRuleName,
          ruleNameRuleNamePart = new RuleNamePart(ruleNameRuleName),
          lookAheadModifierRuleNamePart = new RuleNamePart(lookAheadModifierRuleName),
          optionalLookAheadRuleNamePartPart = new OptionalPartPart(lookAheadModifierRuleNamePart),
          parts = [
            ruleNameRuleNamePart,
            optionalLookAheadRuleNamePartPart
          ];
    
    super(parts)
  }
}

module.exports = RuleNameNonTerminalPartRuleDefinition;
