"use strict";

import Definition from "../definition";
import PartChoice from "../partChoice";
import RuleNamePart from "../part/nonTerminal/ruleName";
import ChoiceOfPartsPart from "../part/nonTerminal/choiceOfParts";
import OneOrMorePartsPart from "../part/nonTerminal/oneOrMoreParts";

import { RULE_RULE_NAME, ERROR_RULE_NAME } from "../ruleNames";

export default class DocumentDefinition extends Definition {
  static fromNothing() {
    let ruleName;

    ruleName = RULE_RULE_NAME;

    const ruleRuleNamePart = RuleNamePart.fromRuleName(ruleName);

    ruleName = ERROR_RULE_NAME;

    const errorRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          ruleRuleNamePartChoice = PartChoice.fromPart(ruleRuleNamePart),
          errorRuleNamePartChoice = PartChoice.fromPart(errorRuleNamePart),
          partChoices = [
            ruleRuleNamePartChoice,
            errorRuleNamePartChoice
          ],
          choiceOfRuleRuleNameAndErrorRuleNamePartsPart = ChoiceOfPartsPart.fromPartChoices(partChoices),
          oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart = OneOrMorePartsPart.fromPart(choiceOfRuleRuleNameAndErrorRuleNamePartsPart),
          parts = [
            oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart
          ],
          precedence = null,
          documentDefinition = new DocumentDefinition(parts, precedence);

    return documentDefinition;
  }
}
