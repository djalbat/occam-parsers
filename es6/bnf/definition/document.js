'use strict';

const ruleNames = require('../ruleNames'),
      Definition = require('../definition'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      ChoiceOfPartsPart = require('../part/nonTerminal/choiceOfParts'),
      OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts');

const { RuleRuleName, ErrorRuleName } = ruleNames;

class DocumentDefinition extends Definition {
  constructor() {
    const lookAhead = false,
          noWhitespace = false,
          ruleRuleName = RuleRuleName,
          errorRuleName = ErrorRuleName,
          ruleRuleNamePart = new RuleNamePart(ruleRuleName, lookAhead, noWhitespace),
          errorRuleNamePart = new RuleNamePart(errorRuleName, lookAhead, noWhitespace),
          ruleRuleNameAndErrorRuleNameParts = [
            ruleRuleNamePart,
            errorRuleNamePart
          ],
          choiceOfRuleRuleNameAndErrorRuleNamePartsPart = new ChoiceOfPartsPart(ruleRuleNameAndErrorRuleNameParts),
          oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart = new OneOrMorePartsPart(choiceOfRuleRuleNameAndErrorRuleNamePartsPart, noWhitespace),
          parts = [
            oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart
          ];
    
    super(parts)
  }
}

module.exports = DocumentDefinition;
