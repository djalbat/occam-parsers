'use strict';

const Rule = require('../rule'),
      PartNode = require('../node/part'),
      ruleNames = require('../ruleNames'),
      RuleNameDefinition = require('../definition/ruleName');

const { ModifierRuleName, OptionalModifierRuleName, OneOrMoreModifierRuleName, ZeroOrMoreModifierRuleName } = ruleNames;

class ModifierRule extends Rule {
  constructor() {
    const name = ModifierRuleName,
          optionalModifierRuleName = OptionalModifierRuleName,
          oneOrMoreModifierRuleName = OneOrMoreModifierRuleName,
          zeroOrMoreModifierRuleName = ZeroOrMoreModifierRuleName,
          optionalModifierRuleNameDefinition = new RuleNameDefinition(optionalModifierRuleName),
          oneOrMoreModifierRuleNameDefinition = new RuleNameDefinition(oneOrMoreModifierRuleName),
          zeroOrMoreModifierRuleNameDefinition = new RuleNameDefinition(zeroOrMoreModifierRuleName),
          definitions = [
            optionalModifierRuleNameDefinition,
            oneOrMoreModifierRuleNameDefinition,
            zeroOrMoreModifierRuleNameDefinition
          ],
          Node = PartNode;
    
    super(name, definitions, Node)
  }
}

module.exports = ModifierRule;
