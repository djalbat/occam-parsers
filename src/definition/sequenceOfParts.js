"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import StringLiteralPart from "../part/terminal/stringLiteral";
import OneOrMorePartsPart from "../part/nonTerminal/oneOrMoreParts";

import { PART_RULE_NAME } from "../ruleNames";

const { openBracket, closeBracket } = specialSymbols;

export default class SequenceOfPartsDefinition extends Definition {
  static fromNothing() {
    const ruleName = PART_RULE_NAME,  ///
          openBracketStringLiteralContent = openBracket, ///
          closeBracketStringLiteralContent = closeBracket, ///
          partRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          openBracketStringLiteralPart = StringLiteralPart.fromContent(openBracketStringLiteralContent),
          closeBracketStringLiteralPart = StringLiteralPart.fromContent(closeBracketStringLiteralContent),
          oneOrMorePartRuleNamePartsPart = OneOrMorePartsPart.fromPart(partRuleNamePart),
          parts = [
            openBracketStringLiteralPart,
            partRuleNamePart,
            oneOrMorePartRuleNamePartsPart,
            closeBracketStringLiteralPart
          ],
          precedence = null,
          sequenceOfPartsDefinition = new SequenceOfPartsDefinition(parts, precedence);

    return sequenceOfPartsDefinition;
  }
}
