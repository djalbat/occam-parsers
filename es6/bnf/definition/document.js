"use strict";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import ChoiceOfPartsPart from "../part/nonTerminal/choiceOfParts";
import OneOrMorePartsPart from "../part/nonTerminal/oneOrMoreParts";

import { RuleRuleName, ErrorRuleName } from "../ruleNames";

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
