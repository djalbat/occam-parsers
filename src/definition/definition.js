"use strict";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import OptionalPartPart from "../part/nonTerminal/optionalPart";
import OneOrMorePartsPart from "../part/nonTerminal/oneOrMoreParts";

import { PART_RULE_NAME, PRECEDENCE_RULE_NAME } from "../ruleNames";

export default class DefinitionDefinition extends Definition {
  static fromNothing() {
    let ruleName;

    ruleName = PART_RULE_NAME;

    const partRuleNamePart = RuleNamePart.fromRuleName(ruleName);

    ruleName = PRECEDENCE_RULE_NAME;

    const precedenceRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          oneOrMoreRuleNamePartsPart = OneOrMorePartsPart.fromPart(partRuleNamePart),
          optionalPrecedenceRuleNamePartPart = OptionalPartPart.fromPart(precedenceRuleNamePart),
          parts = [
            oneOrMoreRuleNamePartsPart,
            optionalPrecedenceRuleNamePartPart
          ],
          precedence = null,
          definitionDefinition = new DefinitionDefinition(parts, precedence);

    return definitionDefinition;
  }
}
