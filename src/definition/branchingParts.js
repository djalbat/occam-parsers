"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import StringLiteralPart from "../part/terminal/stringLiteral";

import { PART_RULE_NAME } from "../ruleNames";

const { ellipsis, openBracket, closeBracket } = specialSymbols;

export default class BranchingPartsDefinition extends Definition {
  static fromNothing() {
    const ruleName = PART_RULE_NAME,  ///
          ellipsisStringLiteralContent = ellipsis, ///
          openBracketStringLiteralContent = openBracket, ///
          closeBracketStringLiteralContent = closeBracket, ///
          partRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          ellipsisStringLiteralPart = StringLiteralPart.fromContent(ellipsisStringLiteralContent),
          openBracketStringLiteralPart = StringLiteralPart.fromContent(openBracketStringLiteralContent),
          closeBracketStringLiteralPart = StringLiteralPart.fromContent(closeBracketStringLiteralContent),
          parts = [
            openBracketStringLiteralPart,
            partRuleNamePart,
            ellipsisStringLiteralPart,
            partRuleNamePart,
            closeBracketStringLiteralPart
          ],
          precedence = null,
          branchingPartsDefinition = new BranchingPartsDefinition(parts, precedence);

    return branchingPartsDefinition;
  }
}
