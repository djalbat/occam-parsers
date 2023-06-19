"use strict";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import OptionalPartPart from "../part/nonTerminal/optionalPart";

import { partRuleName, precedenceRuleName } from "../ruleNames";

export default class PartChoiceDefinition extends Definition {
  static fromNothing() {
    const partRuleNamePart = RuleNamePart.fromRuleName(partRuleName),
          precedenceRuleNamePart = RuleNamePart.fromRuleName(precedenceRuleName),
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
