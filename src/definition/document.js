"use strict";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import ChoiceOfPartsPart from "../part/nonTerminal/choiceOfParts";
import OneOrMorePartsPart from "../part/nonTerminal/oneOrMoreParts";

import { ruleRuleName, errorRuleName } from "../ruleNames";

export default class DocumentDefinition extends Definition {
  static fromNothing() {
    let parts;

    const ruleRuleNamePart = RuleNamePart.fromRuleName(ruleRuleName),
          errorRuleNamePart = RuleNamePart.fromRuleName(errorRuleName);

    parts = [
      ruleRuleNamePart,
      errorRuleNamePart
    ];

    const choiceOfRuleRuleNameAndErrorRuleNamePartsPart = ChoiceOfPartsPart.fromParts(parts),
          oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart = OneOrMorePartsPart.fromPart(choiceOfRuleRuleNameAndErrorRuleNamePartsPart);

    parts = [
      oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart
    ];

    const precedence = null,
          documentDefinition = new DocumentDefinition(parts, precedence);

    return documentDefinition;
  }
}
