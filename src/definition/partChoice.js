"use strict";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import OptionalPartPart from "../part/nonTerminal/optionalPart";

import { PART_RULE_NAME, PRECEDENCE_RULE_NAME } from "../ruleNames";

export default class PartChoiceDefinition extends Definition {
  static fromNothing() {
    let ruleName;

    ruleName = PART_RULE_NAME;

    const partRuleNamePart = RuleNamePart.fromRuleName(ruleName);

    ruleName = PRECEDENCE_RULE_NAME;

    const precedenceRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          optionalPrecedenceRuleNamePartPart = OptionalPartPart.fromPart(precedenceRuleNamePart),
          parts = [
            partRuleNamePart,
            optionalPrecedenceRuleNamePartPart
          ],
          precedence = null,
          partChoiceDefinition = new PartChoiceDefinition(parts, precedence);

    return partChoiceDefinition;
  }
}
