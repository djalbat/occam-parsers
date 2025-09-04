"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import OptionalPartPart from "../part/nonTerminal/optionalPart";
import StringLiteralPart from "../part/terminal/stringLiteral";

import { NAME_RULE_NAME, DEFINITIONS_RULE_NAME, OPACITY_MODIFIER_RULE_NAME } from "../ruleNames";

const { separator, terminator } = specialSymbols;

export default class RuleDefinition extends Definition {
  static fromNothing() {
    let ruleName;

    const separatorStringLiteralContent = separator, ///
          terminatorStringLiteralContent = terminator; ///

    ruleName = OPACITY_MODIFIER_RULE_NAME;

    const opacityModifierRuleNamePart = RuleNamePart.fromRuleName(ruleName);

    ruleName = NAME_RULE_NAME;

    const nameRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          optionalOpacityRuleNamePartPart = OptionalPartPart.fromPart(opacityModifierRuleNamePart),
          separatorStringLiteralPart = StringLiteralPart.fromContent(separatorStringLiteralContent);

    ruleName = DEFINITIONS_RULE_NAME;

    const definitionsRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          terminatorStringLiteralPart = StringLiteralPart.fromContent(terminatorStringLiteralContent),
          parts = [
            nameRuleNamePart,
            optionalOpacityRuleNamePartPart,
            separatorStringLiteralPart,
            definitionsRuleNamePart,
            terminatorStringLiteralPart
          ],
          precedence = null,
          ruleDefinition = new RuleDefinition(parts, precedence);

    return ruleDefinition;
  }
}
