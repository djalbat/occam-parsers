"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import StringLiteralPart from "../part/terminal/stringLiteral";

import { PART_RULE_NAME } from "../ruleNames";

const { openBracket, closeBracket } = specialSymbols;

export default class IsolatedPartDefinition extends Definition {
  static fromNothing() {
    const ruleName = PART_RULE_NAME,  ///
          openBracketStringLiteralContent = openBracket, ///
          closeBracketStringLiteralContent = closeBracket, ///
          partRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          openBracketStringLiteralPart = StringLiteralPart.fromContent(openBracketStringLiteralContent),
          closeBracketStringLiteralPart = StringLiteralPart.fromContent(closeBracketStringLiteralContent),
          parts = [
            openBracketStringLiteralPart,
            partRuleNamePart,
            closeBracketStringLiteralPart
          ],
          precedence = null,
          isolatedPartDefinition = new IsolatedPartDefinition(parts, precedence);

    return isolatedPartDefinition;
  }
}
