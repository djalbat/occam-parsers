"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import StringLiteralPart from "../part/terminal/stringLiteral";

import { PART_RULE_NAME } from "../ruleNames";

const { backtick } = specialSymbols;

export default class RestritedPartDefinition extends Definition {
  static fromNothing() {
    const ruleName = PART_RULE_NAME,  ///
          backtickStringLiteralContent = backtick, ///
          partRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          backtickStringLiteralPart = StringLiteralPart.fromContent(backtickStringLiteralContent),
          parts = [
            backtickStringLiteralPart,
            partRuleNamePart
          ],
          precedence = null,
          restrictedPartDefinition = new RestritedPartDefinition(parts, precedence);

    return restrictedPartDefinition;
  }
}
