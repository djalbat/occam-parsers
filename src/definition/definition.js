"use strict";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import OptionalPartPart from "../part/nonTerminal/optionalPart";
import OneOrMorePartsPart from "../part/nonTerminal/oneOrMoreParts";

import { partRuleName, precedenceRuleName } from "../ruleNames";

export default class DefinitionDefinition extends Definition {
  static fromNothing() {
    const partRuleNamePart = new RuleNamePart(partRuleName),
          precedenceRuleNamePart = new RuleNamePart(precedenceRuleName),
          oneOrMoreRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart),
          optionalPrecedenceRuleNamePartPart = new OptionalPartPart(precedenceRuleNamePart),
          parts = [
            oneOrMoreRuleNamePartsPart,
            optionalPrecedenceRuleNamePartPart
          ],
          precedence = null,
          definitionDefinition = new DefinitionDefinition(parts, precedence);

    return definitionDefinition;
  }
}
