"use strict";

import Definition from "../definition";
import PartChoice from "../partChoice";
import RuleNamePart from "../part/nonTerminal/ruleName";
import ChoiceOfPartsPart from "../part/nonTerminal/choiceOfParts";
import OneOrMorePartsPart from "../part/nonTerminal/oneOrMoreParts";

import { ruleRuleName, errorRuleName } from "../ruleNames";

export default class DocumentDefinition extends Definition {
  static fromNothing() {
    const ruleRuleNamePart = RuleNamePart.fromRuleName(ruleRuleName),
          errorRuleNamePart = RuleNamePart.fromRuleName(errorRuleName),
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
