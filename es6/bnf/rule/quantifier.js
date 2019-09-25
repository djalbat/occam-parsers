'use strict';

const Rule = require('../rule'),
      PartNode = require('../node/part'),
      ruleNames = require('../ruleNames'),
      RuleNameDefinition = require('../definition/ruleName');

const { QuantifierRuleName, OptionalQuantifierRuleName, OneOrMoreQuantifierRuleName, ZeroOrMoreQuantifierRuleName } = ruleNames;

class QuantifierRule extends Rule {
  constructor() {
    const name = QuantifierRuleName,
          optionalQuantifierRuleName = OptionalQuantifierRuleName,
          oneOrMoreQuantifierRuleName = OneOrMoreQuantifierRuleName,
          zeroOrMoreQuantifierRuleName = ZeroOrMoreQuantifierRuleName,
          optionalQuantifierRuleNameDefinition = new RuleNameDefinition(optionalQuantifierRuleName),
          oneOrMoreQuantifierRuleNameDefinition = new RuleNameDefinition(oneOrMoreQuantifierRuleName),
          zeroOrMoreQuantifierRuleNameDefinition = new RuleNameDefinition(zeroOrMoreQuantifierRuleName),
          definitions = [
            optionalQuantifierRuleNameDefinition,
            oneOrMoreQuantifierRuleNameDefinition,
            zeroOrMoreQuantifierRuleNameDefinition
          ],
          Node = PartNode;
    
    super(name, definitions, Node)
  }
}

module.exports = QuantifierRule;
