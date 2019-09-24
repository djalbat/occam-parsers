'use strict';

const ruleNames = require('../ruleNames'),
      Definition = require('../definition'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      ChoiceOfPartsPart = require('../part/nonTerminal/choiceOfParts'),
      OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts');

const { RuleRuleName, ErrorRuleName } = ruleNames;

class DocumentDefinition extends Definition {
  constructor() {
    const ruleRuleName = RuleRuleName,
          errorRuleName = ErrorRuleName,
          ruleRuleNamePart = new RuleNamePart(ruleRuleName),
          errorRuleNamePart = new RuleNamePart(errorRuleName),
          ruleRuleNameAndErrorRuleNameParts = [
            ruleRuleNamePart,
            errorRuleNamePart
          ],
          choiceOfRuleRuleNameAndErrorRuleNamePartsPart = new ChoiceOfPartsPart(ruleRuleNameAndErrorRuleNameParts),
          oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart = new OneOrMorePartsPart(choiceOfRuleRuleNameAndErrorRuleNamePartsPart),
          parts = [
            oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart
          ];
    
    super(parts)
  }
}

module.exports = DocumentDefinition;
